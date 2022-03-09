import Layout from '../../components/layout'
import {fetchBookChestBookSlugs} from "../../lib/chest";

export default function Book({book}) {
	console.log(book)
	return <Layout>

	</Layout>
}

export async function getStaticPaths() {
	const url = 'https://apiratelifefor.me/wp-json/wp/v2/books?_embed&book_status=94&per_page=3&orderby=rand';
	const paths = await fetchBookChestBookSlugs(url);

	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({params}) {

	return {
		props: {
			book
		}
	}
}
