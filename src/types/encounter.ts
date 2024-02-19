export type Party = {
	playerCharacters: PlayerCharacter[]
}

export type PlayerCharacter = {
	name: string
	level: number
}

export type Threshold = {
	easy: number
	medium: number
	hard: number
	deadly: number
}
