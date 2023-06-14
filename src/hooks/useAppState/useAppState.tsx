import { useContext } from 'react'
import { AppStateContext } from './appStateProvider'

export const useAppState = () => {
	const { openAiToken, setOpenAiToken } = useContext(AppStateContext)

	return { openAiToken, setOpenAiToken }
}
