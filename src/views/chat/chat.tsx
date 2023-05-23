import { ChatHistory, PromptInputBox } from '.'
import { useOpenAICompletion } from '@/hooks'

import styles from './chat.module.scss'
import ScrollableWindow from '@/components/scrollable-window/scrollable-window'

const Chat = () => {
	const { messageHistory, sendMessage } = useOpenAICompletion()

	return (
		<div className={styles['wrapper']}>
			<ScrollableWindow>
				<ChatHistory messageHistory={messageHistory} />
			</ScrollableWindow>
			<PromptInputBox sendMessage={sendMessage} />
		</div>
	)
}

export default Chat
