import { createContext, useState, useContext, FC } from 'react'

interface ContextType {
    openAiToken: string;
    setOpenAiToken: React.Dispatch<React.SetStateAction<string>>;
}
type ContainerProps = {
    children: React.ReactNode; //👈 children prop typr
};

export const OpenAiTokenContext = createContext<ContextType | undefined>(undefined);

const AppStateProvider = (props: ContainerProps) => {
    const [openAiToken, setOpenAiToken] = useState('');

    return (
        <OpenAiTokenContext.Provider value={{openAiToken, setOpenAiToken}}>
            {props.children}
        </OpenAiTokenContext.Provider>
    )
}

export { AppStateProvider }

export const useOpenAiToken = () => {
    const context = useContext(OpenAiTokenContext);
    if (context === undefined) {
        throw new Error('useOpenAiToken must be used within a AppStateProvider');
    }
    return context;
};
