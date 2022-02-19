import Head from 'next/head'
import Image from 'next/image'
import Layout, {siteTitle} from '../components/layout'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

import {fetchBookData} from "../lib/posts";

export async function getStaticProps() {

	const url = 'https://apiratelifefor.me/wp-json/wp/v2/books?_embed&book_status=94&per_page=100';
	const books = await fetchBookData( url );

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
			<section>

				<div className="text-center">
				<p>*record scratch* *page turn*</p>
				<p>Oh hi there, I didn't see you come in.</p>
				<p>I like to read. This is some of what I&apos;ve read. About {filteredbooks.length} at the moment.</p>
				<p>Click on a book to open it in <Link href="https://www.indiebound.org"><a>IndieBound.org</a></Link> and hopefully find where to buy locally.</p>
					<small>Most all photos self taken. All copyrights respected.</small>
				</div>
			</section>

			<article className="flex flex-wrap w-full mt-4">
					{
						filteredbooks.map(
							(book) =>
							<div key={book.id} className="flex-auto w-3/12">
								<Link href={`https://www.indiebound.org/book/${encodeURIComponent(book.pbc_book_isbn[0])}`}>
									<a target="_blank" rel="noopener noreferrer">
										<Image
											src={book._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url}
											alt=""
											layout="fixed"
											width="225"
											height="300"
										/>
									</a>
								</Link>
							</div>
						)
					}
			</article>
		</Layout>
	)
}
