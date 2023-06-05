export const getInlinedStyles = (
	text: string,
): React.CSSProperties | undefined => {
	const lines = text.split('\n').length

	// This matches the line-height in the textarea style. Update in both places if changed.
	const lineHeight = 1.2
	const currentHeight = lineHeight * lines
	const maxHeight = lineHeight * 10

	const overflow = currentHeight > maxHeight ? 'auto' : 'hidden'

	return {
		height: `${currentHeight}rem`,
		maxHeight: `${maxHeight}rem`,
		overflowY: overflow,
	}
}
