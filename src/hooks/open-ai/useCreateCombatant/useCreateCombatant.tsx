import { useOpenAi } from '../useOpenAiConfigInstance'
import {
	createExamplePrompt,
	createExampleResponse,
	createMonsterPrompt,
	createMonsterSystemPrompt,
} from './useCreateCombatant.utils'
import useControlledPromise from '@/hooks/useControlledPromise'

export const useCreateCombatant = () => {
	const { getChatCompletion } = useOpenAi()

	const generateNewMonster = async (
		description: string,
		challengeRating: string,
	): Promise<string | null> =>
		await getChatCompletion(
			[
				createMonsterSystemPrompt(),
				createExamplePrompt(),
				createExampleResponse(),
			],
			createMonsterPrompt(description, challengeRating),
		)
			.then((response) => {
				return response.data.choices[0].message?.content ?? null
			})
			.catch((error) => {
				console.error(error)

				return null
			})

	return useControlledPromise(
		(description: string, challengeRating: string) =>
			generateNewMonster(description, challengeRating),
		false,
	)
}
