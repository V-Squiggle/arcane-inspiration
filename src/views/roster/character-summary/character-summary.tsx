import { ScrollableWindow } from '@/components'
import { Character } from '@/types'

import styles from './character-summary.module.scss'

type Props = {
	character: Character
}
const CharacterSummary = ({ character }: Props) => {
	return (
		<ScrollableWindow id='Character-Summary'>
			<div className={styles['container']}>
				<h1>{character.name}</h1>
				{character.image && (
					<img
						style={{ objectFit: 'contain', width: '100%' }}
						src={character.image}
						alt='Character'
					/>
				)}
				{/* TODO: Create accordian component 
                           for these properties
                */}
				<p>Race: {character.race}</p>
				<p>Gender: {character.gender}</p>
				<p>Age: {character.age}</p>
				<p>Backstory: {character.backstory}</p>
				<p>Personality: {character.personality}</p>
				<p>Appearance: {character.appearance}</p>
				<p>Goals: {character.goals}</p>
				<p>Motivations: {character.motivations}</p>
				<p>Occupation: {character.occupation}</p>
				<p>Hobbies: {character.hobbies}</p>
				<p>Fears: {character.fears}</p>
			</div>
		</ScrollableWindow>
	)
}

export default CharacterSummary
