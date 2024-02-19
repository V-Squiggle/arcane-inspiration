import { Monster, Party } from '@/types'
import { atomWithStorage } from 'jotai/utils'

export const encounterPartyAtom = atomWithStorage<Party>('encounterParty', {
	playerCharacters: [],
})

export const encounterMonstersAtom = atomWithStorage<Monster[]>(
	'encounterMonsters',
	[],
)
