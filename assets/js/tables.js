const table_pick = (event) => {
	const row = event.parentElement.parentElement
	const name = row.children[0].firstChild.textContent
	const trs = [...row.querySelectorAll(".table-content table tr")]
	trs.shift() //remove the header
	const items = trs.map(tr => tr.lastElementChild.textContent)
	console.log(name)
	console.log(items)
}
