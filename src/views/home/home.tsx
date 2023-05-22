// "scss" (Sass) is an extremely popular way to write CSS. It's a superset of CSS that adds in special features.

// "modules" enables css modules for webpack.
//  This allows you to import a css file into a js file and access the css classes as properties on an object.
import styles from './Home.module.scss'

const Home = () => {
	return (
		<div>
			<h1 className={styles['home-header']}>Bonjour Monde!</h1>
		</div>
	)
}

export { Home }
