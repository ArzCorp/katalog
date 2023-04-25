import Layout from '@/components/Layout'
import { useEffect } from 'react'

export default function Home() {
	useEffect(() => {
		console.log('Version 🔖v1.1.0')
	}, [])

	return (
		<Layout title="Productos | En venta">
			<p>Katalog</p>
		</Layout>
	)
}
