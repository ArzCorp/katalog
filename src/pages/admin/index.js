import Button from '@/components/Button'
import Layout from '@/components/Layout'
import TextInput from '@/components/TextInput'
import Link from 'next/link'
import NotificationBox from '@/components/NotificationBox'

import { useForm } from '@/hooks/useForm'
import { useUser } from '@/hooks/useUser'
import { useRouter } from 'next/router'

export default function AdminLogIn() {
	const { push } = useRouter()
	const { login, error, success, loading, cleanMessages } = useUser()
	const { values, handleChange, handleSubmit } = useForm({
		submit: (values) => {
			login(values, (fields) => {
				push(`/catalogo/${fields.catalog_name}`)
			})
		},
	})

	return (
		<Layout title="Ingresar" header={false}>
			<section className="flex justify-center items-center min-h-screen">
				<form className="grid place-content-center" onSubmit={handleSubmit}>
					<h1 className="text-center text-xl text-pink-600 font-extrabold mb-5">
						Iniciar sesión
					</h1>
					<div className="flex flex-col gap-3 mb-6">
						<TextInput
							value={values.email}
							name="email"
							label="Usuario"
							onChange={handleChange}
						/>
						<TextInput
							value={values.password}
							name="password"
							type="password"
							label="Contraseña"
							onChange={handleChange}
						/>
					</div>
					<Button loading={loading} disabled={loading} type="submit">
						Ingresar
					</Button>
					<p className="text-sm mt-3">
						Si no tienes usuario
						<Link
							className="text-pink-600 underline mx-1"
							href="/admin/registro"
						>
							regístrate
						</Link>
						gratis
					</p>
				</form>
				<NotificationBox
					validation={success || error}
					error={error}
					success={success}
					onCloseNotification={cleanMessages}
				/>
			</section>
		</Layout>
	)
}
