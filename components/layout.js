import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Michael';
export const siteTitle = 'Bionic Pirate';

export default function Layout({children, home}) {

	const curYear = new Date().getFullYear();
	return (
		<div className="w-10/12 mx-auto">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content={`What has ${name} been reading?`}
				/>
				<meta name="og:title" content={siteTitle}/>
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header className={styles.header}>
				{home ? (
					<>
						<h1 className="text-3xl">{name}&apos;s Book shelf</h1>
					</>
				) : (
					<></>
				)}
			</header>
			<main className="bookshelf">{children}</main>
			<footer className="mb-8">
				<small>&copy;2022-{curYear} Most all photos self taken. All copyrights respected.</small>
			</footer>
		</div>
	)
}
