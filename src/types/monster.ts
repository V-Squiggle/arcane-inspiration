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
