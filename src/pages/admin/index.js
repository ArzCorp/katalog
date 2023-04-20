import Button from '@/components/Button'
import Layout from '@/components/Layout'
import TextInput from '@/components/TextInput'

export default function AdminLogIn() {
	return (
		<Layout title="Rouss | ingresar" header={false}>
			<section className="flex justify-center items-center min-h-screen">
				<main className="grid place-content-center">
					<h1 className="text-center text-xl text-purple-700 font-extrabold mb-5">
						Iniciar sesión
					</h1>
					<div className="flex flex-col gap-3 mb-6">
						<TextInput label="Usuario" />
						<TextInput label="Contraseña" />
					</div>
					<Button>Ingresar</Button>
				</main>
			</section>
		</Layout>
	)
}
