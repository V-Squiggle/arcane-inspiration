import { useState } from 'react'
import { CreateCompletionResponse } from 'openai'
import { GptMessage } from './useOpenAiCompletion.types'
import useOpenAiConfigInstance from './useOpenAiConfigInstance'

const useOpenAICompletion = () => {
	const { getCompletion } = useOpenAiConfigInstance()
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
				if (error?.response?.status === 401) {
					addMessageToHistory({
						message: 'Invalid API Key',
						sender: 'system',
					})
				}
			})
	}

	return {
		completionRequestHistory,
		latestResponse,
		messageHistory,
		sendMessage,
	}
}

export { useOpenAICompletion }
