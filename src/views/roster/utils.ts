import { StatusCode } from '@/types'

export const getGenerateButtonText = (status: StatusCode) => {
	switch (status) {
		case StatusCode.Idle:
			return 'Generate'
		case StatusCode.Loading:
			return 'Generating...'
		case StatusCode.Success:
			return 'Generate'
		case StatusCode.Error:
			return 'Generate'
	}
}
