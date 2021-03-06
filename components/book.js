import Link from "next/link";
import Image from "next/image";
import he from 'he'

export default function Book(props) {
	const {book} = props
	return (
		<div key={book.id} className="flex-auto mb-8 md:mr-8 landscape:mr-0 w-12/12 sm:w-6/12 md:w-3/12 text-center">
			<Link href={`/books/${book.slug}`}>
				<a>
					<Image
						src={book._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url}
						alt={book._embedded['wp:featuredmedia'][0].alt_text}
						layout="fixed"
						width="225"
						height="300"
					/>
				</a>
			</Link>
			<p>{ he.decode( book.title.rendered ) }</p>
		</div>
	)
}
