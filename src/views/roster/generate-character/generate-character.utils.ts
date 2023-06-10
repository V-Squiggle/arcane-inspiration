import { GenerateCharacterStatus } from '@/hooks/useCharacterRoster.types'

export const getGenerateButtonText = (status: GenerateCharacterStatus) => {
	switch (status) {
		case GenerateCharacterStatus.Idle:
			return 'Generate'
		case GenerateCharacterStatus.Success:
			return 'Generate'
		case GenerateCharacterStatus.Error:
			return 'Generate'
		default:
			if (isGenerating(status)) return 'Generating...'
			throw new Error(`Invalid status: ${status}`)
	}
}

export const getGenerateStatusLabel = (
	status: GenerateCharacterStatus,
): string | null => {
	switch (status) {
		case GenerateCharacterStatus.Idle:
			return null
		case GenerateCharacterStatus.Success:
			return null
		case GenerateCharacterStatus.Error:
			return null
		case GenerateCharacterStatus.GeneratingDetails:
			return 'Generating details...'
		case GenerateCharacterStatus.GeneratingImagePrompt:
			return 'Generating image prompt...'
		case GenerateCharacterStatus.GeneratingImage:
			return 'Generating image...'
		default:
			throw new Error(`Invalid status: ${status}`)
	}
}

export const isGenerating = (status: GenerateCharacterStatus) => {
	return (
		status === GenerateCharacterStatus.GeneratingDetails ||
		status === GenerateCharacterStatus.GeneratingImage ||
		status === GenerateCharacterStatus.GeneratingImagePrompt
	)
}
