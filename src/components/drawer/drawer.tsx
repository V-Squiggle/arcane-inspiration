import { AiOutlineArrowRight } from 'react-icons/ai'
import { IconButton } from '../icon-button/icon-button'
import styles from './drawer.module.scss'

type Props = {
	children: React.ReactNode
	closeDrawer: () => void
	isOpen: boolean
}
const Drawer = ({ children, closeDrawer, isOpen }: Props) => {
	if (!isOpen) return null

	return (
		<div className={styles['container']}>
			<div className={styles['close-button-wrapper']}>
				<div className={styles['close-button']}>
					<IconButton
						backgroundColor='transparent'
						icon={AiOutlineArrowRight}
						onClick={closeDrawer}
					/>
				</div>
			</div>
			{children}
		</div>
	)
}

export default Drawer
