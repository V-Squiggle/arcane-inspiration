import styles from './input.module.scss'

export type ControlledTextInputProps = {
	label?: string
	onSubmit?: () => void
	setValue: (value: string) => void
	value: string
}

const ControlledTextInput = ({
	label,
	onSubmit,
	setValue,
	value,
}: ControlledTextInputProps) => {
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				if (onSubmit) onSubmit()
			}}
			className={styles['wrapper']}
		>
			{label && <label>{label}</label>}
			<input type='text' value={value} onChange={onChange} />
		</form>
	)
}

export default ControlledTextInput
