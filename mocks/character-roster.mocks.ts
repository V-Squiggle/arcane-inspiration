import { Character } from '@/types'
import { faker } from '@faker-js/faker'

const fantasyRaces: string[] = [
	'Human',
	'Elf',
	'Dwarf',
	'Halfling',
	'Gnome',
	'Half-Elf',
	'Half-Orc',
	'Dragonborn',
	'Tiefling',
	'Aasimar',
	'Goliath',
	'Genasi',
	'Firbolg',
	'Tortle',
	'Tabaxi',
	'Kenku',
	'Lizardfolk',
	'Goblin',
	'Hobgoblin',
	'Bugbear',
	'Orc',
	'Kobold',
	'Yuan-Ti Pureblood',
	'Triton',
	'Aarakocra',
	'Aven',
	'Centaur',
	'Changeling',
	'Kalashtar',
	'Minotaur',
	'Shifter',
	'Simic Hybrid',
	'Vedalken',
	'Warforged',
	'Loxodon',
]

export const generateMockCharacter = (): Character => {
	return {
		age: faker.number.int({
			max: 100,
			min: 18,
		}),
		appearance: faker.lorem.paragraph(),
		backstory: faker.lorem.paragraph(),
		fears: faker.lorem.paragraph(),
		gender: faker.person.sexType(),
		goals: faker.lorem.paragraph(),
		hobbies: faker.lorem.paragraph(),
		motivations: faker.lorem.paragraph(),
		name: faker.person.firstName(),
		occupation: faker.person.jobTitle(),
		personality: faker.lorem.paragraph(),
		race: fantasyRaces[
			faker.number.int({ max: fantasyRaces.length - 1, min: 0 })
		],
	}
}

export const generateMockRoster = (count: number): Character[] =>
	Array(count)
		.fill(null)
		.map(() => generateMockCharacter())
