export type GptMessage = {
	sender: MessageSender
	message?: string
}

export type MessageSender = 'user' | 'bot' | 'system'
