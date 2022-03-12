import Link from "next/link";

export default function Meta(props) {
	const {author, isbn, pages, start, finished} = props.meta

	return (
		<div key="{isbn}">
			Author: {author}<br/>
			Pages: {pages}<br/>
			Reading duration: {start} to {finished}<br/>
			ISBN13: <Link href={`https://www.indiebound.org/book/${isbn}`}>
				<a target="_blank" rel="noopener noreferrer">{isbn}</a>
			</Link>
		</div>
	)
}
