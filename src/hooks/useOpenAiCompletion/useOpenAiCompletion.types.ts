export type GptMessage = {
	sender: MessageSender
	message: string
	isError: boolean
}

export type MessageSender = 'user' | 'bot' | 'system'
