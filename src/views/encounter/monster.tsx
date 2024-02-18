import { MonsterResponse } from '@/types/monster'
import React from 'react'

type MonsterProps = {
	monster: string
}

export const Monster = ({ monster }: MonsterProps) => {
	const { type, value } = tryParseMonster(monster)
	if (type === 'string') {
		return (
			<>
				<div>Parsing failed:</div>
				<div>{value}</div>
			</>
		)
	}

	return (
		<div>
			<h2 style={{ marginBottom: '0px' }}>{value.name}</h2>
			{value.type} <em>{value.alignment}</em>
			<br />
			<br />
			<div>
				<strong>Armor Class: </strong>
				{value.ac} {value.armorName && `(${value.armorName})`}
			</div>
			<div>
				<strong>Hit Points: </strong>
				{value.hp}
			</div>
			<div>
				<strong>Speed: </strong>
				{value.speed}
			</div>
			<br />
			<SkillDisplay name='Strength' amount={value.str} />
			<SkillDisplay name='Dexterity' amount={value.dex} />
			<SkillDisplay name='Constitution' amount={value.con} />
			<SkillDisplay name='Intelligence' amount={value.int} />
			<SkillDisplay name='Wisdom' amount={value.wis} />
			<SkillDisplay name='Charisma' amount={value.cha} />
			<br />
			<strong>Skills</strong>
			<ul>
				{value.skills?.map((skill, i) => (
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
					{value.senses.map((sense, i) => (
						<li key={i}>{sense}</li>
					))}
				</ul>
			</div>
			<div>
				<strong>Languages: </strong>
				{value.languages.map((language, i) => (
					<span key={i}>{language} </span>
				))}
			</div>
			<div>
				<strong>Challenge: </strong>
				{value.challenge}
			</div>
			<strong>Traits</strong>
			<ul>
				{value.traits?.map((trait, i) => (
					<div key={i}>
						<li>
							<strong>{trait.name}:</strong> {trait.description}
						</li>
					</div>
				))}
			</ul>
			<strong>Actions</strong>
			<ul>
				{value.actions?.map((action, i) => (
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

const tryParseMonster = (
	monster: string,
):
	| { type: 'string'; value: string }
	| { type: 'parsed'; value: MonsterResponse } => {
	try {
		const parsed = JSON.parse(monster) as MonsterResponse

		return { type: 'parsed', value: parsed }
	} catch (e) {
		return { type: 'string', value: monster }
	}
}
