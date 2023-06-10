import { AppViews, View } from './router.types'
import { FaCog, FaComment, FaHome } from 'react-icons/fa'
import { GiWizardFace } from 'react-icons/gi'

/* eslint-disable sort-keys */
export const appRoutes: Record<AppViews, View> = {
	[AppViews.Home]: {
		icon: FaHome,
		viewName: 'Home',
	},
	[AppViews.Roster]: {
		icon: GiWizardFace,
		viewName: 'Roster',
	},
	[AppViews.Chat]: {
		icon: FaComment,
		viewName: 'Chat',
	},
	[AppViews.Settings]: {
		icon: FaCog,
		viewName: 'Settings',
	},
}
/* eslint-enable sort-keys */
