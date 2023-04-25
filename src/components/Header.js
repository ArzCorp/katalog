import { useUser } from '@/hooks/useUser'
import Navbar from './Navbar'

export default function Header() {
	const { user } = useUser()

	return (
		<header
			id="header"
			className="flex justify-between items-center pt-1 border-b border-pink-600 relative"
		>
			<h1 className="font-Sedgwick text-pink-600 font-bold tracking-wider text-2xl leading-8">
				Rouss
			</h1>
			{user.id ? <Navbar /> : null}
		</header>
	)
}
