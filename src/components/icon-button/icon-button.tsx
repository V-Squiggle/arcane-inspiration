import classNames from 'classnames'
import { IconType } from 'react-icons'

import styles from './icon-button.module.scss'

type Props = {
	icon: IconType
	isActive?: boolean
	isSubmit?: boolean
	onClick?: () => void
}

const IconButton = ({ icon: Icon, isActive, isSubmit, onClick }: Props) => {
	const className = classNames(styles['wrapper'], {
		[styles['highlighted']]: isActive,
	})
	const buttonType = isSubmit ? 'submit' : 'button'

	return (
		<button className={className} onClick={onClick} type={buttonType}>
			<Icon width={'100%'} height={'100%'} />
		</button>
	)
}

export { IconButton }
