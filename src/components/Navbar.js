import { useState } from 'react'
import {
	faBars,
	faPlus,
	faCircleXmark,
	faDoorOpen,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useUser } from '@/hooks/useUser'

export default function Navbar() {
	const { logOut } = useUser()
	const [isOpenMenu, setIsOpenMenu] = useState(false)

	const toggleMenu = () => {
		setIsOpenMenu(!isOpenMenu)
	}

	return (
		<section>
			<button onClick={toggleMenu}>
				<FontAwesomeIcon className="text-pink-600" icon={faBars} />
			</button>
			{isOpenMenu ? (
				<nav className="w-9/12 absolute top-0 bottom-0 right-0 min-h-screen px-3 bg-pink-50 border py-3 flex flex-col justify-between">
					<div>
						<button
							className="w-full flex justify-end mb-3"
							onClick={toggleMenu}
						>
							<FontAwesomeIcon
								className="text-pink-600 text-xl"
								icon={faCircleXmark}
							/>
						</button>
						<ul className="flex flex-col gap-2">
							<li className="bg-white px-2 rounded-xl flex items-center py-2 text-pink-600 font-bold shadow-inner">
								<FontAwesomeIcon className="text-pink-600 mr-2" icon={faPlus} />
								<Link className="text-sm" href="/productos/agregar">
									Agregar producto
								</Link>
							</li>
							<li className="bg-white px-2 rounded-xl flex items-center py-2 text-pink-600 font-bold shadow-inner">
								<FontAwesomeIcon
									className="text-pink-600 mr-2"
									icon={faDoorOpen}
								/>
								<button className="text-sm" onClick={logOut}>
									Cerra sesión
								</button>
							</li>
						</ul>
					</div>
					<p className="text-center text-xs text-pink-600 font-bold">
						Developed by ArzCorp
					</p>
				</nav>
			) : null}
		</section>
	)
}
