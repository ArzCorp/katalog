import { EMPTY_STRING } from '@/utils/constants'
import { request } from '@/utils/request'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const useUser = () => {
	const [success, setSuccess] = useState(EMPTY_STRING)
	const [error, setError] = useState(EMPTY_STRING)
	const [user, setUser] = useState({})
	const [loading, setLoading] = useState(false)
	const { push } = useRouter()

	const login = async ({ email, password }, callback) => {
		try {
			setLoading(true)
			setError(EMPTY_STRING)
			setSuccess(EMPTY_STRING)
			const response = await request({
				endpoint: 'login',
				method: 'POST',
				body: {
					email,
					password,
				},
			})

			if (!response.success && response.error) throw new Error(response.message)
			setLoading(false)
			setUser(response.data)
			window.localStorage.setItem('user', JSON.stringify(response.data))
			setSuccess(response.message)
			if (callback) return callback(response.data)
			window.localStorage.setItem('user', JSON.stringify(response.data))
		} catch (error) {
			setError(error.message)
			setLoading(false)
		}
	}

	const createUser = async (userData, callback) => {
		try {
			setLoading(true)
			setError(EMPTY_STRING)
			setSuccess(EMPTY_STRING)

			const response = await request({
				endpoint: 'users',
				method: 'POST',
				body: userData,
			})

			if (!response.success && response.error) throw new Error(response.message)
			setLoading(false)
			setSuccess(response.message)
			if (callback) return callback()
		} catch (error) {
			setError(error.message)
			setLoading(false)
		}
	}

	const logOut = () => {
		window.localStorage.setItem('user', JSON.stringify({}))
		push('/admin')
	}

	const cleanMessages = () => {
		const clean = setTimeout(() => {
			setError(EMPTY_STRING)
			setSuccess(EMPTY_STRING)
		}, 4000)
	}

	useEffect(() => {
		if (window) {
			try {
				const user = window.localStorage.getItem('user')
				setUser(JSON.parse(user || {}))
			} catch (error) {
				setError(error.message)
			}
		}
	}, [])

	return {
		login,
		user,
		error,
		loading,
		success,
		createUser,
		cleanMessages,
		logOut,
	}
}
