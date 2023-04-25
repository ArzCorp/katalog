import { request } from '@/utils/request'
import { useEffect, useState } from 'react'
import { useImage } from './useImage'
import { useUser } from './useUser'
import { ERRORS, EMPTY_STRING } from '@/utils/constants'

export const useProducts = (userId) => {
	const { user } = useUser()
	const { getImageUrl } = useImage()
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const [success, setSuccess] = useState(EMPTY_STRING)

	const addProduct = async (productData, callback) => {
		try {
			setLoading(true)
			setError(EMPTY_STRING)
			setSuccess(EMPTY_STRING)

			const image = await getImageUrl(productData.image)
			if (!image) throw new Error(ERRORS.ADD_PRODUCT)

			const response = await request({
				endpoint: 'products',
				method: 'POST',
				body: { ...productData, image, user_id: user.id },
			})
			if (response.error) throw new Error(response.message)

			setSuccess(response.message)
			setLoading(false)
			if (callback) return callback()
		} catch (error) {
			setError(error.message)
			setLoading(false)
		}
	}

	const getProducts = async (userId) => {
		try {
			setLoading(true)
			setError(EMPTY_STRING)
			setSuccess(EMPTY_STRING)

			const response = await request({
				endpoint: `products/${userId}`,
				method: 'GET',
			})

			if (response.error || !response.success)
				throw new Error(ERRORS.GET_PRODUCTS)

			setProducts(response.data)
		} catch (error) {
			setError(error.message)
			setLoading(false)
		}
	}

	const cleanMessages = () => {
		setError(EMPTY_STRING)
		setSuccess(EMPTY_STRING)
	}

	useEffect(() => {
		if (userId) getProducts(userId)
	}, [userId])

	return { loading, error, success, products, addProduct, cleanMessages }
}
