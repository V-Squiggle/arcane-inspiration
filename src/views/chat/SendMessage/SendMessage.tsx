import { ControlledInput } from '@/components'
import { useOpenAICompletion } from '@/hooks'
import React, { useState } from 'react'

import styles from './sendmessage.module.scss'

const SendMessage = () => {
	const [message, setMessage] = useState('')
	const { messageHistory, sendMessage } = useOpenAICompletion()

	const handleSendMessage = () => {
		sendMessage(message)
		setMessage('')
	}

	return (
		<>
			<div className={styles['prompt-input--wrapper']}>
				<ControlledInput
					type='text'
					onSubmit={handleSendMessage}
					value={message}
					setValue={setMessage}
				/>
				<button onClick={handleSendMessage}>Send Message</button>
			</div>
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
