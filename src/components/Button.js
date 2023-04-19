export default function Button({ full, ...props }) {
	const width = full ? 'w-full' : 'min-w-[150px] max-w-min mx-auto'
	return (
		<button
			className={`py-2 px-3 rounded-2xl ${width} bg-pink-600 text-white font-extrabold`}
			{...props}
		/>
	)
}
