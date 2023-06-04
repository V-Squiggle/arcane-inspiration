import React, { Dispatch, SetStateAction } from 'react'
import { Route, appRoutes } from '../../views/router/routes'
import styles from './navbar.module.scss'
import classNames from 'classnames'
type NavbarProps = {
	setActiveTab: Dispatch<SetStateAction<Route>>
	activeTab: Route
}

const Navbar: React.FC<NavbarProps> = ({ setActiveTab, activeTab }) => {
	return (
		<nav className={styles['nav-menu']}>
			{Object.values(appRoutes).map((route, index) => {
				const className = classNames(styles['navbar-button'], {
					[styles['highlighted']]: activeTab.label === route.label,
				})

				return (
					<button
						key={index}
						className={className}
						onClick={() => setActiveTab(route)}
					>
						<route.icon width={'100%'} height={'100%'} />
					</button>
				)
			})}
		</nav>
	)
}

export default Navbar
