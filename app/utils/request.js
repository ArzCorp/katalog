import { API_URL } from '../constants/env'
import { METHODS } from '../constants/methods'

export const request = async ({
  endpoint,
  method = METHODS.GET,
  body,
  revalidatingData = false,
}) => {
  const URL = API_URL + endpoint
  const fetchConfig = {
    next: { revalidate: 10 },
    body: JSON.stringify(body),
    method,
  }

  if (!revalidatingData) delete fetchConfig.next
  if (method === METHODS.GET) delete fetchConfig.body

  const response = await fetch(URL, fetchConfig)
  return response.json()
}
