import styles from './input.module.scss'

export type ControlledTextInputProps = {
	label?: string
	setValue: (value: string) => void
	value: string
}

const ControlledTextInput = ({
	label,
	setValue,
	value,
}: ControlledTextInputProps) => {
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}

	return (
		<div className={styles['wrapper']}>
			{label && <label>{label}</label>}
			<input type='text' value={value} onChange={onChange} />
		</div>
	)
}

export default ControlledTextInput
