export default function Product({
	price = 0,
	description = 'Description here',
	name = 'Product name here',
	image = './example-product-image.jpeg',
}) {
	return (
		<article className="h-full text-sm">
			<picture>
				<img
					className="h-[208px] mb-2 w-full object-contain mx-auto"
					src={image}
					alt={`imagen de producto - ${name}`}
				/>
			</picture>
			<section className="text-center px-1">
				<h2 className="font-bold text-base">{name}</h2>
				<p className="font-bold text-pink-600">${price}</p>
			</section>
		</article>
	)
}
