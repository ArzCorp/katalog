import Head from 'next/head'
import { Fragment } from 'react'
import Header from '@/components/Header'

export default function Layout({ children, title = 'Rouss', header = true }) {
	return (
		<Fragment>
			<main className="min-h-screen px-2 max-w-xs mx-auto">
				{header ? <Header /> : null}
				<Head>
					<title>{title}</title>
				</Head>
				{children}
			</main>
		</Fragment>
	)
}
