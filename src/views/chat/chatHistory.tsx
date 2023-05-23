import { ScrollableWindow } from '@/components'
import { Fragment } from 'react'
import { GptMessage } from '@/hooks/useOpenAiCompletion/useOpenAiCompletion.types'

type Props = {
	messageHistory: GptMessage[]
}
const ChatHistory = ({ messageHistory }: Props) => {
	return (
		<ScrollableWindow>
			{messageHistory.map((message, i) => (
				<Fragment key={'message-' + i}>
					<h6>{message.sender}</h6>
					<p>{message.message}</p>
				</Fragment>
			))}
		</ScrollableWindow>
	)
}

export { ChatHistory }
