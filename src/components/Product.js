export default function Product({
	price = 0,
	description = 'Description here',
	name = 'Product name here',
	image = './example-product-image.jpeg',
}) {
	return (
		<article className="h-full">
			<picture className="mb-2 flex items-center h-[208px]">
				<img
					className="h-[208px] object-contain mx-auto"
					src={image}
					alt={`imagen de producto - ${name}`}
				/>
			</picture>
			<main>
				<h2 className="font-bold mb-1">{name}</h2>
				<section className="flex gap-1">
					<h6 className="text-purple-950 font-extralight">Precio:</h6>
					<p className="font-bold text-pink-600">${price}</p>
				</section>
				<section>
					<h6 className="text-purple-950 font-extralight">Descripción:</h6>
					<p className="text-sm">{description}</p>
				</section>
			</main>
		</article>
	)
}
