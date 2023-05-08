import { request } from '@/utils/request'
import { useEffect, useState } from 'react'
import { useImage } from './useImage'
import { useUser } from './useUser'
import { ERRORS, EMPTY_STRING } from '@/utils/constants'

export const useProducts = ({ catalogName, productId } = {}) => {
	const { user } = useUser()
	const { getImageUrl } = useImage()
	const [product, setProduct] = useState({})
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const [success, setSuccess] = useState(EMPTY_STRING)

	const addProduct = async (productData, callback) => {
		try {
			setLoading(true)
			cleanMessages()

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

	const getProducts = async (catalogName) => {
		try {
			setLoading(true)
			setError(EMPTY_STRING)
			setSuccess(EMPTY_STRING)

			const response = await request({
				endpoint: `products/${catalogName}`,
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

	const deleteProduct = async (productId, callback) => {
		cleanMessages()
		const response = await request({
			endpoint: `products/${productId}`,
			method: 'DELETE',
		})

		if (response.success) setSuccess(response.message)

		setError(response.error)

		if (callback) callback()
	}

	const getProduct = async (productId) => {
		try {
			setError(false)
			setSuccess(false)

			const response = await request({
				endpoint: `product/${productId}`,
				method: 'GET',
			})
			if (response.success) {
				setProduct(response.data)
			}
		} catch (error) {
			setError(error.message)
		}
	}

	useEffect(() => {
		if (catalogName) getProducts(catalogName)
		if (productId) getProduct(productId)
	}, [catalogName, productId])

	return {
		loading,
		error,
		success,
		products,
		product,
		addProduct,
		editProduct,
		cleanMessages,
		deleteProduct,
	}
}
