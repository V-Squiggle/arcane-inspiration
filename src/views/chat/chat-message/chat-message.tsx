import {
	GptMessage,
	MessageSender,
} from '@/hooks/useOpenAiCompletion/useOpenAiCompletion.types'
import classNames from 'classnames'

import styles from './chat-message.module.scss'

type Props = {
	message: GptMessage
}

const ChatMessage = ({ message }: Props) => {
	const messageClasses = classNames(styles['wrapper'], {
		[styles['user']]: message.sender === 'user',
		[styles['error']]: message.isError,
	})

	return (
		<div className={messageClasses}>
			<h6 className={styles['sender']}>{getSenderLabel(message.sender)}</h6>
			<p className={styles['message']}>{cleanMessage(message.message)}</p>
		</div>
	)
}

const getSenderLabel = (sender: MessageSender) => {
	switch (sender.toLowerCase()) {
		case 'bot':
			return 'Bot'
		case 'system':
			return 'System'
		case 'user':
			return 'You'
	}
}

const cleanMessage = (message: string) => {
	return message.trimStart().trimEnd()
}

export default ChatMessage
