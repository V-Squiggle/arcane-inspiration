import React, { Dispatch, SetStateAction } from 'react'
import { appRoutes } from '@/views/router/routes'
import { AppViews, View } from '@/views/router/router.types'
import { IconButton } from '@/components'

import styles from './navbar.module.scss'

type NavbarProps = {
	setActiveTab: Dispatch<SetStateAction<AppViews>>
	activeTab: AppViews
}

const Navbar: React.FC<NavbarProps> = ({ setActiveTab, activeTab }) => {
	const routes = Object.values(AppViews).filter(
		(x) => !isNaN(Number(x)),
	) as Array<AppViews>

	return (
		<nav className={styles['nav-menu']}>
			{routes.map((route, index) => {
				const { icon }: View = appRoutes[route]

				return (
					<div key={`button ${index}`} className={styles['button-wrapper']}>
						<IconButton
							icon={icon}
							isActive={activeTab === route}
							onClick={() => setActiveTab(route)}
						/>
					</div>
				)
			})}
		</nav>
	)
}

export { Navbar }
