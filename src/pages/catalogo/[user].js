import EmptyProducts from '@/components/EmptyProducts'
import Layout from '@/components/Layout'
import Product from '@/components/Product'
import ProductsList from '@/components/ProductsList'
import { useProducts } from '@/hooks/useProducts'
import { useRouter } from 'next/router'

export default function UserCatalogPage() {
	const { isReady, query } = useRouter()
	const { products } = useProducts({
		catalogName: query.user,
	})

	if (!isReady) return <p>Cargando...</p>

	return (
		<Layout title={`${query.user} | Productos`}>
			{products.length > 0 ? (
				<ProductsList>
					{products.map((product) => (
						<Product key={product.id} {...product} />
					))}
				</ProductsList>
			) : (
				<EmptyProducts />
			)}
		</Layout>
	)
}
