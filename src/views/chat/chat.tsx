import { ChatHistory } from './chatHistory'
import { useOpenAICompletion } from '@/hooks/open-ai'
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
