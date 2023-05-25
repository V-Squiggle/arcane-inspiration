import { ScrollableWindow } from '@/components'
import { GptMessage } from '@/hooks/useOpenAiCompletion/useOpenAiCompletion.types'
import { ChatMessage } from './chat-message'

type Props = {
	messageHistory: GptMessage[]
}
const ChatHistory = ({ messageHistory }: Props) => {
	return (
		<ScrollableWindow>
			{messageHistory.map((message, i) => (
				<ChatMessage key={i} message={message} />
			))}
		</ScrollableWindow>
	)
}

export { ChatHistory }
