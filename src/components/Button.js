import { EMPTY_STRING } from '@/utils/constants'

export default function Button({ full, loading, ...props }) {
	const loadingStyles = loading ? 'animate-pulse bg-opacity-75' : EMPTY_STRING
	const width = full ? 'w-full' : 'min-w-[150px] max-w-min mx-auto'

	return (
		<button
			className={`py-2 px-3 rounded-2xl text-sm ${width} ${loadingStyles} bg-pink-600 text-white font-extrabold`}
			{...props}
		/>
	)
}
