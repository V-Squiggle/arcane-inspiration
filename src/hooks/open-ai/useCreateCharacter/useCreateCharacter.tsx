import { useOpenAi } from '@/hooks/open-ai'
import { Character } from '@/types'
import { createCharacterPrompt, createCharacterSystemPrompt } from './utils'

const useCreateCharacter = () => {
	const { getChatCompletion } = useOpenAi()

	const generateNewNpc = async (): Promise<Character> => {
		return await getChatCompletion(
			[createCharacterSystemPrompt()],
			createCharacterPrompt({ race: 'Half-orc / Half-elf' }),
		)
			.then((response) => {
				const content = response.data.choices[0].message?.content
				const character =
					content?.startsWith('{\n') ?? false
						? content ?? ''
						: content?.substring(content.indexOf('{\n')) ?? ''
				try {
					return JSON.parse(character)
				} catch (e) {
					console.log('Failed to parse character', character)

					throw e
				}
			})
			.catch((error) => {
				console.error(error)
			})
	}

	return { generateNewNpc }
}

export { useCreateCharacter }
