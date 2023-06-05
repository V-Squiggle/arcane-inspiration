import { useCreateCharacter } from '@/hooks/open-ai'
import styles from './home.module.scss'

const Home = () => {
	const { generateNewNpc } = useCreateCharacter()

	const generateCharacter = async () => {
		const character = await generateNewNpc()
		console.log(character)
	}

	return (
		<div>
			<h1 className={styles['home-header']}>Bonjour Monde!</h1>
			{/* <button onClick={generateCharacter}>Generate Character</button> */}
		</div>
	)
}

export default Home
