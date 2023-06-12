import { ControlledInput, ScrollableWindow, StyledTextarea } from '@/components'
import MainWrapper from '@/components/default-main-wrapper/main-wrapper'
import {
	getGenerateButtonText,
	getGenerateStatusLabel,
	isGenerating,
} from './generate-character.utils'
import {
	GenerateCharacterParameters,
	GenerateCharacterStatus,
} from '@/hooks/useCharacterRoster.types'
import { useReducer } from 'react'
import {
	createCharacterReducer,
	initialState,
} from '@/hooks/open-ai/useCreateCharacter/useCreateCharacter.reducer'

type Props = {
	generateCharacter: (params?: GenerateCharacterParameters) => void
	generateCharacterStatus: GenerateCharacterStatus
}
const GenerateCharacter = ({
	generateCharacter,
	generateCharacterStatus,
}: Props) => {
	const [state, dispatch] = useReducer(createCharacterReducer, initialState)

	const handleGenerateCharacter = () => {
		generateCharacter(state)
	}

	return (
		<MainWrapper>
			<ScrollableWindow id='Generate-Character'>
				<h1>Generate Character</h1>
				<p>{getGenerateStatusLabel(generateCharacterStatus)}</p>
				<button
					disabled={isGenerating(generateCharacterStatus)}
					onClick={handleGenerateCharacter}
				>
					{getGenerateButtonText(generateCharacterStatus)}
				</button>
				<ControlledInput
					label='Name'
					type='text'
					value={state.name}
					setValue={(value) => {
						dispatch({
							payload: { key: 'name', value },
							type: 'UPDATE_PARAMETER',
						})
					}}
				/>
				<ControlledInput
					label='Gender'
					type='text'
					value={state.gender}
					setValue={(value) => {
						dispatch({
							payload: { key: 'gender', value },
							type: 'UPDATE_PARAMETER',
						})
					}}
				/>
				<ControlledInput
					label='Race'
					type='text'
					value={state.race}
					setValue={(value) => {
						dispatch({
							payload: { key: 'race', value },
							type: 'UPDATE_PARAMETER',
						})
					}}
				/>
				<StyledTextarea
					text={state.customRequest}
					placeholder='Any additional requests?'
					onTextUpdate={(e) => {
						dispatch({
							payload: { key: 'customRequest', value: e.target.value },
							type: 'UPDATE_PARAMETER',
						})
					}}
				/>
			</ScrollableWindow>
		</MainWrapper>
	)
}

export default GenerateCharacter
