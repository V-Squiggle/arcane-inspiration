import { ScrollableWindow } from '@/components'
import { GptMessage } from '@/hooks/useOpenAiCompletion/useOpenAiCompletion.types'
import { ChatMessage } from './chat-message'
import { useEffect } from 'react'

import styles from './chat.module.scss'

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
		<div className={styles['message-container']}>
			<ScrollableWindow id='chat-history'>
				{messageHistory.map((message, i) => (
					<ChatMessage key={i} message={message} />
				))}
			</ScrollableWindow>
		</div>
	)
}

export { ChatHistory }
