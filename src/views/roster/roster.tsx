import { useState } from 'react'
import { Character, StatusCode } from '@/types'
import { useCharacterRoster } from '@/hooks'
import { CharacterPreviewButton, ScrollableWindow } from '@/components'
import MainWrapper from '@/components/default-main-wrapper/main-wrapper'
import CharacterSummary from './character-summary/character-summary'
import GenerateCharacter from './generate-character/generate-character'
import Drawer from '@/components/drawer/drawer'

import styles from './roster.module.scss'

const Roster = () => {
	const [drawerContent, setDrawerContent] = useState<React.ReactNode>(null)
	const { characters, generateCharacter, status } = useCharacterRoster()

	return (
		<MainWrapper className={styles['wrapper']}>
			<ScrollableWindow id='Character-Roster'>
				<h1>Roster</h1>
				<button
					onClick={() => {
						setDrawerContent(
							<GenerateCharacter
								generateCharacter={generateCharacter}
								generateCharacterStatus={status}
							/>,
						)
					}}
				>
					Generate Character
				</button>
				{status === StatusCode.Error && <p>Failed to generate character</p>}
				{characters.map((character: Character) => (
					<CharacterPreviewButton
						key={character.name}
						character={character}
						onClick={() => {
							setDrawerContent(<CharacterSummary character={character} />)
						}}
					/>
				))}
			</ScrollableWindow>
			<Drawer
				isOpen={!!drawerContent}
				closeDrawer={() => {
					setDrawerContent(null)
				}}
			>
				{drawerContent}
			</Drawer>
		</MainWrapper>
	)
}

export default Roster
