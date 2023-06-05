import {
	ChatCompletionRequestMessage,
	ChatCompletionRequestMessageRoleEnum,
} from 'openai'
import { GptMessage } from './useOpenAiChat.types'

export const mapHistory = (
	history: GptMessage[],
): ChatCompletionRequestMessage[] => {
	return history
		.filter((item) => item.sender !== 'error')
		.map<ChatCompletionRequestMessage>((item) => {
			return {
				content: item.message,
				role: getRoleFromMessage(item),
			}
		})
}

export const getRoleFromMessage = (
	message: GptMessage,
): ChatCompletionRequestMessageRoleEnum => {
	switch (message.sender) {
		case 'bot':
			return 'assistant'
		case 'user':
			return 'user'
		case 'system':
			return 'system'
		default:
			throw Error('Invalid message sender')
	}
}
