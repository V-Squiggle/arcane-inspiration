import { createContext, useContext, useState } from 'react'

type ContextType = {
	openAiToken: string
	setOpenAiToken: React.Dispatch<React.SetStateAction<string>> | undefined
}

type ContainerProps = {
	children: React.ReactNode
}

const AppStateContext = createContext<ContextType>({
	openAiToken: '',
	setOpenAiToken: undefined,
})

const AppStateProvider = (props: ContainerProps) => {
	const [openAiToken, setOpenAiToken] = useState('')

	return (
		<AppStateContext.Provider value={{ openAiToken, setOpenAiToken }}>
			{props.children}
		</AppStateContext.Provider>
	)
}

export { AppStateProvider }

export const useAppState = () => {
	const { openAiToken, setOpenAiToken } = useContext(AppStateContext)
	if (setOpenAiToken === undefined) {
		throw new Error('setOpenAiToken must be used within a AppStateProvider')
	}

	return { openAiToken, setOpenAiToken }
}
