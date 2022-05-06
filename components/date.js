import {parseISO, format} from 'date-fns'

export default function BookDate({dateString}) {
	const thedate =	Math.floor(dateString * 1000);
	return <time dateTime={dateString}>{format(thedate, 'LLL d, yyyy')}</time>
}
