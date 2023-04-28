import React from 'react'
import ControlledTextInput, {
	ControlledTextInputProps,
} from './controlled-text-input'
// prettier-ignore
type ControlledInputProps = 
    { type: 'text' } & ControlledTextInputProps

const ControlledInput = ({ type, ...rest }: ControlledInputProps) => {
	switch (type) {
		case 'text':
			return <ControlledTextInput {...rest} />
		default:
			throw new Error('Invalid Type passed to ControlledInput: ' + type + '.')
	}
}

export { ControlledInput }
