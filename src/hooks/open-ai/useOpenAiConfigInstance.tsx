import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from 'openai'
import { useAppState } from './useAppState/useAppState'

const useOpenAi = () => {
	const { openAiToken, model } = useAppState()
	const configuration = new Configuration({
		apiKey: openAiToken,
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
			model,
		})

	return { getChatCompletion }
}

export { useOpenAi }
