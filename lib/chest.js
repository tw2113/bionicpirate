export async function fetchBookChest( url ) {
	const resp = await fetch( url );
	return await resp.json();
}

export async function fetchBookChestBookSlugs( url ) {
	const books = await fetchBookChest(url);
	let filteredbooks = books.filter(book => book._embedded['wp:featuredmedia'] !== undefined)

	return filteredbooks.map(book => {
		return {
			params: {
				slug: book.slug
			}
		}
	})
}

export async function getPostData(slug) {
	const url = `https://apiratelifefor.me/wp-json/wp/v2/books?_embed&slug=${encodeURIComponent(slug)}`
	const book = await fetchBookChest(url);

	// Combine the data with the id
	return {
		slug,
		...book
	}
}
