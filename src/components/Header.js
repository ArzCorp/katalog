import { useUser } from '@/hooks/useUser'
import Navbar from './Navbar'
import { EMPTY_STRING, PAGE_URLS } from '@/utils/constants'
import { useRouter } from 'next/router'

export default function Header({ isOwner }) {
	const { asPath } = useRouter()
	const { user } = useUser()
	const isHomePage = asPath === PAGE_URLS.HOME

	return (
		<header
			id="header"
			className="flex justify-between items-center py-1 border-b border-pink-600 relative"
		>
			<h1 className="font-nunito text-pink-600 font-extrabold tracking-wider text-lg leading-8">
				Katalog
				{user.catalog_name && !isHomePage
					? ` - ${user.catalog_name}`
					: EMPTY_STRING}
			</h1>
			{isOwner ? <Navbar /> : null}
		</header>
	)
}
