import { useState } from 'react'
import { Route, appRoutes } from './routes'

import styles from './router.module.scss'
import Navbar from '@/components/navbar/navbar'

const Router = () => {
	const [activeTab, setActiveTab] = useState<Route>(appRoutes.Home)

	return (
		<div className={styles['wrapper']}>
			<div className={styles['navbar']}>
				<Navbar setActiveTab={setActiveTab} appRoutes={appRoutes} />
			</div>
			<main className={styles['main']}>
				<activeTab.component />
			</main>
		</div>
	)
}

export default Router
