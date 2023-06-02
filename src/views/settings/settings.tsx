import { useState } from 'react'
import { ControlledInput } from '@/components'
import classnames from 'classnames'

import styles from './settings.module.scss'

const Settings = () => {
	const [isSettingsOpen, setIsSettingsOpen] = useState(false)
	const [openAiToken, setOpenAiToken] = useState('')
	const wrapperClassNames = classnames(styles['wrapper'], {
		[styles['active']]: isSettingsOpen,
	})

	return (
		<div className={wrapperClassNames}>
			{
				<div>
					<h1>Settings</h1>
					<ControlledInput
						type='text'
						label='OpenAI Token'
						value={openAiToken}
						setValue={setOpenAiToken}
					/>
				</div>
			}
		</div>
	)
}

export default Settings
