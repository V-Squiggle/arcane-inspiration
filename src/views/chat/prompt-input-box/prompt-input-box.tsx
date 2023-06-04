import { KeyboardEventHandler, useEffect, useRef, useState } from 'react'

import styles from './prompt-input-box.module.scss'
import { StyledTextarea } from '@/components'

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
		<form
			className={styles['wrapper']}
			onSubmit={(e) => {
				e.preventDefault()
				submitPrompt()
			}}
		>
			<StyledTextarea
				text={message}
				onTextUpdate={handlePromptChange}
				hasSubmitButton
				isSubmitting={false}
			/>
		</form>
	)
}

export { PromptInputBox }
