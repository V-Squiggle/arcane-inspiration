import Chat from '../chat/chat'
import { Home } from '../home'
import Settings from '../settings/settings'

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
	Settings: {
		component: Settings,
		label: 'Settings',
	},
}
/* eslint-enable sort-keys */

export type Route = {
	label: string
	component: () => JSX.Element
}

export type AppRoutes = {
	[key in 'Home' | 'Chat' | 'Settings']: Route
}
