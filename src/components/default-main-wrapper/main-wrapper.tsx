import React from 'react'

import styles from './main-wrapper.module.scss'

type Props = {
	children: React.ReactNode
	className?: string
}
const MainWrapper = ({ children, className }: Props) => {
	return (
		<div className={styles['wrapper']}>
			<div className={className}>{children}</div>
		</div>
	)
}

export default MainWrapper
