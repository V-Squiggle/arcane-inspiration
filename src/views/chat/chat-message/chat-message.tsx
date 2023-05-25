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
	})

	return (
		<div className={messageClasses}>
			<h6 className={styles['sender']}>{getSenderLabel(message.sender)}</h6>
			<p className={styles['message']}>{message.message}</p>
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

export { ChatMessage }
