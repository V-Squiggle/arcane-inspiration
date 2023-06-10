import { StatusCode } from '@/types'
import { useState } from 'react'

export type ControlledResponse<T> = {
	data: T | null
	status: StatusCode
	triggerAsyncFunction: () => void
}

const useControlledPromise = <T,>(
	asyncFunction: () => Promise<T>,
	callOnMount = false,
) => {
	const [data, setData] = useState<T | null>(null)
	const [status, setStatus] = useState<StatusCode>(StatusCode.Idle)

	const triggerAsyncFunction = async () => {
		//
	}

	return { data, status, triggerAsyncFunction }
}

export default useControlledPromise
