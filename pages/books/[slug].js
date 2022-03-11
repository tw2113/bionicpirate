import Layout from '../../components/layout'
import {fetchBookChestBookSlugs, getPostData} from "../../lib/chest"
import Image from "next/image"
import ReactHtmlParser from 'react-html-parser';

export default function Book({book}) {
	const thebook = book[0]

	return <Layout>
		<div key={thebook.id} className="flex w-12/12">
			<div className="w-3/12">
				<Image
					className="max-w-md"
					src={thebook._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url}
					alt={thebook._embedded['wp:featuredmedia'][0].alt_text}
					layout="fixed"
					width={thebook._embedded['wp:featuredmedia'][0].media_details.sizes.medium.width}
					height={thebook._embedded['wp:featuredmedia'][0].media_details.sizes.medium.height}
				/>
			</div>
			<div className="w=3/12">Original Link: {thebook.link}<br />
				Title: {thebook.title.rendered}<br /><hr/>
				{ReactHtmlParser( thebook.content.rendered )}
			</div>
		</div>
	</Layout>
}

export async function getStaticPaths() {
	const url = 'https://apiratelifefor.me/wp-json/wp/v2/books?_embed&book_status=94&per_page=100';
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
