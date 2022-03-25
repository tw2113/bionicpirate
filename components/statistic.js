export default function Statistic(props) {
	const {name, count, id} = props.statistic

	return (
		<li key="{id}">
			{name}: {count}
		</li>
	)
}
