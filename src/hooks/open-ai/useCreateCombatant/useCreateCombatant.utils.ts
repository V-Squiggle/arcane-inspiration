/* eslint-disable max-len */
import { ChatCompletionRequestMessage } from 'openai'
import { stats } from './monsterStats'

export const createMonsterSystemPrompt = (): ChatCompletionRequestMessage => {
	const message = `You are Arcane Inspiration, a D&D monster generating assistant. The user will prompt you with a rough description of an monster and then provide you guidelines on it's raw stats.

        You'll be provided the following:
        Challenge Rating (CR), Armor Class (AC), Hit Points (HP), Attack, Damage, Difficulty Class (DC), Save.
        
        CR: General difficulty rating of the enemy. All other stats are dependent on this stat.
        AC: You are allowed to add or remove up to 3 from the provided value based on the monster concept.
        HP: You are allowed to increase or decrease the provided value by up to 50% based on the concept. You may reduce the HP of monsters with damage-avoiding abilities by the amount of damage you expect them to avoid over 3 rounds of combat.
        Attack: The average modifier for the monster attack rolls. You are allowed to add or remove up to 2 to the provided value based on the monster concept.
        Damage: The average damage per turn for the monster (if the monster was to land all of it's possible attacks). You are allowed to increase or decrease the provided value by up to 50% based on the concept. This is the damage budget for all the monster's attacks. Limited-use (daily, recharge, or situational) attacks do 4x the damage budgeted. Multi-target attacks do ½ the damage budgeted. Limited-use multi-target attacks do 2x. All other damage sources are 1 for 1, including at-will and legendary single-target attacks, auras, reactions, and variable-length effects like Swallow. If a monster has several at-will options (such as melee and ranged), the lower-damage options are free.
        DC: The Difficulty Class of the monster's abilities. +-2 based on the concept.
        Save: The bonus to those saving throws that the monster would naturally be good at (for instance, Strength and Constitution for a bruiser, Intelligence for a wizard). This number also works for the bonus to a monster’s trained skills. Bad saving throws/untrained skills may be any value less than this. +-2 based on concept.
        Details: Add traits, resistances, immunities, vulnerabilities, non-damaging status effects, and other details based on monster concept. These don't affect the CR.
        
        IMPORTANT: This JSON object will be parsed directly, so please ensure it is formatted correctly and that there are no comments.`

	return {
		content: message,
		role: 'system',
	}
}

export const createMonsterPrompt = (
	description: string,
	challengeRating: string,
): string => {
	const monsterStats = stats[challengeRating]

	return `[CR(${challengeRating}),AC(${monsterStats.AC}),HP(${monsterStats.HP}),Attack(${monsterStats.Attack}),Damage(${monsterStats.Damage}),DC(${monsterStats.DC}),Save(${monsterStats.Save}})]
        ${description}`
}

export const createExamplePrompt = (): ChatCompletionRequestMessage => ({
	content: `[CR(3),AC(14),HP(60),Attack(5),Damage(20),DC(12),Save(4)]
Name: Flannigan Flyfellow
Race: Goliath
Description: Sailboat Captain, Leads a vessel with 6 crew members, blunderbuss, flintlock, rapier, explosive throwable`,
	role: 'user',
})

export const createExampleResponse = (): ChatCompletionRequestMessage => ({
	content: `{
        "name": "Flannigan Flyfellow",
        "type": "Large humanoid (goliath)",
        "alignment": "Chaotic Neutral",
        "ac": "14",
        "armorName": "natural armor",
        "hp": "60 (8d10 + 16)",
        "speed": "30",
        "str": 16,
        "dex": 14,
        "con": 14,
        "int": 10,
        "wis": 10,
        "cha": 12,
        "skills": [
            { "name": "Athletics", "mod": 5 },
            { "name": "Persuasion", "mod": 3 },
            { "name": "Perception", "mod": -5 }
        ],
        "senses": ["Passive Perception 10"],
        "languages": ["Common", "Giant"],
        "challenge": "3 (700 XP)",
        "traits": [
            {
                "name": "Brave",
                "description": "Flannigan has advantage on saving throws against being frightened."
            },
            {
                "name": "Goliath Weapon Training",
                "description": "Flannigan is proficient with the rapier and his firearm weapons."
            }
        ],
        "actions": [
            {
                "name": "Multiattack",
                "description": "Flannigan makes two attacks: one with his rapier and one with his firearm."
            },
            {
                "name": "Rapier",
                "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 3) piercing damage."
            },
            {
                "name": "Firearm",
                "description": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 12 (2d8 + 2) piercing damage."
            },
            {
                "name": "Explosive Throwable",
                "description": "Flannigan throws an explosive device at a point he can see within 30 feet. Each creature in a 10-foot radius of that point must make a DC 12 Dexterity saving throw, taking 14 (4d6) fire damage on a failed save, or half as much damage on a successful one."
            }
        ]
    }
    
`,
	role: 'assistant',
})
