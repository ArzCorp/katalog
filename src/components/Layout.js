import Head from 'next/head'
import Header from '@/components/Header'

export default function Layout({
	children,
	title = 'Rouss',
	header = true,
	isOwner,
}) {
	return (
		<main className="w-screen overflow-hidden min-h-screen px-2 lg:max-w-xs mx-auto">
			{header ? <Header isOwner={isOwner} /> : null}
			<Head>
				<title>{title}</title>
			</Head>
			{children}
		</main>
	)
}
