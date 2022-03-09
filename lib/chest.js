export async function fetchBookChest( url ) {
	const resp = await fetch( url );
	return await resp.json();
}

export async function fetchBookChestBookSlugs( url ) {
	const books = await fetchBookChest(url);

	return books.map(book => {
		return {
			params: {
				slug: book.slug
			}
		}
	})
}
