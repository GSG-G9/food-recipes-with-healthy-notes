const createTableData = (obj, parent) => {
	const tr = document.createElement('tr');

	const tdArray = Object.values(obj).map((el) => {
		const td = document.createElement('td');
		td.innerText = `${+el.quantity.toFixed(2)} ${el.unit}`;
		return td;
	});
	tr.append(...tdArray);
	parent.append(tr);
};
