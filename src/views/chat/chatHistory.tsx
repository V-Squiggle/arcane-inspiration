import { ScrollableWindow } from '@/components'
import { GptMessage } from '@/hooks/useOpenAiCompletion/useOpenAiCompletion.types'
import { ChatMessage } from './chat-message'
import { useEffect } from 'react'

type Props = {
	messageHistory: GptMessage[]
}
const ChatHistory = ({ messageHistory }: Props) => {
	useEffect(() => {
		const chatHistory = document.getElementById('chat-history')
		if (chatHistory) {
			chatHistory.scrollTop = chatHistory.scrollHeight
		}
	}, [messageHistory.length])

	return (
		<ScrollableWindow id='chat-history'>
			{messageHistory.map((message, i) => (
				<ChatMessage key={i} message={message} />
			))}
		</ScrollableWindow>
	)
}

export { ChatHistory }
