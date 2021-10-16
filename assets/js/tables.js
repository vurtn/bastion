const table_pick = (event) => {
	const row = event.parentElement.parentElement
	const name = row.children[0].firstChild.textContent
	const trs = [...row.querySelectorAll(".table-content table tr")]
	trs.shift() //remove the header
	const items = trs.map(tr => tr.lastElementChild.textContent);
	row.cells[2].textContent = items[Math.floor(Math.random() * (items.length - 1 + 1))]
}
