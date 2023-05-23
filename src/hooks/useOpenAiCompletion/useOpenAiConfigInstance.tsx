import { Configuration, OpenAIApi } from 'openai'

const useOpenAiConfigInstance = () => {
	const apiKey = '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'
	const configuration = new Configuration({
		apiKey,
	})
	delete configuration.baseOptions.headers['User-Agent']

	const openAi = new OpenAIApi(configuration)

	const getCompletion = async (prompt: string) =>
		await openAi.createCompletion({
			max_tokens: 20,
			model: 'text-davinci-003',
			prompt: prompt,
			temperature: 0.5,
		})

	return { getCompletion }
}

export default useOpenAiConfigInstance
