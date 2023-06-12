import { useState } from 'react'
import { Character } from '@/types'
import { generateImage, useCreateCharacter } from '@/hooks/open-ai'
import {
	GenerateCharacterParameters,
	GenerateCharacterStatus,
} from './useCharacterRoster.types'

const useCharacterRoster = () => {
	const [status, setStatus] = useState<GenerateCharacterStatus>(
		GenerateCharacterStatus.Idle,
	)
	const isGenerating =
		status === GenerateCharacterStatus.GeneratingImage ||
		status === GenerateCharacterStatus.GeneratingDetails ||
		status === GenerateCharacterStatus.GeneratingImagePrompt
	const [characters, setCharacters] = useState<Character[]>([])
	const { generateNewNpc, generateNewNpcImagePrompt } = useCreateCharacter()

	const generateCharacter = async (
		generationParameters?: GenerateCharacterParameters,
	) => {
		if (isGenerating) return
		try {
			setStatus(GenerateCharacterStatus.GeneratingDetails)

			const character = await generateNewNpc(generationParameters)
			if (!character) {
				setStatus(GenerateCharacterStatus.Error)

				return
			}

			try {
				setStatus(GenerateCharacterStatus.GeneratingImagePrompt)
				const txtToImgPrompt = await generateNewNpcImagePrompt(character)
				setStatus(GenerateCharacterStatus.GeneratingImage)
				const txtToImgRes = await generateImage(txtToImgPrompt)
				const img = 'data:image/png;base64,' + txtToImgRes.images[0]
				character.image = img
			} catch {
				//
			}
			setCharacters((prev) => [...prev, character])
			setStatus(GenerateCharacterStatus.Success)
		} catch (e) {
			setStatus(GenerateCharacterStatus.Error)
			console.error(e)
		}
	}

	return {
		characters,
		generateCharacter,
		status,
	}
}

export default useCharacterRoster
