import { useEffect, useState } from 'react'
import { EMPTY_STRING } from '../utils/constants/values'
import { request } from '../utils/request'
import { METHODS } from '../utils/constants/methods'
import { LOCAL_STORAGE_KEYS } from '../utils/constants/localStorage'
import { ENDPOINTS } from '../utils/constants/endpoints'
import { useRouter } from 'next/navigation'

export const useUser = () => {
  const { push } = useRouter()
  const [user, setUser] = useState({})
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(EMPTY_STRING)

  const resetState = () => {
    setError(EMPTY_STRING)
    setIsLoading(true)
    setIsAuth(false)
  }

  const login = async ({ email, password }) => {
    try {
      resetState()

      const response = await request({
        endpoint: ENDPOINTS.LOGIN,
        method: METHODS.POST,
        body: { email, password },
      })

      window.localStorage.setItem(
        LOCAL_STORAGE_KEYS.USER,
        JSON.stringify(response)
      )

      setIsAuth(true)
      setUser(response)
      setIsLoading(false)

      push(`/katalog/${user.catalog_name}`)
    } catch (error) {
      setError(error.message)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (!window) return

    const user = window.localStorage.getItem(LOCAL_STORAGE_KEYS.USER)
    setUser(JSON.parse(user))

    if (!user.name) setIsAuth(false)
  }, [])

  return { error, isLoading, user, isAuth, login }
}
