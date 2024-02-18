import Router from './views/router/router'
import { Provider } from 'jotai'

function App() {
	return (
		<Provider>
			<Router />
		</Provider>
	)
}

export default App
