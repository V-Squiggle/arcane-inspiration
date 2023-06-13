import { createContext, useState } from 'react'

type ContextType = {
	openAiToken: string
	setOpenAiToken: React.Dispatch<React.SetStateAction<string>>
}

type ContainerProps = {
	children: React.ReactNode
}

export const AppStateContext = createContext<ContextType>({} as ContextType)

export const AppStateProvider = (props: ContainerProps) => {
	const [openAiToken, setOpenAiToken] = useState('')

	return (
		<AppStateContext.Provider value={{ openAiToken, setOpenAiToken }}>
			{props.children}
		</AppStateContext.Provider>
	)
}
