import { ControlledInput } from '@/components'
import { openAiApiKeyAtom, openAiModelAtom } from '@/store/settings.store'
import { useAtom } from 'jotai'

const Settings = () => {
	const [openAiApiKey, setOpenAiApiKey] = useAtom(openAiApiKeyAtom)
	const [openAiModel, setOpenAiModel] = useAtom(openAiModelAtom)

	return (
		<div>
			{
				<div>
					<h1>Settings</h1>
					<ControlledInput
						type='text'
						label='OpenAI Token'
						value={openAiApiKey}
						setValue={setOpenAiApiKey}
					/>
					<ControlledInput
						type='text'
						label='Model'
						value={openAiModel}
						setValue={setOpenAiModel}
					/>
				</div>
			}
		</div>
	)
}

export default Settings
