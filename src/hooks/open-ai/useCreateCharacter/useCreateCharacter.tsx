import { useOpenAi } from '@/hooks/open-ai'
import { Character } from '@/types'
import {
	cleanCreateCharacterResponseForParsing,
	createCharacterImagePrompt,
	createCharacterImageSystemPrompt,
	createCharacterPrompt,
	createCharacterSystemPrompt,
	createExamplePromptsSystemPrompt,
} from './useCreateCharacter.utils'
import { GenerateCharacterParameters } from '@/hooks/useCharacterRoster.types'
import axios from 'axios'

const useCreateCharacter = () => {
	const { getChatCompletion } = useOpenAi()

	const generateNewNpc = async (
		props?: GenerateCharacterParameters,
	): Promise<Character | null> =>
		await getChatCompletion(
			[createCharacterSystemPrompt()],
			createCharacterPrompt(props),
		)
			.then((response) => {
				const content = response.data.choices[0].message?.content
				const character = cleanCreateCharacterResponseForParsing(content)

				if (!character) {
					console.log('Failed to parse character', character)
					// TODO: Add error logging to keep track of scenarios to account for
					//       in the cleanCreateCharacterResponseForParsing function

					return null
				}

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

	const generateNewNpcImagePrompt = async (
		character: Character,
	): Promise<TxtToImgRequest> =>
		await getChatCompletion(
			[createCharacterImageSystemPrompt(), createExamplePromptsSystemPrompt()],
			createCharacterImagePrompt(character),
		)
			.then((response) => {
				const content = response.data.choices[0].message?.content
				if (!content) {
					throw new Error('Failed to generate image prompt')
				}

				try {
					return JSON.parse(content)
				} catch (e) {
					console.log('Failed to parse character', character)

					throw e
				}
			})
			.catch((error) => {
				console.error(error)
			})

	return { generateNewNpc, generateNewNpcImagePrompt }
}

export { useCreateCharacter }

const txtToImgEndpoint = 'http://127.0.0.1:7860/sdapi/v1/txt2img'
export const generateImage = async (
	props: TxtToImgRequest,
): Promise<TxtToImgResponse> => {
	return (await axios.post(txtToImgEndpoint, { prompt: props.prompt })).data
}
type TxtToImgRequest = {
	negativePrompt: string
	prompt: string
}
type TxtToImgResponse = {
	images: string[]
	parameters: unknown
	info: string
}
