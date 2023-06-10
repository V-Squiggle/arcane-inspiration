import { ScrollableWindow } from '@/components'
import MainWrapper from '@/components/default-main-wrapper/main-wrapper'
import {
	getGenerateButtonText,
	getGenerateStatusLabel,
	isGenerating,
} from './generate-character.utils'
import { GenerateCharacterStatus } from '@/hooks/useCharacterRoster.types'

type Props = {
	generateCharacter: () => void
	generateCharacterStatus: GenerateCharacterStatus
}
const GenerateCharacter = ({
	generateCharacter,
	generateCharacterStatus,
}: Props) => {
	return (
		<MainWrapper>
			<ScrollableWindow id='Generate-Character'>
				<h1>Generate Character</h1>
				<p>{getGenerateStatusLabel(generateCharacterStatus)}</p>
				<button
					disabled={isGenerating(generateCharacterStatus)}
					onClick={generateCharacter}
				>
					{getGenerateButtonText(generateCharacterStatus)}
				</button>
			</ScrollableWindow>
		</MainWrapper>
	)
}

export default GenerateCharacter
