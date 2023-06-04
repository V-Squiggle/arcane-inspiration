import { useState } from 'react'
import { ControlledInput } from '@/components'

const Settings = () => {
	const [openAiToken, setOpenAiToken] = useState('')

	return (
		<div>
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

export { Settings }
