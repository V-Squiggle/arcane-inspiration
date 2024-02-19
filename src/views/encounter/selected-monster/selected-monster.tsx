import { stats } from '@/hooks/open-ai/useCreateCombatant/monsterStats'
import { StatPreview } from '../stat-preview'
import { ScrollableWindow, StyledTextarea } from '@/components'
import { Monster } from '../monster'

import styles from './selected-monster.module.scss'
import { useEncounterService } from '@/hooks'

const parseCr = (cr: string) => {
	if (cr === '1/8') return 0.125
	if (cr === '1/4') return 0.25
	if (cr === '1/2') return 0.5
	const parsed = parseFloat(cr)

	return isNaN(parsed) ? 0 : parsed
}
const crOptions = Object.keys(stats).sort((a, b) => parseCr(a) - parseCr(b))

export const SelectedMonster = () => {
	const {
		generateMonster,
		monsters,
		updateMonster,
		selectedMonsterIndex: index,
	} = useEncounterService()

	const selectedMonster = index > -1 ? monsters[index] : null
	if (!selectedMonster) return null

	const challengeRating = selectedMonster?.challengeRating
	const setChallengeRating = (cr: string) => {
		updateMonster(index, {
			...selectedMonster,
			challengeRating: cr,
		})
	}

	const onGenerateMonster = async () =>
		generateMonster(index, `Name: ${selectedMonster.name}\n` + description)

	const description = selectedMonster.prompt
	const setDescription = (description: string) => {
		updateMonster(index, {
			...selectedMonster,
			prompt: description,
		})
	}

	return (
		<ScrollableWindow id='EncounterWindow'>
			<label htmlFor='monster-name'>Name: </label>
			<input
				name='monster-name'
				id='monster-name'
				value={selectedMonster.name}
				onChange={(e) => {
					updateMonster(index, {
						...selectedMonster,
						name: e.target.value,
					})
				}}
			/>
			<br />
			<label htmlFor='cr'>Challenge Rating: </label>
			<select
				name='cr'
				id='cr'
				value={selectedMonster.challengeRating}
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
			<div className={styles['stat-container']}>
				{challengeRating && (
					<StatPreview challengeRating={challengeRating.toString()} />
				)}
			</div>
			<StyledTextarea
				text={description}
				onTextUpdate={(e) => setDescription(e.target.value)}
				placeholder='Enter a description of the monster here...'
			/>
			<button onClick={onGenerateMonster}>
				{getButtonLabel(selectedMonster.status)}
			</button>
			{selectedMonster && selectedMonster.status === 'GENERATED' && (
				<Monster monster={selectedMonster} />
			)}
		</ScrollableWindow>
	)
}

const getButtonLabel = (
	status: 'PRE_GENERATION' | 'GENERATING' | 'GENERATION_FAILED' | 'GENERATED',
) => {
	switch (status) {
		case 'GENERATING':
			return 'Loading...'
		case 'GENERATED':
			return 'Success'
		case 'GENERATION_FAILED':
			return 'Error'

		default:
			return 'Generate Monster'
	}
}
