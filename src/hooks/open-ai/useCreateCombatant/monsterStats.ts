export type BaseStats = {
	AC: number
	Attack: number
	DC: number
	Damage: number
	HP: number
	Save: number
}
export const stats: Record<string, BaseStats> = {
	'0': { AC: 12, Attack: 2, DC: 9, Damage: 1, HP: 3, Save: 1 },
	'1': { AC: 13, Attack: 4, DC: 11, Damage: 10, HP: 30, Save: 3 },
	'1/2': { AC: 13, Attack: 4, DC: 11, Damage: 8, HP: 24, Save: 3 },
	'1/4': { AC: 13, Attack: 3, DC: 10, Damage: 5, HP: 15, Save: 2 },
	'1/8': { AC: 12, Attack: 3, DC: 10, Damage: 3, HP: 9, Save: 2 },
	'10': { AC: 16, Attack: 9, DC: 16, Damage: 50, HP: 150, Save: 8 },
	'11': { AC: 16, Attack: 9, DC: 16, Damage: 55, HP: 165, Save: 8 },
	'12': { AC: 17, Attack: 10, DC: 17, Damage: 60, HP: 180, Save: 9 },
	'13': { AC: 17, Attack: 10, DC: 17, Damage: 65, HP: 195, Save: 9 },
	'14': { AC: 17, Attack: 11, DC: 18, Damage: 70, HP: 210, Save: 10 },
	'15': { AC: 18, Attack: 11, DC: 18, Damage: 75, HP: 225, Save: 10 },
	'16': { AC: 18, Attack: 12, DC: 19, Damage: 80, HP: 240, Save: 11 },
	'17': { AC: 18, Attack: 12, DC: 19, Damage: 85, HP: 255, Save: 11 },
	'18': { AC: 19, Attack: 13, DC: 20, Damage: 90, HP: 270, Save: 12 },
	'19': { AC: 19, Attack: 13, DC: 20, Damage: 95, HP: 285, Save: 12 },
	'2': { AC: 13, Attack: 5, DC: 12, Damage: 15, HP: 45, Save: 4 },
	'20': { AC: 19, Attack: 14, DC: 21, Damage: 100, HP: 300, Save: 13 },
	'21': { AC: 20, Attack: 14, DC: 21, Damage: 105, HP: 315, Save: 13 },
	'22': { AC: 20, Attack: 15, DC: 22, Damage: 110, HP: 330, Save: 14 },
	'23': { AC: 20, Attack: 15, DC: 22, Damage: 115, HP: 345, Save: 14 },
	'24': { AC: 21, Attack: 16, DC: 23, Damage: 120, HP: 360, Save: 15 },
	'25': { AC: 21, Attack: 16, DC: 23, Damage: 125, HP: 375, Save: 15 },
	'26': { AC: 21, Attack: 17, DC: 24, Damage: 130, HP: 390, Save: 16 },
	'3': { AC: 14, Attack: 5, DC: 12, Damage: 20, HP: 60, Save: 4 },
	'4': { AC: 14, Attack: 6, DC: 13, Damage: 25, HP: 75, Save: 5 },
	'5': { AC: 14, Attack: 6, DC: 13, Damage: 30, HP: 90, Save: 5 },
	'6': { AC: 15, Attack: 7, DC: 14, Damage: 35, HP: 105, Save: 6 },
	'7': { AC: 15, Attack: 7, DC: 14, Damage: 40, HP: 120, Save: 6 },
	'8': { AC: 15, Attack: 8, DC: 15, Damage: 40, HP: 120, Save: 7 },
	'9': { AC: 16, Attack: 8, DC: 15, Damage: 45, HP: 135, Save: 7 },
}
