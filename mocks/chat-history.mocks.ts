import { faker } from '@faker-js/faker'
import {
	GptMessage,
	messageSenderTypes,
} from '../src/hooks/open-ai/useOpenAiChat/useOpenAiChat.types'

export const generateMockMessageHistory = (count: number): GptMessage[] =>
	Array(count)
		.fill(null)
		.map(() => generateMockMessage())

export const generateMockMessage = (): GptMessage => {
	const sender =
		messageSenderTypes[
			faker.number.int({ max: messageSenderTypes.length - 1, min: 0 })
		]

	return {
		isError: sender === 'error',
		message: faker.lorem.lines(),
		sender,
	}
}
