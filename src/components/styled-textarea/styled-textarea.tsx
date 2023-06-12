/* eslint-disable max-len */
import React from 'react'
import { getInlinedStyles } from './util'
import { AiOutlineHourglass, AiOutlineSend } from 'react-icons/ai'

import styles from './styled-textarea.module.scss'
import { IconButton } from '../icon-button/icon-button'

type Props = {
	hasSubmitButton?: boolean
	isSubmitting?: boolean
	placeholder?: string
	text: string
	onTextUpdate: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const StyledTextarea = ({
	hasSubmitButton,
	isSubmitting,
	placeholder = 'Send a message.',
	text,
	onTextUpdate: setText,
}: Props) => {
	const buttonIcon = isSubmitting ? AiOutlineHourglass : AiOutlineSend

	return (
		<div className={styles['wrapper']} role='presentation'>
			<div className={styles['container']}>
				<textarea
					id='prompt-textarea'
					tabIndex={0}
					data-id='request-:R1dd6:-0'
					rows={1}
					placeholder={placeholder}
					style={getInlinedStyles(text)}
					value={text}
					onChange={setText}
				/>
				{hasSubmitButton && (
					<div className={styles['button-wrapper']}>
						<IconButton icon={buttonIcon} isSubmit />
					</div>
				)}
			</div>
		</div>
	)
}

export { StyledTextarea }
