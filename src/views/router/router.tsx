import { useState } from 'react'
import { Route, appRoutes } from './routes'

import styles from './router.module.scss'
import Settings from '../settings/settings'
import Navbar from '@/components/navbar/navbar'

const Router = () => {
	const [activeTab, setActiveTab] = useState<Route>(appRoutes.Home)

	return (
		<div className={styles['wrapper']}>
            <Navbar setActiveTab={setActiveTab} appRoutes={appRoutes} />			
			{/* <Settings />
			<nav className={styles['navigation-tab--wrapper']}>
				{Object.values(appRoutes).map((route) => (
					<button key={route.label} onClick={() => setActiveTab(route)}>
						{route.label}
					</button>
				))}
			</nav> */
			<main className={styles['main']}>
				<activeTab.component />
			</main>}
		</div>
	)
}

export default Router
