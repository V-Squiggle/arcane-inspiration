import { ControlledInput } from '@/components'
import { useOpenAICompletion } from '@/hooks'
import React, { useState } from 'react'

import styles from './sendmessage.module.scss'

type Props = {
	sendMessage: (message: string) => void
}

const SendMessage = ({ sendMessage }: Props) => {
	const [message, setMessage] = useState('')

	const handleSendMessage = () => {
		sendMessage(message)
		setMessage('')
	}

	return (
		<div className={styles['prompt-input--wrapper']}>
			<ControlledInput
				type='text'
				onSubmit={handleSendMessage}
				value={message}
				setValue={setMessage}
			/>
			<button onClick={handleSendMessage}>Send Message</button>
		</div>
	)
}

export { SendMessage }
