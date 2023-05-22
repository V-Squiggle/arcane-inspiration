export type GptMessage = {
	sender: 'user' | 'bot' | 'system'
	message?: string
}
