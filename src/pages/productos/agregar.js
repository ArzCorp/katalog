import Button from '@/components/Button'
import Layout from '@/components/Layout'
import NotificationBox from '@/components/NotificationBox'
import TextInput from '@/components/TextInput'
import Upload from '@/components/Upload'
import { useForm } from '@/hooks/useForm'
import { useProducts } from '@/hooks/useProducts'
import { ADD_PRODUCT_INITIAL_VALUES, EVENTS } from '@/utils/constants'

export default function AddProductsPage() {
	const { loading, success, error, addProduct, cleanMessages } = useProducts()
	const { values, errors, handleChange, handleSubmit, resetValues } = useForm({
		initialValues: ADD_PRODUCT_INITIAL_VALUES,
		submit: async (values) => {
			addProduct(values, () => {
				resetValues()
				resetUploadImage()
			})
		},
	})

	const resetUploadImage = () => {
		dispatchEvent(new CustomEvent(EVENTS.RESET_UPLOAD_IMAGE))
	}

	return (
		<Layout header={false} title="Productos | Agregar">
			<section className="flex flex-col justify-center items-center min-h-screen">
				<form
					className="w-full max-w-[70%] mx-auto flex items-center flex-col gap-3"
					onSubmit={handleSubmit}
				>
					<h1 className="text-pink-600 font-bold text-lg">Agregar producto</h1>
					<Upload label="Agregar imagen" name="image" onChange={handleChange} />
					<TextInput
						value={values.name}
						label="Nombre:"
						name="name"
						onChange={handleChange}
					/>
					<TextInput
						value={values.price}
						label="Precio:"
						type="number"
						name="price"
						onChange={handleChange}
					/>
					<TextInput
						value={values.inventory_quantity}
						label="Cantidad en inventario:"
						type="number"
						name="inventory_quantity"
						onChange={handleChange}
					/>
					<TextInput
						value={values.description}
						label="Descripción:"
						name="description"
						onChange={handleChange}
					/>
					<Button loading={loading} disabled={loading} type="submit">
						Guardar
					</Button>
					<NotificationBox
						success={success}
						error={error}
						onCloseNotification={cleanMessages}
					/>
				</form>
			</section>
		</Layout>
	)
}
