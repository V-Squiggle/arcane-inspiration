import React, { Dispatch, SetStateAction } from 'react'
import { AppRoutes, Route } from '../../views/router/routes'
import styles from './navbar.module.scss'
type NavbarProps = {
	setActiveTab: Dispatch<SetStateAction<Route>>
	appRoutes: AppRoutes
}

const Navbar: React.FC<NavbarProps> = ({ setActiveTab, appRoutes }) => {
	return (
		<>
			<nav className={styles['nav-menu']}>
				{Object.values(appRoutes).map((route, index) => (
					<button
						key={index}
						className={styles['navbar-button']}
						onClick={() => setActiveTab(route)}
					>
						{route.icon}
					</button>
				))}
			</nav>
		</>
	)
}

export default Navbar
