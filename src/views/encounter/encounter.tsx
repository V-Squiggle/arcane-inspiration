import { useState } from 'react'
import { stats } from '../../hooks/open-ai/useCreateCombatant/monsterStats'
import { StatPreview } from './stat-preview'
import { ScrollableWindow, StyledTextarea } from '@/components'
import { useCreateCombatant } from '@/hooks/open-ai'
import { Monster } from './monster'
import { StatusCode } from '@/types'

import styles from './encounter.module.scss'

const crOptions = Object.keys(stats).sort(
	(a, b) => parseFloat(a) - parseFloat(b),
)
export const Encounter = () => {
	const [challengeRating, setChallengeRating] = useState<string>('0')
	const [description, setDescription] = useState<string>('')
	const {
		data: monster,
		triggerAsyncFunction: generateNewMonster,
		status: monsterStatus,
	} = useCreateCombatant()

	const onGenerateMonster = async () => {
		if (challengeRating && description) {
			generateNewMonster(description, challengeRating)
		}
	}

	return (
		<ScrollableWindow id='EncounterWindow'>
			<h1>Encounter Creator</h1>
			<div className={styles['cr-container']}>
				<label htmlFor='cr'>Challenge Rating: </label>
				<select
					name='cr'
					id='cr'
					value={challengeRating}
					onChange={(e) => {
						setChallengeRating(e.target.value)
					}}
				>
					{crOptions.map((cr, i) => (
						<option key={i} value={cr}>
							{cr}
						</option>
					))}
				</select>
				{challengeRating && <StatPreview challengeRating={challengeRating} />}
			</div>
			<StyledTextarea
				text={description}
				onTextUpdate={(e) => setDescription(e.target.value)}
				placeholder='Enter a description of the monster here...'
			/>
			<button onClick={onGenerateMonster}>
				{getButtonLabel(monsterStatus)}
			</button>
			{monster && <Monster monster={monster} />}
		</ScrollableWindow>
	)
}

const getButtonLabel = (status: StatusCode) => {
	switch (status) {
		case StatusCode.Loading:
			return 'Loading...'
		case StatusCode.Success:
			return 'Success'
		case StatusCode.Error:
			return 'Error'
		default:
			return 'Generate Monster'
	}
}
