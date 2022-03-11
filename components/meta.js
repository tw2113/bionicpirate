import Link from "next/link";

export default function Meta(props) {
	const {author, isbn, pages} = props.meta

	return (
		<div key="">
			Author: {author}<br/>
			Pages: {pages}<br/>
			ISBN13: <Link href={`https://www.indiebound.org/book/${isbn}`}>
				<a target="_blank" rel="noopener noreferrer">{isbn}</a>
			</Link>
		</div>
	)
}
