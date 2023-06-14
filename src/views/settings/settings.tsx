import { ControlledInput } from '@/components'
import { useAppState } from '@/hooks/useAppState/useAppState'
const Settings = () => {
	const { openAiToken, setOpenAiToken } = useAppState()

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
