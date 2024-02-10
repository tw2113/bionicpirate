import Link from "next/link";
import Date from "./date";

export default function Meta(props) {
	const {author, isbn, pages, start, finished} = props.meta

	return (
		<div key="{isbn}">
			Author: {author}<br/>
			Pages: {pages}<br/>
			Reading duration: <Date dateString={start} /> to <Date dateString={finished} /><br/>
			ISBN13: <Link target="_blank" rel="noopener noreferrer" href={`https://www.indiebound.org/book/${isbn}`}>
				{isbn}
			</Link>
		</div>
	)
}
