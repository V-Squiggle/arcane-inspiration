import {
	encounterMonstersAtom,
	encounterPartyAtom,
} from '@/store/encounter.store'
import { Monster, MonsterResponse } from '@/types'
import { useAtom } from 'jotai'
import { useCreateCombatant } from '../open-ai'

export const useEncounterService = () => {
	const { generateNewMonster } = useCreateCombatant()
	const [party, setParty] = useAtom(encounterPartyAtom)
	const [monsters, setMonsters] = useAtom(encounterMonstersAtom)

	const addPlayerCharacter = () =>
		setParty((prev) => ({
			...prev,
			playerCharacters: [
				...prev.playerCharacters,
				{
					level: 1,
					name: `Player ${prev.playerCharacters.length + 1}`,
				},
			],
		}))

	const removePlayerCharacter = (index: number) =>
		setParty((prev) => ({
			...prev,
			playerCharacters: prev.playerCharacters.filter((_, i) => i !== index),
		}))

	const updatePlayerCharacter = (index: number, name: string, level: number) =>
		setParty((prev) => ({
			...prev,
			playerCharacters: prev.playerCharacters.map((pc, i) =>
				i === index ? { level, name } : pc,
			),
		}))

	const addMonster = () =>
		setMonsters((prev) => [
			...prev,
			{
				challengeRating: '0',
				count: 1,
				name: `Monster ${prev.length + 1}`,
				prompt: '',
				status: 'PRE_GENERATION',
			},
		])

	const removeMonster = (index: number) =>
		setMonsters((prev) => prev.filter((_, i) => i !== index))

	const updateMonster = (index: number, monster: Monster) =>
		setMonsters((prev) => prev.map((m, i) => (i === index ? monster : m)))

	const updateMonsterCount = (index: number, dir: 'INCREMENT' | 'DECREMENT') =>
		setMonsters((prev) =>
			prev.map((m, i) =>
				i === index
					? {
							...m,
							count: dir === 'INCREMENT' ? m.count + 1 : m.count - 1,
					  }
					: m,
			),
		)

	const generateMonster = async (index: number, prompt: string) => {
		const monster = monsters[index]

		updateMonster(index, { ...monster, status: 'GENERATING' })
		try {
			const res = await generateNewMonster(
				`Name: ${monster.name}\n` + prompt,
				monster.challengeRating,
			)

			const parsed = JSON.parse(res) as MonsterResponse
			updateMonster(index, { ...monster, ...parsed, status: 'GENERATED' })
		} catch (e) {
			updateMonster(index, { ...monster, status: 'GENERATION_FAILED' })
			console.error('Failed to parse generated monster', e)
		}
	}

	return {
		addPlayerCharacter,
		party,
		removePlayerCharacter,
		updatePlayerCharacter,

		addMonster,
		generateMonster,
		monsters,
		removeMonster,
		updateMonster,
		updateMonsterCount,
	}
}
