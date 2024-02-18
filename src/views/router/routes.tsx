import { AppViews, View } from './router.types'
import { FaCog, FaComment, FaHome } from 'react-icons/fa'
import { GiGoblinHead, GiWizardFace } from 'react-icons/gi'

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
	[AppViews.Encounter]: {
		icon: GiGoblinHead,
		viewName: 'Encounter',
	},
	[AppViews.Settings]: {
		icon: FaCog,
		viewName: 'Settings',
	},
}
/* eslint-enable sort-keys */
