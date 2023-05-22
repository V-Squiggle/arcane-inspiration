import { ControlledInput } from '@/components'
import { useOpenAICompletion } from '@/hooks'
import React, { useState } from 'react'

const SendMessage = () => {
	const [message, setMessage] = useState('')
	const { messageHistory, sendMessage } = useOpenAICompletion()
	const handleSendMessage = () => sendMessage(message)

	return (
		<>
			<div>
				<ControlledInput type='text' value={message} setValue={setMessage} />
			</div>
			<button onClick={handleSendMessage}>Send Message</button>
			{messageHistory.map((message, i) => (
				<React.Fragment key={'message-' + i}>
					<h6>{message.sender}</h6>
					<p>{message.message}</p>
				</React.Fragment>
			))}
		</>
	)
}

export default SendMessage
