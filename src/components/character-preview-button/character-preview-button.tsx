import { Character } from '@/types'

import styles from './character-preview-button.module.scss'

type Props = {
	character: Character
	onClick: () => void
}

const CharacterPreviewButton = ({ character, onClick }: Props) => {
	const { image } = character

	return (
		<button onClick={onClick} className={styles['container']}>
			{image && <img className={styles['thumbnail']} src={image} />}
			{character.name}
		</button>
	)
}

export default CharacterPreviewButton
