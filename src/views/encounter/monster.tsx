import { MonsterResponse } from '@/types/monster'
import React from 'react'

type MonsterProps = {
	monster: MonsterResponse
}

export const Monster = ({ monster }: MonsterProps) => {
	return (
		<div>
			<h2 style={{ marginBottom: '0px' }}>{monster.name}</h2>
			{monster.type} <em>{monster.alignment}</em>
			<br />
			<br />
			<div>
				<strong>Armor Class: </strong>
				{monster.ac} {monster.armorName && `(${monster.armorName})`}
			</div>
			<div>
				<strong>Hit Points: </strong>
				{monster.hp}
			</div>
			<div>
				<strong>Speed: </strong>
				{monster.speed}
			</div>
			<br />
			<SkillDisplay name='Strength' amount={monster.str} />
			<SkillDisplay name='Dexterity' amount={monster.dex} />
			<SkillDisplay name='Constitution' amount={monster.con} />
			<SkillDisplay name='Intelligence' amount={monster.int} />
			<SkillDisplay name='Wisdom' amount={monster.wis} />
			<SkillDisplay name='Charisma' amount={monster.cha} />
			<br />
			<strong>Skills</strong>
			<ul>
				{monster.skills?.map((skill, i) => (
					<div key={i}>
						<li>
							<strong>{skill.name}:</strong> {skill.mod > 0 ? '+' : ''}
							{skill.mod}
						</li>
					</div>
				))}
			</ul>
			<div>
				<strong>Senses: </strong>
				<ul>
					{monster.senses.map((sense, i) => (
						<li key={i}>{sense}</li>
					))}
				</ul>
			</div>
			<div>
				<strong>Languages: </strong>
				{monster.languages.map((language, i) => (
					<span key={i}>{language} </span>
				))}
			</div>
			<div>
				<strong>Challenge: </strong>
				{monster.challenge}
			</div>
			<strong>Traits</strong>
			<ul>
				{monster.traits?.map((trait, i) => (
					<div key={i}>
						<li>
							<strong>{trait.name}:</strong> {trait.description}
						</li>
					</div>
				))}
			</ul>
			<strong>Actions</strong>
			<ul>
				{monster.actions?.map((action, i) => (
					<div key={i}>
						<li>
							<strong>{action.name}:</strong> {action.description}
						</li>
					</div>
				))}
			</ul>
		</div>
	)
}

type SkillDisplayProps = {
	name: string
	amount: number
}

const SkillDisplay = ({ name, amount }: SkillDisplayProps) => (
	<div>
		<strong>{name}:</strong> {amount}{' '}
		{`(${getSkillModPrefix(amount)}${getSkillMod(amount)})`}
	</div>
)

const getSkillModPrefix = (amount: number) => (amount > 11 ? '+' : '')
const getSkillMod = (amount: number) => (amount - 10) / 2
