export const classNames = (...classes: string[]) => {
	return classes.filter(excludeDisabled).join(' ')
}

// TODO: Add support for objects with {string: boolean} to support conditional classes.
const excludeDisabled = (className: string): boolean => {
	if (typeof className === 'string') return true
	return false
}
