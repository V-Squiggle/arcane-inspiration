import classNames from 'classnames'
import { IconType } from 'react-icons'

import styles from './icon-button.module.scss'

type Props = {
	icon: IconType
	isActive?: boolean
	isSubmit?: boolean
	onClick?: () => void
	backgroundColor?: 'primary' | 'secondary' | 'tertiary' | 'transparent'
	isUnpadded?: boolean
}

const IconButton = ({
	icon: Icon,
	isActive,
	isSubmit,
	onClick,
	backgroundColor,
	isUnpadded = false,
}: Props) => {
	const className = classNames(styles['wrapper'], {
		[styles['highlighted']]: isActive,
		[styles['background-primary']]: backgroundColor === 'primary',
		[styles['background-secondary']]: backgroundColor === 'secondary',
		[styles['background-tertiary']]: backgroundColor === 'tertiary',
		[styles['background-transparent']]: backgroundColor === 'transparent',
	})
	const buttonType = isSubmit ? 'submit' : 'button'

	return (
		<button
			className={className}
			onClick={onClick}
			type={buttonType}
			style={isUnpadded ? { padding: '0px' } : undefined}
		>
			<Icon width={'100%'} height={'100%'} />
		</button>
	)
}

export { IconButton }
