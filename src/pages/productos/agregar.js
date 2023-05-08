import Layout from '@/components/Layout'
import ProductForm from '@/components/ProductForm'

export default function AddProductsPage() {
	return (
		<Layout header={false} title="Productos | Agregar">
			<ProductForm />
		</Layout>
	)
}
