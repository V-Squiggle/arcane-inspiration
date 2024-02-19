import { EncounterOverview } from './encounter-overview/encounter-overview'
import { SelectedMonster } from './selected-monster/selected-monster'
import { useState } from 'react'

import styles from './encounter.module.scss'

export const Encounter = () => {
	const [selectedMonsterIndex, setSelectedMonsterIndex] = useState<number>(-1)

	return (
		<div className={styles['container']}>
			<EncounterOverview
				selectedMonsterIndex={selectedMonsterIndex}
				setSelectedMonsterIndex={setSelectedMonsterIndex}
			/>
			<SelectedMonster index={selectedMonsterIndex} />
		</div>
	)
}
