import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from 'openai'

const useOpenAiConfigInstance = () => {
	const apiKey = import.meta.env.VITE_OPENAI_API_KEY
	const configuration = new Configuration({
		apiKey,
	})
	delete configuration.baseOptions.headers['User-Agent']

	const openAi = new OpenAIApi(configuration)

	const getCompletion = async (prompt: string) =>
		await openAi.createCompletion({
			max_tokens: 100,
			model: 'text-davinci-003',
			prompt: prompt,
			temperature: 0.5,
		})

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

	return { getChatCompletion, getCompletion }
}

export default useOpenAiConfigInstance
