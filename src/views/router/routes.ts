import Chat from '../chat/chat'
import { Home } from '../home'

/* eslint-disable sort-keys */
export const appRoutes: AppRoutes = {
	Home: {
		component: Home,
		label: 'Home',
	},
	Chat: {
		component: Chat,
		label: 'Chat',
	},
}
/* eslint-enable sort-keys */

export type Route = {
	label: string
	component: () => JSX.Element
}

export type AppRoutes = {
	[key in 'Home' | 'Chat']: Route
}
