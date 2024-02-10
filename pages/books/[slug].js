import Layout from '../../components/layout'
import Genres from "../../components/genres"
import Meta from "../../components/meta"
import {fetchBookChestBookSlugs, getPostData} from "../../lib/chest"
import Image from "next/image"
import ReactHtmlParser from 'react-html-parser'
import Link from "next/link"
import he from "he";
import styles from '../../components/layout.module.css'

export default function Book({book}) {
	const thebook = book[0]

	const meta = {
		isbn: thebook.pbc_book_isbn[0],
		pages: thebook.pbc_total_pages[0],
		author: thebook.pbc_book_authors[0],
		start: thebook.pbc_start_date[0],
		finished: thebook.pbc_finished_date[0],
	}
	
	return <Layout>
		<h1 className="my-8 text-5xl">{he.decode(thebook.title.rendered)}</h1>
		<div key={thebook.id} className="flex w-12/12">

			<div className="w-6/12">
				<Image
					className="max-w-md"
					src={thebook._embedded['wp:featuredmedia'][0].media_details.sizes.book_cover.source_url}
					alt={thebook._embedded['wp:featuredmedia'][0].alt_text}
					width={thebook._embedded['wp:featuredmedia'][0].media_details.sizes.book_cover.width}
					height={thebook._embedded['wp:featuredmedia'][0].media_details.sizes.book_cover.height}
				/>

				<div className={styles.backToHome}>
					<Link href="/">
						← Back to home
					</Link>
				</div>
			</div>
			<div className="w=6/12 px-8">
				<strong>Permalink:</strong> <Link href={thebook.link}>{thebook.link}</Link><br/>
				<Genres genres={thebook._embedded['wp:term'][2]} />
				<Meta meta={meta} />
				<strong>Description:</strong>
				<div className="space-y-4 ml-4">
					{ReactHtmlParser(thebook.content.rendered)}
				</div>
			</div>
		</div>
		<div className={styles.backToHome}>
			<Link href="/">
				← Back to home
			</Link>
		</div>
	</Layout>
}

export async function getStaticPaths() {
	const url = 'https://apiratelifefor.me/wp-json/wp/v2/books?_embed&book_status=94&per_page=100&orderby=pbc_finished_date';
	const paths = await fetchBookChestBookSlugs(url);

	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({params}) {
	const book_slug = params.slug
	const book = await getPostData(book_slug)
	return {
		props: {
			book
		}
	}
}
