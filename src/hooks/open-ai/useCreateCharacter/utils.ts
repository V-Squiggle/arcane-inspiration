import { Character } from '@/types'
import { ChatCompletionRequestMessage } from 'openai'

export const createCharacterSystemPrompt = (): ChatCompletionRequestMessage => {
	const message =
		'You are a character generater for a high fantasy setting.\n' +
		'Your responses will be in JSON with the following typescript Schema:\n' +
		'{\n' +
		'   name: string\n' +
		'   race: string\n' +
		'   gender: string' +
		'   age: string' +
		'   backstory: string\n' +
		'   personality: string\n' +
		'   appearance: string\n' +
		'   goals: string\n' +
		'   motivations: string\n' +
		'   occupation: string\n' +
		'   hobbies: string\n' +
		'   fears: string\n' +
		'}\n' +
		'Be extra careful with the spelling of the keys, as they are case sensitive.\n' +
		'Be sure to double escape any quotes within the values of the JSON.\n'

	return {
		content: message,
		role: 'system',
	}
}

export const createCharacterImageSystemPrompt =
	(): ChatCompletionRequestMessage => {
		const message =
			'You are a character image prompt generater for a high fantasy setting.\n' +
			'Your responses will be in JSON with the following typescript Schema:\n' +
			'{\n' +
			'   prompt: string\n' +
			'   negative_prompt: string\n' +
			'}\n' +
			'Your response will be fed to an AI that generates images, ' +
			'so effectively format your promtps for AI Consumption\n' +
			'Be extra careful with the spelling of the keys, as they are case sensitive.\n' +
			'Be sure to double escape any quotes within the values of the JSON.\n'

		return {
			content: message,
			role: 'system',
		}
	}

export const createCharacterPrompt = ({ race }: { race?: string }): string => {
	let prompt = 'Generate a character for the adventure\n'

	if (race) prompt += `The character is required to have the race: ${race}\n`

	return prompt
}

export const createCharacterImagePrompt = (character: Character): string => {
	const prompt =
		'Generate a image generation prompt for the following character:\n' +
		`${JSON.stringify(character, null, 2)}\n`

	return prompt
}

export const cleanCreateCharacterResponseForParsing = (
	response?: string,
): string | null => {
	if (!response) return null
	let character = response

	if (!character.startsWith('{\n')) {
		character = character.substring(character.indexOf('{\n'))
	}
	if (!character?.endsWith('}')) {
		character = character.substring(0, character.lastIndexOf('}') + 1)
	}

	return character
}
