import moment from 'moment';

export default function useUtils() {
	// converting first letter to uppercase

	const capitalize = (str) => {
		const capitalized = str.replace(/^./, str[0].toUpperCase());

		return capitalized;
	};

	const numberFormat = (value) => {
		return Number(parseFloat(value).toFixed(2)).toLocaleString('en', {
			minimumFractionDigits: 2,
		});
	};

	const currencyFormat = (value) => {
		return Number(parseFloat(value).toFixed(2)).toLocaleString('en', {
			minimumFractionDigits: 2,
		});
	};

	const convertToRelativeTime = (value) => {
		const date = new Date(value);
		return moment(date, 'YYYYMMDD').fromNow();
	};

	const sort = (arrayObjects, propertyName) => {
		arrayObjects.sort(function compare(a, b) {
			if (a[propertyName] < b[propertyName]) {
				return -1;
			}
			if (a[propertyName] > b[propertyName]) {
				return 1;
			}
			return 0;
		});

		return arrayObjects;
	};

	const sortedBy = ({ arrayObjects, propertyName, order }) => {
		arrayObjects.sort(function compare(a, b) {
			if (a[propertyName] < b[propertyName]) {
				return -1;
			}
			if (a[propertyName] > b[propertyName]) {
				return 1;
			}
			return 0;
		});

		if (order === 'DESC') {
			arrayObjects.reverse();
		}

		return arrayObjects;
	};

	const getMinMax = ({ arrayObjects, propertyName }) => {
		var lowest = Number.POSITIVE_INFINITY;
		var highest = Number.NEGATIVE_INFINITY;
		var tmp;
		for (var i = arrayObjects.length - 1; i >= 0; i--) {
			tmp = arrayObjects[i][propertyName];
			if (tmp < lowest) lowest = tmp;
			if (tmp > highest) highest = tmp;
		}
		return {
			lowest,
			highest,
		};
	};

	return {
		capitalize,
		numberFormat,
		sort,
		convertToRelativeTime,
		currencyFormat,
		sortedBy,
		getMinMax,
	};
}
