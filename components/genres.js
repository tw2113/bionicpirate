import Link from "next/link";

export default function Genres(props) {
	const {genres} = props

	return (
		<div>Genre:&nbsp;
			{
				genres.map((genre, i) => [ i > 0 && ", ",
					<Link href={genre.link}><a key={i}>{genre.name}</a></Link>
				])
			}
		</div>
	)
}
