import { useProducts } from '@/hooks/useProducts'
import Button from './Button'
import NotificationBox from './NotificationBox'
import TextInput from './TextInput'
import Upload from './Upload'
import { useForm } from '@/hooks/useForm'
import { ADD_PRODUCT_INITIAL_VALUES, EVENTS } from '@/utils/constants'
import { useRouter } from 'next/router'

export default function ProductForm({ productId }) {
	const { back } = useRouter()
	const {
		product,
		loading,
		success,
		error,
		addProduct,
		cleanMessages,
		deleteProduct,
	} = useProducts({
		productId,
	})
	const { values, errors, handleChange, handleSubmit, resetValues } = useForm({
		initialValues: product || ADD_PRODUCT_INITIAL_VALUES,
		submit: async (values) => {
			addProduct(values, () => {
				resetValues()
				resetUploadImage()
			})
		},
	})

	const removeProduct = () => {
		deleteProduct(productId, () => {
			back()
		})
	}

	const resetUploadImage = () => {
		dispatchEvent(new CustomEvent(EVENTS.RESET_UPLOAD_IMAGE))
	}

	return (
		<section className="flex flex-col justify-center items-center min-h-screen">
			<form
				className="w-full max-w-[70%] mx-auto flex items-center flex-col gap-3"
				onSubmit={handleSubmit}
			>
				<h1 className="text-pink-600 font-bold text-lg">
					{productId ? 'Editar' : 'Agregar'} producto
				</h1>
				<Upload
					img={product.image}
					label="Agregar imagen"
					name="image"
					onChange={handleChange}
				/>
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
				<section className="flex gap-2">
					<Button loading={loading} disabled={loading} type="submit">
						{productId ? 'Editar' : 'Guardar'}
					</Button>
					{productId ? <Button onClick={removeProduct}>Eliminar</Button> : null}
				</section>
				<NotificationBox
					success={success}
					error={error}
					onCloseNotification={cleanMessages}
				/>
			</form>
		</section>
	)
}
