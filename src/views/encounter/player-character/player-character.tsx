import { useEncounterService } from '@/hooks'
import { PlayerCharacter } from '@/types'
import { IconButton } from '@/components'
import { FaTrashAlt } from 'react-icons/fa'

import styles from './player-character.module.scss'

type PlayerCharacterProps = {
	index: number
	PlayerCharacter: PlayerCharacter
}

export const PlayerCharacterRow = ({
	index,
	PlayerCharacter,
}: PlayerCharacterProps) => {
	const { updatePlayerCharacter, removePlayerCharacter } = useEncounterService()

	return (
		<div className={styles['container']}>
			<input
				className={styles['name']}
				value={PlayerCharacter.name}
				onChange={(e) =>
					updatePlayerCharacter(index, e.target.value, PlayerCharacter.level)
				}
			/>
			<input
				className={styles['level']}
				type='number'
				value={PlayerCharacter.level}
				onChange={(e) =>
					updatePlayerCharacter(
						index,
						PlayerCharacter.name,
						e.target.valueAsNumber,
					)
				}
			/>
			<div className={styles['remove-button']}>
				<IconButton
					onClick={() => removePlayerCharacter(index)}
					icon={FaTrashAlt}
				/>
			</div>
		</div>
	)
}

export const PlayerCharacterHeaderRow = () => {
	return (
		<div className={styles['container']}>
			<div className={styles['name']}>Name</div>
			<div className={styles['level']}>Level</div>
		</div>
	)
}
