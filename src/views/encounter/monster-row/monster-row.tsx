import { useEncounterService } from '@/hooks'
import { Monster } from '@/types'
import { IconButton } from '@/components'
import { FaMinus, FaPlus, FaTrashAlt } from 'react-icons/fa'

import styles from './monster-row.module.scss'
import classNames from 'classnames'

type MonsterRowProps = {
	monster: Monster
	index: number
}

export const MonsterRow = ({ index, monster }: MonsterRowProps) => {
	const {
		removeMonster,
		updateMonsterCount,
		selectedMonsterIndex,
		setSelectedMonsterIndex,
	} = useEncounterService()

	return (
		<div>
			<div className={styles['overhead']}>
				<Counter
					count={monster.count}
					onIncrement={() => updateMonsterCount(index, 'INCREMENT')}
					onDecrement={() => updateMonsterCount(index, 'DECREMENT')}
					onRemove={() => removeMonster(index)}
				/>
				<div>{monster.challengeRating} cr</div>
			</div>
			<div
				className={`${styles['monster']} ${
					index === selectedMonsterIndex ? styles['selected'] : ''
				}`}
				onClick={() => setSelectedMonsterIndex(index)}
			>
				{monster.name}
			</div>
		</div>
	)
}

type CounterProps = {
	count: number
	onIncrement: () => void
	onDecrement: () => void
	onRemove: () => void
}
const Counter = ({
	count,
	onIncrement,
	onDecrement,
	onRemove,
}: CounterProps) => {
	const incrementClass = classNames(
		styles['button-wrapper'],
		styles['increment'],
	)
	const decrementClass = classNames(
		styles['button-wrapper'],
		styles['decrement'],
	)

	return (
		<div className={styles['counter-container']}>
			<div className={decrementClass}>
				<IconButton
					onClick={count === 1 ? onRemove : onDecrement}
					icon={count === 1 ? FaTrashAlt : FaMinus}
					backgroundColor='transparent'
					isUnpadded
				/>
			</div>
			<span> {count}x </span>
			<div className={incrementClass}>
				<IconButton
					onClick={onIncrement}
					icon={FaPlus}
					backgroundColor='transparent'
					isUnpadded
				/>
			</div>
		</div>
	)
}
