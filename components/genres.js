import Link from "next/link";

export default function Genres(props) {
	const {genres} = props

	return (
		<div key={genres[0].name}>Genre:&nbsp;
			{
				genres.map((genre, i) => [ i > 0 && ", ",
					<Link href={genre.link}><a>{genre.name}</a></Link>
				])
			}
		</div>
	)
}