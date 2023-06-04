import classNames from 'classnames'

import styles from './navbar.module.scss'
import { IconType } from 'react-icons'

type Props = {
	icon: IconType
	isActive: boolean
	onClick: () => void
}

const NavbarButton = ({ icon: Icon, isActive, onClick }: Props) => {
	const className = classNames(styles['navbar-button'], {
		[styles['highlighted']]: isActive,
	})

	return (
		<button className={className} onClick={onClick}>
			<Icon width={'100%'} height={'100%'} />
		</button>
	)
}

export default NavbarButton
