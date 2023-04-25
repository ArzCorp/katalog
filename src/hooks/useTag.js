import { useEffect, useState } from 'react'

export default function useTag(selector) {
	const [tag, setTag] = useState({})

	useEffect(() => {
		const selectedTag = document.querySelector(selector)
		setTag(selectedTag)
	}, [selector])

	return { tag }
}
