import { ENV } from './constants'

export const request = async ({ endpoint, body, method }) => {
	const fetchConfig = {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
	}

	if (body) fetchConfig.body = JSON.stringify(body)

	const request = await fetch(`${ENV.BASE_API_URL}/${endpoint}`, fetchConfig)
	const response = await request.json()
	return response
}
