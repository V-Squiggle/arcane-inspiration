import { createContext, useState } from 'react'

type ContextType = {
	openAiToken: string
	setOpenAiToken: React.Dispatch<React.SetStateAction<string>>
	model: string
	setModel: React.Dispatch<React.SetStateAction<string>>
}

type ContainerProps = {
	children: React.ReactNode
}

export const AppStateContext = createContext<ContextType>({} as ContextType)

export const AppStateProvider = (props: ContainerProps) => {
	const [openAiToken, setOpenAiToken] = useState('')
	const [model, setModel] = useState('gpt-3.5-turbo')

	return (
		<AppStateContext.Provider value={{ openAiToken, setOpenAiToken, model, setModel }}>
			{props.children}
		</AppStateContext.Provider>
	)
}
