import { AppStateProvider } from '@/hooks'
import Router from './views/router/router'

function App() {
	return (
		<AppStateProvider>
			<Router />
		</AppStateProvider>
	)
}

export default App
