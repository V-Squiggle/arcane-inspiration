import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from 'openai'
import { useAppState } from './useAppState/useAppState'
const useOpenAi = () => {
	const apiKey = useAppState().openAiToken
	const configuration = new Configuration({
		apiKey,
	})
	delete configuration.baseOptions.headers['User-Agent']

	const openAi = new OpenAIApi(configuration)

	const getChatCompletion = async (
		history: ChatCompletionRequestMessage[],
		prompt: string,
	) =>
		await openAi.createChatCompletion({
			messages: [
				...history,
				{
					content: prompt,
					name: 'User',
					role: 'user',
				},
			],
			model: 'gpt-3.5-turbo',
		})

	return { getChatCompletion }
}

export { useOpenAi }
