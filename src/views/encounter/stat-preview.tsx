import React from 'react'
import { stats } from '../../hooks/open-ai/useCreateCombatant/monsterStats'

type StatPreviewProps = {
	challengeRating: string
}

export const StatPreview = ({ challengeRating }: StatPreviewProps) => {
	const monster = stats[challengeRating]

	return (
		<>
			<div>AC: {monster.AC}</div>
			<div>HP: {monster.HP}</div>
			<div>Attack: {monster.Attack}</div>
			<div>DC: {monster.DC}</div>
			<div>Damage: {monster.Damage}</div>
			<div>Save: {monster.Save}</div>
		</>
	)
}
