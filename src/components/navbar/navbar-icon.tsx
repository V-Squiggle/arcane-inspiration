import { FaCog, FaComment, FaHome } from 'react-icons/fa'

function getNavbarIcon(label: string) {
	switch (label) {
		case 'Home':
			return <FaHome />
		case 'Settings':
			return <FaCog />
		case 'Chat':
			return <FaComment />
		default:
			return null
	}
}

export default getNavbarIcon
