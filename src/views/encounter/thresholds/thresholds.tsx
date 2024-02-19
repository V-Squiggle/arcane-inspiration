import { Monster, Party, Threshold } from '@/types'
import {
	getMonsterXp,
	getPartyXpThresholds,
} from '../encounter-overview/encounter-overview.utils'

import styles from './thresholds.module.scss'
import classNames from 'classnames'

type ThresholdsProps = {
	monsters: Monster[]
	party: Party
}
export const Thresholds = ({ monsters, party }: ThresholdsProps) => {
	const currentThreshold = getPartyXpThresholds(party)
	const monsterXp = getMonsterXp(monsters)
	const highlightedThreshold = getHighlightedThreshold(
		monsterXp,
		currentThreshold,
	)

	return (
		<>
			<div>Monster Difficulty:</div>
			<div> {monsterXp} xp</div>
			<br />
			<div>Party Capabilities:</div>
			<div className={styles['container']}>
				<ThresholdInfo
					label='Easy'
					threshold={currentThreshold.easy}
					isHighlighted={highlightedThreshold === 'Easy'}
				/>
				<ThresholdInfo
					label='Medium'
					threshold={currentThreshold.medium}
					isHighlighted={highlightedThreshold === 'Medium'}
				/>
				<ThresholdInfo
					label='Hard'
					threshold={currentThreshold.hard}
					isHighlighted={highlightedThreshold === 'Hard'}
				/>
				<ThresholdInfo
					label='Deadly'
					threshold={currentThreshold.deadly}
					isHighlighted={highlightedThreshold === 'Deadly'}
				/>
			</div>
			<br />
		</>
	)
}

const ThresholdInfo = ({
	label,
	threshold,
	isHighlighted,
}: {
	label: string
	threshold: number
	isHighlighted: boolean
}) => {
	const classes = classNames(styles['threshold-container'], {
		[styles['highlighted']]: isHighlighted,
	})

	return (
		<div className={classes}>
			<p className={styles['threshold-amount']}>{threshold}</p>
			<p className={styles['threshold-label']}>{label}</p>
		</div>
	)
}

const getHighlightedThreshold = (
	xp: number,
	currentThreshold: Threshold,
): 'Trivial' | 'Easy' | 'Medium' | 'Hard' | 'Deadly' => {
	if (xp <= currentThreshold.easy) return 'Trivial'
	if (xp <= currentThreshold.medium) return 'Easy'
	if (xp <= currentThreshold.hard) return 'Medium'
	if (xp <= currentThreshold.deadly) return 'Hard'

	return 'Deadly'
}
