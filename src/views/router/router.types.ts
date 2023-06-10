import { IconType } from 'react-icons'

export type View = {
	viewName: string
	icon: IconType
}

export enum AppViews {
	Home,
	Chat,
	Roster,
	Settings,
}
