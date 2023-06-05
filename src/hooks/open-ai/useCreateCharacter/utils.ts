import { ChatCompletionRequestMessage } from 'openai'

export const createCharacterSystemPrompt = (): ChatCompletionRequestMessage => {
	const message =
		'You are a character generate for a high fantasy setting.\n' +
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

export const createCharacterPrompt = ({ race }: { race?: string }): string => {
	let prompt = 'Generate a character for the adventure\n'

	if (race) prompt += `The character is required to have the race: ${race}\n`

	return prompt
}
