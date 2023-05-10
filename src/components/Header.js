import { useUser } from '@/hooks/useUser'
import Navbar from './Navbar'
import { EMPTY_STRING } from '@/utils/constants'

export default function Header() {
	const { user } = useUser()

	return (
		<header
			id="header"
			className="flex justify-between items-center py-1 border-b border-pink-600 relative"
		>
			<h1 className="font-nunito text-pink-600 font-extrabold tracking-wider text-lg leading-8">
				Katalog - {user.catalog_name || EMPTY_STRING}
			</h1>
			{user.id ? <Navbar /> : null}
		</header>
	)
}
