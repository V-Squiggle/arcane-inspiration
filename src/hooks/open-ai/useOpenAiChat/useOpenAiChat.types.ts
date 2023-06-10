export type GptMessage = {
	sender: MessageSender
	message: string
	isError: boolean
}

export const messageSenderTypes = ['user', 'bot', 'system', 'error'] as const
export type MessageSender = (typeof messageSenderTypes)[number]

export type GptErrorResponse = {
	error: {
		message: string
		type: string
		param: string
		code?: number
	}
}
