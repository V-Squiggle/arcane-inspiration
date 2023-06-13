import { useState } from 'react'
import { ControlledInput } from '@/components'
import { useOpenAiToken } from '@/hooks/open-ai/useAppState/useAppState'
const Settings = () => {
	const {openAiToken, setOpenAiToken} = useOpenAiToken();
	
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

export default Settings
