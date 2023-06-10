import { StatusCode } from '@/types'

export type ControlledResponse<T> = {
	data: T | null
	status: StatusCode
	triggerAsyncFunction: () => void
}

const useControlledPromise = <T,>(
	asyncFunction: () => Promise<T>,
	callOnMount = false,
) => {
	const data = null
	const status = StatusCode.Idle

	const triggerAsyncFunction = () => {
		//
	}

	return { data, status, triggerAsyncFunction }
}

export default useControlledPromise
