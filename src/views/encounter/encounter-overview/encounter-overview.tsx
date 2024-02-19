import { useEncounterService } from '@/hooks'
import {
	PlayerCharacterHeaderRow,
	PlayerCharacterRow,
} from '../player-character/player-character'
import { Thresholds } from '../thresholds/thresholds'
import { MonsterRow } from '../monster-row/monster-row'

import styles from './encounter-overview.module.scss'
import { IconButton, ScrollableWindow } from '@/components'
import { FaPlus } from 'react-icons/fa'

export const EncounterOverview = () => {
	const { party, addPlayerCharacter, addMonster, monsters } =
		useEncounterService()

	return (
		<div className={styles['wrapper-outer']}>
			<ScrollableWindow id='EncounterWindow'>
				<div className={styles['wrapper-inner']}>
					<Thresholds party={party} monsters={monsters} />
					<div className={styles['flex']}>
						<p>Players</p>
						<IconButton icon={FaPlus} onClick={addPlayerCharacter} />
					</div>
					<div>
						<PlayerCharacterHeaderRow />
						{party.playerCharacters.map((pc, i) => (
							<PlayerCharacterRow key={i} index={i} PlayerCharacter={pc} />
						))}
					</div>
					<div className={styles['flex']}>
						<p>Monsters</p>
						<IconButton icon={FaPlus} onClick={addMonster} />
					</div>
					<div>
						{monsters.map((monster, i) => (
							<MonsterRow key={i} index={i} monster={monster} />
						))}
					</div>
				</div>
			</ScrollableWindow>
		</div>
	)
}
