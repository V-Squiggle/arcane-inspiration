import { useState } from 'react'
import { Configuration, CreateCompletionResponse, OpenAIApi } from 'openai'
import { GptMessage } from './useOpenAiCompletion.types'

const configuration = new Configuration({
	apiKey: import.meta.env.VITE_OPENAI_API_KEY,
})
delete configuration.baseOptions.headers['User-Agent']

const openAi = new OpenAIApi(configuration)

const useOpenAICompletion = () => {
	const [completionRequestHistory, setCompletionRequestHistory] = useState<
		CreateCompletionResponse[]
	>([])
	const [messageHistory, setMessageHistory] = useState<GptMessage[]>([])
	const addMessageToHistory = (message: GptMessage) =>
		setMessageHistory((prev) => [...prev, message])

	const latestResponse = messageHistory
		.filter((message) => message.sender === 'bot')
		.at(-1)

	const sendMessage = (message: string) => {
		addMessageToHistory({
			message: message,
			sender: 'user',
		})
		getCompletion(message)
			.then((response) => {
				setCompletionRequestHistory((prev) => [...prev, response.data])
				addMessageToHistory({
					message: response.data.choices[0].text,
					sender: 'bot',
				})
			})
			.catch((error) => {
				throw error
			})
	}

	return {
		completionRequestHistory,
		latestResponse,
		messageHistory,
		sendMessage,
	}
}

const getCompletion = async (prompt: string) =>
	await openAi.createCompletion({
		max_tokens: 20,
		model: 'text-davinci-003',
		prompt: prompt,
		temperature: 0.5,
	})

export { useOpenAICompletion }
