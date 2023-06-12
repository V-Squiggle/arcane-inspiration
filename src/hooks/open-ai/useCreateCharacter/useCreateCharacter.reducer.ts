import { GenerateCharacterParameters } from '@/hooks/useCharacterRoster.types'

export const createCharacterReducer = (
	state: GenerateCharacterParameters,
	action: CreateCharacterAction,
) => {
	switch (action.type) {
		case 'UPDATE_PARAMETER': {
			const { key, value } = action.payload
			const newState = { ...state }

			if (key === 'age') newState[key] = value
			else newState[key] = value

			return newState
		}
		case 'RESET_PARAMETERS':
			return initialState
		default:
			return state
	}
}

export const initialState: GenerateCharacterParameters = {
	customRequest: '',
	gender: '',
	name: '',
	race: '',
}

export type CreateCharacterAction =
	| UpdateParameterAction
	| ResetParametersAction

type UpdateParameterAction = {
	type: 'UPDATE_PARAMETER'
	payload: KVPairs<GenerateCharacterParameters>
}

type ResetParametersAction = {
	type: 'RESET_PARAMETERS'
}

type KVPairs<T, K extends keyof T = keyof T> = K extends keyof T
	? { key: K; value: T[K] }
	: never
