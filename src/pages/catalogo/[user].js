import EmptyProducts from '@/components/EmptyProducts'
import Layout from '@/components/Layout'
import Product from '@/components/Product'
import ProductsList from '@/components/ProductsList'
import { useProducts } from '@/hooks/useProducts'
import { useUser } from '@/hooks/useUser'
import { PRODUCTS } from '@/utils/constants'
import { useRouter } from 'next/router'

export default function UserCatalogPage() {
	const { isReady } = useRouter()
	const { user } = useUser()
	const { products } = useProducts(user.id)

	if (!isReady) return <p>Cargando...</p>

	return (
		<Layout title={`${user.catalog_name} | Productos`}>
			{products.length > 0 ? (
				<ProductsList>
					{PRODUCTS.map((product) => (
						<Product key={product.id} {...product} />
					))}
				</ProductsList>
			) : (
				<EmptyProducts />
			)}
		</Layout>
	)
}
