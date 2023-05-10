import Layout from '@/components/Layout'
import { useUser } from '@/hooks/useUser'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
	const { push } = useRouter()
	const { user } = useUser()

	const moveToCatalogPage = (catalogName) => {
		push(`/catalogo/${catalogName}`)
	}

	useEffect(() => {
		console.log('Version 🔖v1.1.0')
	}, [])

	if (user.catalog_name) moveToCatalogPage(user.catalog_name)

	return (
		<Layout title="Katalog | Home">
			<p className="text-center mt-3">
				Bienvenido a Katalog una aplicación que te ayudara a tener un catálogo
				de Productos en línea.
			</p>
			<picture>
				<img src="./catalog.webp" alt="Catalogo animado" />
			</picture>
			<p className="text-center mt-3">
				Para poder utilizar nuestro servicio gratuito debes crear un usuario.
			</p>
			<Link
				className="flex justify-center mt-4 underline text-pink-500 font-bold"
				href="/admin/registro"
			>
				Registrate gratis
			</Link>
		</Layout>
	)
}
