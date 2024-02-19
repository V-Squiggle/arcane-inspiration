import { useEncounterService } from '@/hooks'
import {
	PlayerCharacterHeaderRow,
	PlayerCharacterRow,
} from '../player-character/player-character'
import { Thresholds } from '../thresholds/thresholds'

import styles from './encounter-overview.module.scss'
import { IconButton } from '@/components'
import { FaTrash, FaTrashAlt } from 'react-icons/fa'

type EncounterOverviewProps = {
	selectedMonsterIndex: number
	setSelectedMonsterIndex: React.Dispatch<React.SetStateAction<number>>
}

export const EncounterOverview = ({
	selectedMonsterIndex,
	setSelectedMonsterIndex,
}: EncounterOverviewProps) => {
	const {
		party,
		addPlayerCharacter,
		addMonster,
		monsters,
		removeMonster,
		updateMonsterCount,
	} = useEncounterService()

	return (
		<div className={styles['wrapper']}>
			<Thresholds party={party} monsters={monsters} />
			<div>
				<button onClick={addPlayerCharacter}>Add Player Character</button>
			</div>
			<div>
				<PlayerCharacterHeaderRow />
				{party.playerCharacters.map((pc, i) => (
					<PlayerCharacterRow key={i} index={i} PlayerCharacter={pc} />
				))}
			</div>
			<div>
				<button onClick={addMonster}>Add Monster</button>
			</div>
			<div>
				{monsters.map((monster, i) => (
					<div key={i}>
						<button onClick={() => updateMonsterCount(i, 'DECREMENT')}>
							-
						</button>
						<span> {monster.count}x </span>
						<button onClick={() => updateMonsterCount(i, 'INCREMENT')}>
							+
						</button>
						<div className={styles['remove-button']}>
							<IconButton onClick={() => removeMonster(i)} icon={FaTrashAlt} />
						</div>
						<div
							key={i}
							className={`${styles['monster']} ${
								i === selectedMonsterIndex ? styles['selected'] : ''
							}`}
							onClick={() => setSelectedMonsterIndex(i)}
						>
							{monster.name}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
