import Home from '../home/home'
import Roster from '../roster'
import Chat from '../chat'
import Settings from '../settings'
import { useState } from 'react'
import { Navbar, TitleBar } from '@/components'
import { AppViews } from './router.types'
import { Encounter } from '../encounter'

import styles from './router.module.scss'

const Router = () => {
	const [activeTab, setActiveTab] = useState<AppViews>(AppViews.Home)

	return (
		<div className={styles['wrapper']}>
			<TitleBar />
			<div className={styles['container']}>
				<Navbar setActiveTab={setActiveTab} activeTab={activeTab} />
				<main className={styles['main']}>
					{activeTab === AppViews.Home && <Home />}
					{activeTab === AppViews.Chat && <Chat />}
					{activeTab === AppViews.Roster && <Roster />}
					{activeTab === AppViews.Encounter && <Encounter />}
					{activeTab === AppViews.Settings && <Settings />}
				</main>
			</div>
		</div>
	)
}

export default Router
