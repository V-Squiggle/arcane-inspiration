import { AppStateProvider } from './hooks/open-ai/useAppState/appStateProvider'
import Router from './views/router/router'

function App() {
	return (
		<AppStateProvider>
			<Router />
		</AppStateProvider>
	)
}

export default App
