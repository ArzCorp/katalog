import useTag from '@/hooks/useTag'
import Button from './Button'
import { useRouter } from 'next/router'

export default function EmptyProducts() {
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
					Aún no tienes productos en tu catálogo.
				</h1>
				<picture>
					<img
						className="max-w-[70%] max-h-[300px] mx-auto"
						src="https://i.ibb.co/ZgNMQZ4/empty-box-isometric-by-Vexels.png"
						alt="No tienes productos"
					/>
				</picture>
				<div className="flex items-center justify-center">
					<Button onClick={moveToAddProduct}>Añadir producto</Button>
				</div>
			</div>
		</section>
	)
}
