import { useState } from 'react'

import styles from './settings.module.scss'
import { ControlledInput } from '@/components'

const Settings = () => {
	const [isSettingsOpen, setIsSettingsOpen] = useState(false)
	const [openAiToken, setOpenAiToken] = useState('')

	return (
		<div className={styles['wrapper']}>
			<button onClick={() => setIsSettingsOpen((prev) => !prev)}>
				Settings
			</button>
			{isSettingsOpen && (
				<div>
					<h1>Settings</h1>
					<ControlledInput
						type='text'
						label='OpenAI Token'
						value={openAiToken}
						setValue={setOpenAiToken}
					/>
				</div>
			)}
		</div>
	)
}

export default Settings
