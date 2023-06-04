import React, { Dispatch, SetStateAction } from 'react'
import { Route, appRoutes } from '../../views/router/routes'
import styles from './navbar.module.scss'
import classNames from 'classnames'
import NavbarButton from './navbar-button'
type NavbarProps = {
	setActiveTab: Dispatch<SetStateAction<Route>>
	activeTab: Route
}

const Navbar: React.FC<NavbarProps> = ({ setActiveTab, activeTab }) => {
	return (
		<nav className={styles['nav-menu']}>
			{Object.values(appRoutes).map((route, index) => (
				<NavbarButton
					key={`button ${index}`}
					icon={route.icon}
					isActive={activeTab.label === route.label}
					onClick={() => setActiveTab(route)}
				/>
			))}
		</nav>
	)
}

export default Navbar
