import Home from '@/views/home'
import Chat from '@/views/chat'
import Settings from '@/views/settings'
import { FaCog, FaComment, FaHome } from 'react-icons/fa'
import { IconType } from 'react-icons'

/* eslint-disable sort-keys */
export const appRoutes: AppRoutes = {
	Home: {
		component: Home,
		icon: FaHome,
		label: 'Home',
	},
	Chat: {
		component: Chat,
		icon: FaComment,
		label: 'Chat',
	},
	Settings: {
		component: Settings,
		icon: FaCog,
		label: 'Settings',
	},
}
/* eslint-enable sort-keys */
export type Route = {
	label: string
	component: () => JSX.Element
	icon: IconType
}

export type AppRoutes = {
	[key in 'Home' | 'Chat' | 'Settings']: Route
}
