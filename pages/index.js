import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import Book from '../components/book'
import Link from 'next/link'

import {fetchBookChest} from "../lib/chest";

export async function getStaticProps() {
	let books = []; let fetches = [];
	let results, totalPages;
	let url = new URL( 'https://apiratelifefor.me/wp-json/wp/v2/books?_embed&book_status=94&per_page=100&orderby=pbc_finished_date' );
	const resp = await fetch( url );

	totalPages = Number( resp.headers.get('x-wp-totalpages') );

	if ( totalPages >= Number( 1 ) ) {
		for(let page=1;page<=totalPages;page++) {
			url.searchParams.append('page',page);
			fetches.push( fetch( url ) );
		}
		results = await Promise.all(fetches).then(
			(responses) => Promise.all(
				responses.map( (response) => response.json()
				)
			)
		);
		results.forEach( ( batch, batch_index ) => {
			batch.forEach( ( book, book_index ) => {
				books.push(book);
			} );
		} );
	}

	return {
		props: {
			books
		}
	}
}

export default function Shelf({ books }) {
	let filteredbooks = books.filter(book => book._embedded['wp:featuredmedia'] !== undefined);

	return (
		<Layout shelf>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className="py-4 mb-12 mt-4">
				<div className="text-center">
				<p className="ml-3 font-bold">*record scratch* *page turn*</p>
				<p className="ml-3">Oh hi there, I didn't see you come in. I like to read. Since 2018, I also like to track what I've read. Below are roughly all of those books. About {filteredbooks.length} at the moment.</p>
				<p className="ml-3">Click on a book to get more information about it.</p>
				</div>
			</section>
			<article className="flex flex-wrap w-full mt-4">
					{
						filteredbooks.map(
							(book, i) => <Book key={i} book={book} />
						)
					}
			</article>
		</Layout>
	)
}
