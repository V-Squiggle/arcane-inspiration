import { ChatHistory } from '.'
import { useOpenAICompletion } from '@/hooks'
import { PromptInputBox } from './prompt-input-box'

import styles from './chat.module.scss'

const Chat = () => {
	const { messageHistory, sendChatMessage } = useOpenAICompletion()

	return (
		<div className={styles['wrapper']}>
			<div className={styles['container']}>
				<ChatHistory messageHistory={messageHistory} />
				<PromptInputBox sendMessage={sendChatMessage} />
			</div>
		</div>
	)
}

export default Chat
