import Layout from '@/components/Layout'
import ProductForm from '@/components/ProductForm'
import { useRouter } from 'next/router'

export default function EditProductPage() {
	const { query, isReady } = useRouter()

	if (!isReady) return <p>Cargando...</p>

	return (
		<Layout header={false} title="Productos | Agregar">
			<ProductForm productId={query.id} />
		</Layout>
	)
}
