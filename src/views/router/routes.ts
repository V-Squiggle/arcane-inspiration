import Chat from '../chat/chat'
import { Home } from '../home'

export const appRoutes: AppRoutes = {
	Chat: {
		component: Chat,
		label: 'Chat',
	},
	Home: {
		component: Home,
		label: 'Home',
	},
}

export type Route = {
	label: string
	component: () => JSX.Element
}

export type AppRoutes = {
	[key in 'Home' | 'Chat']: Route
}
