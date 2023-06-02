import React from 'react'
import Chat from '../chat/chat'
import { Home } from '../home'
import Settings from '../settings/settings'
import { FaCog, FaComment, FaHome } from 'react-icons/fa'

/* eslint-disable sort-keys */
export const appRoutes = {
	Home: {
		component: Home,
		icon: <FaHome />,
		label: 'Home',
	},
	Chat: {
		component: Chat,
		icon: <FaComment />,
		label: 'Chat',
	},
	Settings: {
		component: Settings,
		icon: <FaCog />,
		label: 'Settings',
	},
}
/* eslint-enable sort-keys */
export type Route = {
	label: string
	component: () => JSX.Element
	icon: React.ReactNode
}

export type AppRoutes = {
	[key in 'Home' | 'Chat' | 'Settings']: Route
}
