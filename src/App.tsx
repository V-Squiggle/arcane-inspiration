import Router from './views/router/router'
import { AppStateProvider } from './hooks/open-ai/useAppState/useAppState'

function App() {
	return (
		<AppStateProvider>
			<Router />
		</AppStateProvider>
	)
}

export default App
