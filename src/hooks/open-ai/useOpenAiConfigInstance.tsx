import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from 'openai'
import { useAtomValue } from 'jotai'
import { openAiApiKeyAtom, openAiModelAtom } from '@/store/settings.store'

const useOpenAi = () => {
	const model = useAtomValue(openAiModelAtom)
	const openAiApiKey = useAtomValue(openAiApiKeyAtom)

	const configuration = new Configuration({
		apiKey: openAiApiKey,
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
