import { ChatHistory, PromptInputBox } from '.'
import { useOpenAICompletion } from '@/hooks'

import styles from './chat.module.scss'

const Chat = () => {
	const { messageHistory, sendMessage } = useOpenAICompletion()

	return (
		<div className={styles['wrapper']}>
			<ChatHistory messageHistory={messageHistory} />
			<PromptInputBox sendMessage={sendMessage} />
		</div>
	)
}

export default Chat
