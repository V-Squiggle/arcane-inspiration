import { StatusCode } from '@/types'
import { useEffect, useState } from 'react'

export type ControlledResponse<T, K> = {
	data: T | null
	status: StatusCode
	triggerAsyncFunction: (...args: K[]) => void
}

const useControlledPromise = <T, K>(
	asyncFunction: (...args: K[]) => Promise<T>,
	callOnMount = false,
) => {
	const [data, setData] = useState<T | null>(null)
	const [status, setStatus] = useState<StatusCode>(StatusCode.Idle)

	useEffect(() => {
		if (callOnMount) {
			triggerAsyncFunction()
		}
	}, [])

	const triggerAsyncFunction = async (...args: K[]) => {
		setStatus(StatusCode.Loading)
		try {
			const response = await asyncFunction(...args)
			setData(response)
			setStatus(StatusCode.Success)
		} catch (error) {
			setStatus(StatusCode.Error)
			console.log(error)
		}
	}

	return { data, status, triggerAsyncFunction }
}

export default useControlledPromise
