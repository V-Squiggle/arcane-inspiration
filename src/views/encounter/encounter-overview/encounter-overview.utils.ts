import { Monster, Party, Threshold } from '@/types'

export const getPartyXpThresholds = (party: Party): Threshold =>
	party.playerCharacters.reduce<Threshold>(
		(prev, curr) => {
			const threshold = thresholds[curr.level]

			return {
				deadly: prev.deadly + threshold.deadly,
				easy: prev.easy + threshold.easy,
				hard: prev.hard + threshold.hard,
				medium: prev.medium + threshold.medium,
			}
		},
		{
			deadly: 0,
			easy: 0,
			hard: 0,
			medium: 0,
		},
	)

export const getMonsterXp = (monsters: Monster[]): number =>
	monsters.reduce((prev, curr) => {
		const xp = xpByCr[curr.challengeRating]

		return prev + xp * curr.count
	}, 0) * getXpMultiplier(getMonsterCount(monsters))

const thresholds: Record<number, Threshold> = {
	1: {
		deadly: 100,
		easy: 25,
		hard: 75,
		medium: 50,
	},
	10: {
		deadly: 2800,
		easy: 600,
		hard: 1900,
		medium: 1200,
	},
	11: {
		deadly: 3600,
		easy: 800,
		hard: 2400,
		medium: 1600,
	},
	12: {
		deadly: 4500,
		easy: 1000,
		hard: 3000,
		medium: 2000,
	},
	13: {
		deadly: 5100,
		easy: 1100,
		hard: 3400,
		medium: 2200,
	},
	14: {
		deadly: 5700,
		easy: 1250,
		hard: 3800,
		medium: 2500,
	},
	15: {
		deadly: 6400,
		easy: 1400,
		hard: 4300,
		medium: 2800,
	},
	16: {
		deadly: 7200,
		easy: 1600,
		hard: 4800,
		medium: 3200,
	},
	17: {
		deadly: 8800,
		easy: 2000,
		hard: 5900,
		medium: 3900,
	},
	18: {
		deadly: 9500,
		easy: 2100,
		hard: 6300,
		medium: 4200,
	},
	19: {
		deadly: 10900,
		easy: 2400,
		hard: 7300,
		medium: 4900,
	},
	2: {
		deadly: 200,
		easy: 50,
		hard: 150,
		medium: 100,
	},
	20: {
		deadly: 12700,
		easy: 2800,
		hard: 8500,
		medium: 5700,
	},
	3: {
		deadly: 400,
		easy: 75,
		hard: 225,
		medium: 150,
	},
	4: {
		deadly: 500,
		easy: 125,
		hard: 375,
		medium: 250,
	},
	5: {
		deadly: 1100,
		easy: 250,
		hard: 750,
		medium: 500,
	},
	6: {
		deadly: 1400,
		easy: 300,
		hard: 900,
		medium: 600,
	},
	7: {
		deadly: 1700,
		easy: 350,
		hard: 1100,
		medium: 750,
	},
	8: {
		deadly: 2100,
		easy: 450,
		hard: 1400,
		medium: 900,
	},
	9: {
		deadly: 2400,
		easy: 550,
		hard: 1600,
		medium: 1100,
	},
}

const xpByCr: Record<string, number> = {
	'0': 10,
	'1': 200,
	'1/2': 100,
	'1/4': 50,
	'1/8': 25,
	'10': 5900,
	'11': 7200,
	'12': 8400,
	'13': 10000,
	'14': 11500,
	'15': 13000,
	'16': 15000,
	'17': 18000,
	'18': 20000,
	'19': 22000,
	'2': 450,
	'20': 25000,
	'21': 33000,
	'22': 41000,
	'23': 50000,
	'24': 62000,
	'25': 75000,
	'26': 90000,
	'27': 105000,
	'28': 120000,
	'29': 135000,
	'3': 700,
	'30': 155000,
	'4': 1100,
	'5': 1800,
	'6': 2300,
	'7': 2900,
	'8': 3900,
	'9': 5000,
}

const getMonsterCount = (monsters: Monster[]) =>
	monsters.reduce((prev, curr) => prev + curr.count, 0)

const getXpMultiplier = (count: number) => {
	if (count === 1) return 1
	if (count === 2) return 1.5
	if (count < 7) return 2
	if (count < 11) return 2.5
	if (count < 15) return 3

	return 4
}
