import { useForm } from '@/hooks/useForm'
import { useUser } from '@/hooks/useUser'
import { useRouter } from 'next/router'
import Button from '@/components/Button'
import TextInput from '@/components/TextInput'
import NotificationBox from '@/components/NotificationBox'
import Layout from '@/components/Layout'

export default function Register() {
	const { loading, error, createUser, success, cleanMessages } = useUser()
	const { push } = useRouter()
	const { handleSubmit, handleChange, values } = useForm({
		submit: (values) =>
			createUser(values, () => {
				push('/admin')
			}),
	})

	return (
		<Layout header={false} title="Crear usuario">
			<section className="flex flex-col justify-center min-h-screen">
				<div className="text-center max-w-[80%] mx-auto">
					<h1 className="text-pink-600 font-bold text-2xl mb-2">Registro</h1>
					<p className="text-sm mb-5">
						Para poder subir, editar y eliminar productos de tu catálogo debes
						crear un usuario
					</p>
				</div>
				<form
					onSubmit={handleSubmit}
					className="flex flex-col gap-y-4 max-w-[70%] mx-auto"
				>
					<TextInput
						values={values.name}
						name="name"
						label="Nombre:"
						onChange={handleChange}
					/>
					<TextInput
						values={values.lastname}
						name="lastname"
						label="Apellido:"
						onChange={handleChange}
					/>
					<TextInput
						value={values.email}
						type="email"
						name="email"
						label="Correo electrónico:"
						onChange={handleChange}
					/>
					<TextInput
						value={values.password}
						type="password"
						name="password"
						label="Contraseña:"
						onChange={handleChange}
					/>
					<TextInput
						value={values.repeat_password}
						type="password"
						name="repeat_password"
						label="Repetir contraseña:"
						onChange={handleChange}
					/>
					<TextInput
						value={values.catalog_name}
						name="catalog_name"
						label="Nombre del catálogo:"
						onChange={handleChange}
					/>
					<Button loading={loading} type="submit" disabled={loading}>
						Crear usuario
					</Button>
				</form>
				<NotificationBox
					validation={success || error}
					success={success}
					error={error}
					onCloseNotification={cleanMessages}
				/>
			</section>
		</Layout>
	)
}
