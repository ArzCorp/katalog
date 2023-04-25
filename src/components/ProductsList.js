export default function ProductsList({ children }) {
	return (
		<section className="grid grid-cols-2 gap-x-2 gap-y-3 pb-2 pt-4">
			{children}
		</section>
	)
}
