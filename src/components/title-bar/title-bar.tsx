import styles from './title-bar.module.scss'

const TitleBar = () => {
	return (
		<div className={styles['container']}>
			<p>Arcane Inspiration</p>
			<div>
				<button
					onClick={() => {
						window.close()
					}}
				>
					X
				</button>
			</div>
		</div>
	)
}

export default TitleBar
