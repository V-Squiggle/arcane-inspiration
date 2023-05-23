import { GptMessage } from '@/hooks/useOpenAiCompletion/useOpenAiCompletion.types'
import React from 'react'

type Props = {
	messageHistory: GptMessage[]
}
const ChatHistory = ({ messageHistory }: Props) => {
	return (
		<div>
			{messageHistory.map((message, i) => (
				<React.Fragment key={'message-' + i}>
					<h6>{message.sender}</h6>
					<p>{message.message}</p>
				</React.Fragment>
			))}
		</div>
	)
}

export { ChatHistory }
