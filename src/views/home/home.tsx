import { useState } from 'react'
import { StyledTextarea } from '@/components'

import styles from './home.module.scss'

const Home = () => {
	const [text, setText] = useState('')

	return (
		<div>
			<h1 className={styles['home-header']}>Bonjour Monde!</h1>
		</div>
	)
}

export { Home }
