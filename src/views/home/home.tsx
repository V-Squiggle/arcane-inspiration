import { Counter } from '@/components'

// "scss" (Sass) is an extremely popular way to write CSS. It's a superset of CSS that adds in special features.

// "modules" enables css modules for webpack.
//  This allows you to import a css file into a js file and access the css classes as properties on an object.
import styles from './Home.module.scss'
import SendMessage from './SendMessage/SendMessage'

const Home = () => {
	return (
		<div>
			<h1 className={styles['home-header']}>Bonjour Monde!</h1>
			<SendMessage />
			<div className={styles['card']}>
				<Counter getLabel={(count) => `Current count is : ${count}`} />
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
		</div>
	)
}

export { Home }
