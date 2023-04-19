export default function TextInput({ label, ...props }) {
	return (
		<input
			className="px-2 py-1 border rounded-[14px] border-violet-600 placeholder:text-purple-900 focus:outline-purple-600"
			type="text"
			placeholder={label}
			{...props}
		/>
	)
}
