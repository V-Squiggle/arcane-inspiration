import { useOpenAi } from '../useOpenAiConfigInstance'
import {
	createExamplePrompt,
	createExampleResponse,
	createMonsterPrompt,
	createMonsterSystemPrompt,
} from './useCreateCombatant.utils'

export const useCreateCombatant = () => {
	const { getChatCompletion } = useOpenAi()

	const generateNewMonster = async (
		description: string,
		challengeRating: string,
	): Promise<string> =>
		await getChatCompletion(
			[
				createMonsterSystemPrompt(),
				createExamplePrompt(),
				createExampleResponse(),
			],
			createMonsterPrompt(description, challengeRating),
		).then((response) => {
			return response.data.choices[0].message?.content ?? ''
		})

	return {
		generateNewMonster,
	}
}
