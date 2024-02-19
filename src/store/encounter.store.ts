import { Monster, Party } from '@/types'
import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const encounterPartyAtom = atomWithStorage<Party>('encounterParty', {
	playerCharacters: [],
})

export const encounterMonstersAtom = atomWithStorage<Monster[]>(
	'encounterMonsters',
	[],
)

export const selectedMonsterIndexAtom = atom<number>(-1)
