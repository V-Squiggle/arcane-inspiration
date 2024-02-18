import { atomWithStorage } from 'jotai/utils'

export const openAiApiKeyAtom = atomWithStorage<string>('openAiApiKey', '')
export const openAiModelAtom = atomWithStorage<string>(
	'openAiModel',
	'gpt-3.5-turbo',
)
