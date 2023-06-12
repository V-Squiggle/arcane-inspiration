/* eslint-disable max-len */
import { GenerateCharacterParameters } from '@/hooks/useCharacterRoster.types'
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

export const createExamplePromptsSystemPrompt =
	(): ChatCompletionRequestMessage => {
		const message =
			`Here are examples of effective and well formed prompts:\n` +
			`((masterpiece:1.2, best quality)),steampunkai,ancient alien vampire,detailed eyes, best quality, ultra-detailed,intricate face, simple gradient background\n` +
			`skeleton, space marine,intricate ornamented black gold ruby armor,adepta sororitas,dynamic posture,male,Polar desert landscape background,volumetric cinematic lighting,highly detailed skull,realistic reflections,\n` +
			`(detailed face, detailed eyes, clear skin, clear eyes), lotr, fantasy, elf, female, silver hair, looking at viewer, portrait, photography, detailed skin, realistic, photo-realistic, 8k, highly detailed, full length frame, High detail RAW color art, piercing, diffused soft lighting, shallow depth of field, sharp focus, hyperrealism, cinematic lighting\n` +
			`(masterpiece), (extremely intricate), fantasy, (((photorealistic photo of an evil hermit, male, villain, anti hero, evil face, masculine face, medium hair, Maroon hair, wicked, cruel, sinister, malicious, ruthless, masculine, athletic))), (((dark bloody clothing, intricate details on clothing))), (perfect composition:1.4), aspect ratio 1:1, beach, deviantart hd, artstation hd, concept art, detailed face and body, award-winning photography, margins, detailed face, professional oil painting by Ed Blinkey, Atey Ghailan, Jeremy Mann, Greg Manchess, Alex Gray, trending on ArtStation, trending on CGSociety, intricate, high detail, sharp focus, dramatic, award winning matte drawing cinematic lighting octane render unreal engine volumetrics dtx\n` +
			`ageless wizard wearing flowing intricate robes contemplating an orb in his alchemy lab, alchemypunkai, dungeons and dragons, fantasy, nsfw, sharp focus, detailed background, high saturation, volumetric lighting, high contrast, high quality, masterpiece, 8k resolution, hdr, tone mapping`

		return {
			content: message,
			role: 'system',
		}
	}

export const createCharacterPrompt = (
	params?: GenerateCharacterParameters,
): string => {
	let prompt = 'Generate a character for the adventure\n'
	if (!params) {
		prompt +=
			'No requirements provided\n' + 'Get creative with the character!\n'

		return prompt
	}

	const { age, customRequest, gender, name, race } = params

	if (age) prompt += `The character is required to be ${age} years old\n`
	if (gender)
		prompt += `The character is required to have the gender: ${gender}\n`
	if (name) prompt += `The character is required to have the name: ${name}\n`
	if (race) prompt += `The character is required to have the race: ${race}\n`

	if (customRequest)
		prompt += `Additional Requests for the character:\n${customRequest}\n`

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
