import { useState } from 'react'

type CounterProps = {
	getLabel: (count: number) => string
}

const Counter = ({ getLabel }: CounterProps) => {
	const [count, setCount] = useState(0)

	return (
		<button onClick={() => setCount((count) => count + 1)}>
			{getLabel(count)}
		</button>
	)
}

export { Counter }
