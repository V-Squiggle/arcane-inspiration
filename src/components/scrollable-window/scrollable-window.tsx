import React from 'react'

import styles from './scrollable-window.module.scss'

type Props = {
	children: React.ReactNode
	id: string
}
const ScrollableWindow = ({ children, id }: Props) => {
	return (
		<div className={styles['wrapper']} id={id}>
			{children}
		</div>
	)
}

export { ScrollableWindow }
