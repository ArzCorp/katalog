import { EMPTY_STRING, EVENTS } from '@/utils/constants'
import { useEffect, useState } from 'react'

export default function Upload({ label, onChange, name, img }) {
	const [image, setImage] = useState(EMPTY_STRING)
	const getImageBase64 = async (e) => {
		try {
			const file = e.target.files[0]
			const formData = new FormData()
			formData.append('image', file)

			const reader = new FileReader()
			reader.readAsDataURL(file)
			reader.onload = () => {
				const base64Image = reader.result
				console.log(base64Image)

				setImage(base64Image)
				onChange({
					error: null,
					target: {
						name,
						value: formData,
					},
				})
			}
		} catch (error) {
			onChange({ error: error.message, target: {} })
			setImage(EMPTY_STRING)
		}
	}

	const cleanImage = () => {
		setImage(EMPTY_STRING)
	}

	useEffect(() => {
		addEventListener(EVENTS.RESET_UPLOAD_IMAGE, cleanImage)

		return () => {
			document.removeEventListener(EVENTS.RESET_UPLOAD_IMAGE, cleanImage)
		}
	}, [])

	useEffect(() => {
		setImage(img)
	}, [img])

	return (
		<div className="w-full h-[200px] border-2 border-pink-600 p-4 relative rounded-md flex justify-center items-center">
			<p className="text-pink-950">{label}</p>
			<input
				onChange={getImageBase64}
				className="w-full h-full opacity-0 absolute left-0 right-0 top-0 bottom-0 z-50"
				type="file"
				name=""
				id=""
			/>
			{image ? (
				<picture className="absolute z-10 top-0 left-0 right-0 bottom-0">
					<img
						id="upload-image"
						className="w-full h-full object-contain text-transparent upload"
						src={image}
						alt="Imagen cargada"
					/>
				</picture>
			) : null}
		</div>
	)
}
