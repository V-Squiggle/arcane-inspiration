import { useContext } from 'react'
import { AppStateContext } from './appStateProvider'

export const useAppState = () => {
	const { openAiToken, setOpenAiToken, model, setModel } =
		useContext(AppStateContext)

	return {
		model,
		openAiToken,
		setModel,
		setOpenAiToken,
	}
}
