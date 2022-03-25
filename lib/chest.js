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

export async function fetchBookChestBookGenres( url ) {
	const books = await fetchBookChest(url);

	let genres = [];
	books.map(book => {
		if (undefined !== book.genre && book.genre.length > 0) {
			book.genre.forEach(function (item, index) {
				genres.push(item);
			})
		}
	})

	const genrecounts = {};

	for (const num of genres) {
		genrecounts[num] = genrecounts[num] ? genrecounts[num] + 1 : 1;
	}

	const foundgenres = genres.filter(onlyUnique).join();
	const genrelurl = `https://apiratelifefor.me/wp-json/wp/v2/genre?include=${foundgenres}&per_page=100&orderby=slug`
	const genredata = await fetchBookChest(genrelurl);
	const thegenres = [];
	genredata.map(genre => {
		let hasParent = (genre.parent > 0);
		let parentindex = 0;
		if ( hasParent ) {
			parentindex = genredata.findIndex((genreitem) => {
				return genreitem.id === genre.parent
			})

			thegenres.push(
				{
					id   : genre.id,
					count: genrecounts[genre.id],
					name : (hasParent) ? `${genredata[parentindex].name} > ${genre.name}` : genre.name
				}
			)
		}

	});

	return thegenres.sort(
		(a,b)=> {
			let fa = a.name.toLowerCase(),
				fb = b.name.toLowerCase()
			if ( fa < fb ) {
				return -1;
			}
			if (fa > fb) {
				return 1;
			}
			return 0;
		} );
}

function onlyUnique(value, index, self) {
	return self.indexOf(value) === index;
}

