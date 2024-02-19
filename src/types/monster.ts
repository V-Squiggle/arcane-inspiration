import { Monster } from '@/views/encounter/monster'

export type MonsterResponse = {
	name: string
	type: string
	alignment: string
	ac: string
	armorName: string
	hp: string
	speed: string
	str: number
	dex: number
	con: number
	int: number
	wis: number
	cha: number
	skills: MonsterSkill[]
	senses: string[]
	languages: string[]
	challenge: string
	traits: MonsterTraits[]
	actions: MonsterAction[]
}

type MonsterSkill = { name: string; mod: number }

type MonsterTraits = { name: string; description: string }

type MonsterAction = { name: string; description: string }

export type Monster = MonsterPreGeneration | MonsterGenerated

type MonsterPreGeneration = {
	status: 'PRE_GENERATION' | 'GENERATING' | 'GENERATION_FAILED'
} & MonsterBase

type MonsterGenerated = {
	status: 'GENERATED'
} & MonsterResponse &
	MonsterBase

type MonsterBase = {
	name: string
	count: number
	challengeRating: string
	prompt: string
}
