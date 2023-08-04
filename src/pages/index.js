import Layout from '@/components/Layout'
import Loading from '@/components/Loading'
import { useUser } from '@/hooks/useUser'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  const { push } = useRouter()
  const { user, loading } = useUser()

  useEffect(() => {
    console.log('Version 🔖v1.1.0')
  }, [])

  if (loading) return <Loading />

  return (
    <Layout title="Katalog | Home">
      <p className="text-center mt-3">
        Bienvenido a Katalog una aplicación que te ayudara a tener un catálogo
        de Productos en línea.
      </p>
      <picture>
        <img src="./catalog.webp" alt="Catalogo animado" />
      </picture>
      {user.catalog_name ? (
        <section>
          <Link
            className="flex justify-center mt-4 underline text-pink-500 font-bold"
            href={`/catalogo/${user.catalog_name}`}
          >
            Ver mi catalogo
          </Link>
        </section>
      ) : (
        <section>
          <p className="text-center mt-3">
            Para poder utilizar nuestro servicio gratuito debes crear un
            usuario.
          </p>
          <Link
            className="flex justify-center mt-4 underline text-pink-500 font-bold"
            href="/admin/registro"
          >
            Registrate gratis
          </Link>
        </section>
      )}
    </Layout>
  )
}
