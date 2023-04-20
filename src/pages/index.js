import Layout from '@/components/Layout'
import Product from '@/components/Product'
import ProductsList from '@/components/ProductsList'
import { PRODUCTS } from '@/utils/constants'

export default function Home() {
	return (
		<Layout title="Rouss | Productos">
			<ProductsList>
				{PRODUCTS.map((product) => (
					<Product key={product.id} {...product} />
				))}
			</ProductsList>
		</Layout>
	)
}
