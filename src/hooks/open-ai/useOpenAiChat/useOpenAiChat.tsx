import { useState } from 'react'
import { CreateCompletionResponse } from 'openai'
import { GptErrorResponse, GptMessage } from './useOpenAiChat.types'
import { mapHistory } from './utils'
import { useOpenAi } from '@/hooks/open-ai'

const useOpenAICompletion = () => {
	const { getChatCompletion } = useOpenAi()
	const [completionRequestHistory, setCompletionRequestHistory] = useState<
		CreateCompletionResponse[]
	>([])
	const [messageHistory, setMessageHistory] = useState<GptMessage[]>([])
	const addMessageToHistory = (message: GptMessage) =>
		setMessageHistory((prev) => [...prev, message])

	const latestResponse = messageHistory
		.filter((message) => message.sender === 'bot')
		.at(-1)
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleOpenAiErrorResponse = (error: any) => {
		if (error?.response?.status === 401) {
			addMessageToHistory({
				isError: true,
				message: 'Invalid API Key',
				sender: 'error',
			})
		} else {
			const errorRes: GptErrorResponse = error?.response?.data
			addMessageToHistory({
				isError: true,
				message: errorRes?.error.message || 'Unknown Error',
				sender: 'error',
			})
		}
	}

	const sendChatMessage = (message: string) => {
		addMessageToHistory({
			isError: false,
			message: message,
			sender: 'user',
		})
		getChatCompletion(mapHistory(messageHistory), message)
			.then((response) => {
				setCompletionRequestHistory((prev) => [...prev, response.data])
				addMessageToHistory({
					isError: false,
					message: response.data.choices[0].message?.content || '',
					sender: 'bot',
				})
			})
			.catch(handleOpenAiErrorResponse)
	}

	return {
		completionRequestHistory,
		latestResponse,
		messageHistory,
		sendChatMessage,
	}
}

export { useOpenAICompletion }
