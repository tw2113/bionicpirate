export async function fetchBookData() {
	const url = 'https://apiratelifefor.me/wp-json/wp/v2/books?_embed&book_status=94&per_page=100';
	const resp = await fetch( url );
	return await resp.json();
}
