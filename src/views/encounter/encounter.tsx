import { EncounterOverview } from './encounter-overview/encounter-overview'
import { SelectedMonster } from './selected-monster/selected-monster'
import { useState } from 'react'

import styles from './encounter.module.scss'

export const Encounter = () => {
	return (
		<div className={styles['container']}>
			<EncounterOverview />
			<SelectedMonster />
		</div>
	)
}
