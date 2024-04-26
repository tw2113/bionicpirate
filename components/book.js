import Link from "next/link";
import Image from "next/image";
import he from 'he'

export default function Book(props) {
	const {book} = props;
	const [mediumBook] = book._embedded['wp:featuredmedia'];
	const { media_details: { sizes: { medium } } } = mediumBook;
	const categories = book._embedded['wp:term'][2].map( (thebook) => {
		return thebook.name;
	} ).join(', ');

	return (
		<div key={book.id} className="flex flex-auto mb-8 md:mr-8 landscape:mr-0 w-12/12 sm:w-6/12 md:w-3/12 text-center">
			<div className="flex flex-auto flex-col justify-between">
				<div>
					<Link href={`/books/${book.slug}`}>
						<Image
							src={medium.source_url}
							alt={mediumBook.alt_text}
							width={medium.width}
							height={medium.height}
							className="mx-auto"
						/>
					</Link>
					<p className="mb-8">{ he.decode( book.title.rendered ) }</p>
				</div>
				<div>
					<p>Categories:<br/>{categories}</p>
				</div>
			</div>
		</div>
	)
}
