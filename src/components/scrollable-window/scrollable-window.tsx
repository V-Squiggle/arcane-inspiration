import React from 'react'

import styles from './scrollable-window.module.scss'

type Props = {
	children: React.ReactNode
}
const ScrollableWindow = ({ children }: Props) => {
	return <div className={styles['wrapper']}>{children}</div>
}

export default ScrollableWindow
