import { ScrollableWindow } from '@/components'
import MainWrapper from '@/components/default-main-wrapper/main-wrapper'
import { StatusCode } from '@/types'
import React from 'react'
import { getGenerateButtonText } from '../utils'

type Props = {
	generateCharacter: () => void
	generateCharacterStatus: StatusCode
}
const GenerateCharacter = ({
	generateCharacter,
	generateCharacterStatus,
}: Props) => {
	return (
		<MainWrapper>
			<ScrollableWindow id='Generate-Character'>
				<h1>Generate Character</h1>
				<button
					disabled={generateCharacterStatus === StatusCode.Loading}
					onClick={generateCharacter}
				>
					{getGenerateButtonText(generateCharacterStatus)}
				</button>
			</ScrollableWindow>
		</MainWrapper>
	)
}

export default GenerateCharacter
