import useTag from '@/hooks/useTag'
import Button from './Button'
import { useRouter } from 'next/router'
import { useUser } from '@/hooks/useUser'
import { MESSAGES } from '@/utils/constants'

export default function EmptyProducts({ isOwner }) {
	const { user } = useUser()
	const { tag } = useTag('#header')
	const { push } = useRouter()

	const moveToAddProduct = () => push('/productos/agregar')

	return (
		<section
			style={{
				height: `calc(100vh - ${tag.offsetHeight}px)`,
			}}
			className="flex items-center justify-center"
		>
			<div>
				<h1 className="text-center text-pink-600 font-extrabold mb-2">
					{isOwner
						? MESSAGES.REGISTER_USER_EMPTY_PRODUCTS
						: MESSAGES.USER_EMPTY_PRODUCTS}
				</h1>
				<picture>
					<img
						className="max-w-[70%] max-h-[300px] mx-auto"
						src="https://i.ibb.co/ZgNMQZ4/empty-box-isometric-by-Vexels.png"
						alt="No tienes productos"
					/>
				</picture>
				<div className="flex items-center justify-center">
					{isOwner ? (
						<Button onClick={moveToAddProduct}>Añadir producto</Button>
					) : null}
				</div>
			</div>
		</section>
	)
}
