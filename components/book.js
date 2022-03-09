import Link from "next/link";
import Image from "next/image";


export default function Book(props) {
	const {book} = props
	return (
		<div key={book.id} className="flex-auto mb-8 w-12/12 md:w-3/12">
			<Link href={`https://www.indiebound.org/book/${encodeURIComponent(book.pbc_book_isbn[0])}`}>
				<a target="_blank" rel="noopener noreferrer">
					<Image
						src={book._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url}
						alt={book.title.rendered}
						layout="fixed"
						width="225"
						height="300"
					/>
				</a>
			</Link>
			<p>Total pages: {book.pbc_total_pages[0]}</p>
		</div>
	)
}