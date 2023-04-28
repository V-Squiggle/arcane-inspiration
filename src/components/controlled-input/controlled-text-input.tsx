export type ControlledTextInputProps = {
	setValue: (value: string) => void
	value: string
}

const ControlledTextInput = ({ value, setValue }: ControlledTextInputProps) => {
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}

	return <input type='text' value={value} onChange={onChange} />
}

export default ControlledTextInput
