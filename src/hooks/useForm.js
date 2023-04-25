import { useEffect, useState } from 'react'

export const useForm = ({ initialValues, submit } = {}) => {
	const [values, setValues] = useState({})
	const [errors, setErrors] = useState({})

	const handleChange = (e) => {
		const { name, value } = e.target

		setValues({
			...values,
			[name]: value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		submit(values)
	}

	const resetValues = () => {
		setValues(initialValues || {})
	}

	useEffect(() => {
		if (initialValues) setValues(initialValues)
	}, [initialValues])

	return { values, errors, handleChange, handleSubmit, resetValues }
}
