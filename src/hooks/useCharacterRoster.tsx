import { useState } from 'react'
import { Character, StatusCode } from '@/types'
import { generateImage, useCreateCharacter } from '@/hooks/open-ai'

const useCharacterRoster = () => {
	const [status, setStatus] = useState<StatusCode>(StatusCode.Idle)
	const [characters, setCharacters] = useState<Character[]>([])
	const { generateNewNpc, generateNewNpcImagePrompt } = useCreateCharacter()

	const generateCharacter = async () => {
		if (status === StatusCode.Loading) return
		try {
			setStatus(StatusCode.Loading)

			const character = await generateNewNpc({ race: 'Half-Orc/Half-Elf' })
			if (!character) {
				setStatus(StatusCode.Error)

				return
			}

			try {
				const txtToImgPrompt = await generateNewNpcImagePrompt(character)
				const txtToImgRes = await generateImage(txtToImgPrompt)
				const img = 'data:image/png;base64,' + txtToImgRes.images[0]
				character.image = img
			} catch {
				//
			}
			setCharacters((prev) => [...prev, character])
			setStatus(StatusCode.Success)
		} catch (e) {
			setStatus(StatusCode.Error)
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
