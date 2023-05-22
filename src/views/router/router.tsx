import { useState } from 'react'
import { Route, appRoutes } from './routes'

import styles from './router.module.scss'
import Settings from '../settings/settings'

const Router = () => {
	const [activeTab, setActiveTab] = useState<Route>(appRoutes.Home)

	return (
		<div className={styles['wrapper']}>
			<Settings />
			<nav className={styles['navigation-tab--wrapper']}>
				{Object.values(appRoutes).map((route) => (
					<button key={route.label} onClick={() => setActiveTab(route)}>
						{route.label}
					</button>
				))}
			</nav>
			<main>
				<activeTab.component />
			</main>
		</div>
	)
}

export default Router
