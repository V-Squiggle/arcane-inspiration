import { ControlledInput } from '@/components'
import { useAppState } from '@/hooks'
const Settings = () => {
	const { openAiToken, setOpenAiToken, model, setModel } = useAppState()

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
					<ControlledInput
						type='text'
						label='Model'
						value={model}
						setValue={setModel}
					/>
				</div>
			}
		</div>
	)
}

export default Settings
