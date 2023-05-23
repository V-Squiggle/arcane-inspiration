import { KeyboardEventHandler, useEffect, useRef, useState } from 'react'

import styles from './prompt-input-box.module.scss'

type Props = {
	sendMessage: (message: string) => void
}

// If this is confusing, look up "currying" in JavaScript.
const EnterEventHandler =
	(handleSubmit: () => void): KeyboardEventHandler<HTMLTextAreaElement> =>
	(event: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault()
			handleSubmit()
		}
	}

const PromptInputBox = ({ sendMessage }: Props) => {
	const [message, setMessage] = useState('')

	const submitPrompt = () => {
		sendMessage(message)
		setMessage('')
	}

	const handlePromptChange = (
		event: React.ChangeEvent<HTMLTextAreaElement>,
	) => {
		setMessage(event.target.value)
	}

	return (
		<div className={styles['prompt-input--wrapper']}>
			<textarea
				id='prompt-input'
				placeholder='Send a message.'
				rows={1}
				value={message}
				onChange={handlePromptChange}
				// Using the curried function like this is the equivalent of doing:
				// onKeyDown={(event) => EnterEventHandler(submitPrompt)(event)}
				onKeyDown={EnterEventHandler(submitPrompt)}
				className={styles['textarea']}
			/>
			<button onClick={submitPrompt}>Send Message</button>
		</div>
	)
}

export { PromptInputBox }
