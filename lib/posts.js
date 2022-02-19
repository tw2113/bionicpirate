export async function fetchBookData( url ) {
	const resp = await fetch( url );
	return await resp.json();
}
