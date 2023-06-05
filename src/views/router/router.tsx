import { useState } from 'react'
import { Route, appRoutes } from './routes'
import { Navbar, TitleBar } from '@/components'

import styles from './router.module.scss'

const Router = () => {
	const [activeTab, setActiveTab] = useState<Route>(appRoutes.Home)

	return (
		<div className={styles['wrapper']}>
			<TitleBar />
			<div className={styles['container']}>
				<Navbar setActiveTab={setActiveTab} activeTab={activeTab} />
				<main className={styles['main']}>
					<activeTab.component />
				</main>
			</div>
		</div>
	)
}

export default Router
