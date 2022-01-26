import Head from 'next/head'
import Image from 'next/image'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import {fetchBookData} from "../lib/posts";

export async function getStaticProps() {

	const books = await fetchBookData();

	return {
		props: {
			books
		}
	}
}


export default function Home({ books }) {
	let filteredbooks = books.filter(book => book._embedded['wp:featuredmedia'] !== undefined)
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className="text-center font-normal font-base">

				<p>*page turn*</p>
				<p>
					I like to read. This is some of what I&apos;ve read. Total: {filteredbooks.length}
				</p>
				<p>I mostly read on weekends.</p>
			</section>

			<article className="flex flex-wrap w-full my-5">
					{
						filteredbooks.map(
							(book) =>
							<div key={book.id} className="flex-auto w-3/12">
								<Image
									src={book._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url}
									alt=""
									layout="fixed"
									width="225"
									height="300"
								/>
							</div>
						)
					}
			</article>
		</Layout>
	)
}
