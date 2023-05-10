import { useEffect, useState } from 'react'
import { useUser } from './useUser'

export default function useAuth(catalogName) {
	const [isAuth, setIsAuth] = useState()
	const { user } = useUser()

	useEffect(() => {
		if (!catalogName) return
		if (!user.catalog_name) return setIsAuth(false)

		setIsAuth(user.catalog_name.toLowerCase() === catalogName.toLowerCase())
	}, [catalogName, user])

	return { isAuth }
}
