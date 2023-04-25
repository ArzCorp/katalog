import { ENV } from '@/utils/constants'
import { useState } from 'react'

export const useImage = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	const getImageUrl = async (formData) => {
		try {
			setLoading(true)
			const response = await fetch(
				`https://api.imgbb.com/1/upload?key=${ENV.IMGBB_API_KEY}`,
				{
					method: 'POST',
					body: formData,
				}
			)

			const imageData = await response.json()

			if (!imageData.data) throw new Error('Error al generar la imagen')
			setLoading(false)
			return imageData.data.url
		} catch (error) {
			setError(error.message)
			setLoading(false)
		}
	}

	return { loading, error, getImageUrl }
}
