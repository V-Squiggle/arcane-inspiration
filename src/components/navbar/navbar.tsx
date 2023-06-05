import React, { Dispatch, SetStateAction } from 'react'
import { Route, appRoutes } from '../../views/router/routes'
import { IconButton } from '@/components'

import styles from './navbar.module.scss'

type NavbarProps = {
	setActiveTab: Dispatch<SetStateAction<Route>>
	activeTab: Route
}

const Navbar: React.FC<NavbarProps> = ({ setActiveTab, activeTab }) => {
	return (
		<nav className={styles['nav-menu']}>
			{Object.values(appRoutes).map((route, index) => (
				<div key={`button ${index}`} className={styles['button-wrapper']}>
					<IconButton
						icon={route.icon}
						isActive={activeTab.label === route.label}
						onClick={() => setActiveTab(route)}
					/>
				</div>
			))}
		</nav>
	)
}

export { Navbar }
