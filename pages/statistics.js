import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import Statistic from '../components/statistic'
import Link from 'next/link'

import {fetchBookChest, fetchBookChestBookGenres} from "../lib/chest";

export async function getStaticProps() {

	const url = 'https://apiratelifefor.me/wp-json/wp/v2/books?_embed&book_status=94&per_page=100&orderby=pbc_finished_date';
	const genredata = await fetchBookChestBookGenres(url);

	return {
		props: {
			genredata
		}
	}
}

export default function Statistics({genredata}) {

	return (
		<Layout statistics>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section>
				<article className="flex flex-wrap w-full mt-4">
					<h1 className="text-5xl text-center block w-full">Genre statistics!</h1>
					<ul className="block">
					{
						genredata.map(
							(statistic, i) => <Statistic key={i} statistic={statistic} />
						)
					}
					</ul>
				</article>
			</section>
		</Layout>
	)
}

