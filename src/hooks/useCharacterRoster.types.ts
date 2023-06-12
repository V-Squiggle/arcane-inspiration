export enum GenerateCharacterStatus {
	Idle,
	GeneratingDetails,
	GeneratingImagePrompt,
	GeneratingImage,
	Success,
	Error,
}

export type GenerateCharacterParameters = {
	name: string
	race: string
	gender: string
	age?: number
	customRequest: string
}
