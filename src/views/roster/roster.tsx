import { useState } from 'react'
import { Character } from '@/types'
import { useCharacterRoster } from '@/hooks'
import { CharacterPreviewButton, ScrollableWindow } from '@/components'
import MainWrapper from '@/components/default-main-wrapper/main-wrapper'
import CharacterSummary from './character-summary/character-summary'
import GenerateCharacter from './generate-character/generate-character'
import Drawer from '@/components/drawer/drawer'
import { GenerateCharacterStatus } from '@/hooks/useCharacterRoster.types'

import styles from './roster.module.scss'

const Roster = () => {
	const [drawerContent, setDrawerContent] = useState<
		'closed' | 'summary' | 'generate'
	>('closed')
	const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
		null,
	)
	const { characters, generateCharacter, status } = useCharacterRoster()

	return (
		<MainWrapper className={styles['wrapper']}>
			<ScrollableWindow id='Character-Roster'>
				<h1>Roster</h1>
				<button
					onClick={() => {
						setDrawerContent('generate')
					}}
				>
					Generate Character
				</button>
				{status === GenerateCharacterStatus.Error && (
					<p>Failed to generate character</p>
				)}
				{characters.map((character: Character) => (
					<CharacterPreviewButton
						key={character.name}
						character={character}
						onClick={() => {
							setSelectedCharacter(character)
							setDrawerContent('summary')
						}}
					/>
				))}
			</ScrollableWindow>
			<Drawer
				isOpen={drawerContent !== 'closed'}
				closeDrawer={() => {
					setDrawerContent('closed')
				}}
			>
				{drawerContent === 'summary' && selectedCharacter && (
					<CharacterSummary character={selectedCharacter} />
				)}
				{drawerContent === 'generate' && (
					<GenerateCharacter
						generateCharacter={generateCharacter}
						generateCharacterStatus={status}
					/>
				)}
			</Drawer>
		</MainWrapper>
	)
}

export default Roster
