export type GptMessage = {
	sender: MessageSender
	message: string
	isError: boolean
}

export type MessageSender = 'user' | 'bot' | 'system' | 'error'

export type GptErrorResponse = {
	error: {
		message: string
		type: string
		param: string
		code?: number
	}
}
