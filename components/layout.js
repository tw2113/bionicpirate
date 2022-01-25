import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Michael'
export const siteTitle = 'Michael\'s Bookshelf'

export default function Layout({children, home}) {
	return (
		<div className="w-10/12 mx-auto">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="What has Michael been reading?"
				/>
			</Head>
			<header className={styles.header}>
				{home ? (
					<>
						<h1 className="text-3xl">{name}&apos;s Books</h1>
					</>
				) : (
					<></>
				)}
			</header>
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/">
						<a>← Back to home</a>
					</Link>
				</div>
			)}
		</div>
	)
}
