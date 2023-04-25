export const EMPTY_STRING = ''

export const ENV = Object.freeze({
	IMGBB_API_KEY: process.env.NEXT_PUBLIC_IMGBB_API_KEY,
	BASE_API_URL: process.env.NEXT_PUBLIC_BASE_API_URL,
})

export const ADD_PRODUCT_INITIAL_VALUES = {
	name: EMPTY_STRING,
	price: EMPTY_STRING,
	inventory_quantity: EMPTY_STRING,
	description: EMPTY_STRING,
}

export const ERRORS = Object.freeze({
	ADD_PRODUCT: 'Ocurrió un error, recarga la página e intenta nuevamente.',
	GET_PRODUCTS: 'Ocurrió un error al obtener los productos, intenta más tarde.',
})

export const EVENTS = Object.freeze({
	RESET_UPLOAD_IMAGE: 'reset-upload-image-event',
})

export const PRODUCTS = [
	{
		name: 'Cilindro de sandía',
		id: 1,
		description: 'Excelente calidad',
		price: 180,
		image: 'https://i.ibb.co/F6Q49kz/sandia.jpg',
	},
	{
		name: 'Cilindro de cámara',
		id: 2,
		description: 'Excelente calidad',
		price: 180,
		image: 'https://i.ibb.co/vq8QyF9/camara.jpg',
	},
	{
		name: 'Kit de cuchillos',
		id: 3,
		description: 'Hermosísimos',
		price: 280,
		image: 'https://i.ibb.co/WK3rrxx/cuchillos.jpg',
	},
	{
		name: 'Kit de cuchillos',
		id: 4,
		description: 'Hermosísimos',
		price: 160,
		image: 'https://i.ibb.co/ydQNzJv/cuchillos-2.jpg',
	},
	{
		name: 'Cilindro 750ml',
		id: 5,
		description: 'Hermoso',
		price: 180,
		image: 'https://i.ibb.co/2S8mrsQ/cilindro.jpg',
	},
	{
		name: 'Botella',
		id: 6,
		description: 'Capacidad 1L',
		price: 135,
		image: 'https://i.ibb.co/RNmrP3r/botella-1.jpg',
	},
	{
		name: 'Cilindro dona',
		id: 7,
		description: 'Capacidad 500ml',
		price: 180,
		image: 'https://i.ibb.co/zhPWWKq/cilindro-dona.jpg',
	},
	{
		name: 'Cilindro paleta',
		id: 8,
		description: 'Color a elegir',
		price: 175,
		image: 'https://i.ibb.co/j8j2kWQ/cilindro-paleta.jpg',
	},
	{
		name: 'Kit cilindro',
		id: 7,
		description: 'Tres cilindros diferentes colores',
		price: 230,
		image: 'https://i.ibb.co/hgJYd4f/kitcilindro.jpg',
	},
	{
		name: 'Cilindro de paletita',
		id: 8,
		description: 'Hermoso',
		price: 180,
		image: 'https://i.ibb.co/RbKvb5g/cilindro-paletita.jpg',
	},
]
