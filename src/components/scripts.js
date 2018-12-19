const selectAll = query =>
	Array.of(...document.querySelectorAll(query))

const select = query =>
	document.querySelector(query)

const selectText = function () {
    const selection = window.getSelection()
    const range = document.createRange()

    range.selectNodeContents(this)
    selection.removeAllRanges()
    selection.addRange(range)
}

const updateReferences = function () {
	const val = this.innerHTML

	selectAll('.reference').forEach(reference => {
		reference.innerHTML = val
	})

	document.title = val
}

const updatePrice = () => {
	const getVal = v => {
		const p = parseFloat(v.replace(',', '.'))
		return (p > 0) ? p : 0
	}

	const hours = selectAll('.hours')
	const price = selectAll('.price')

	showPrice(
		selectAll('.total').reduce((acc, e, i) => {
			const t = getVal(hours[i].innerHTML)
					* getVal(price[i].innerHTML)

			e.innerHTML = t.toFixed(2)

			return acc + t
		}, 0)
	)
}

const showPrice = (ex, btw = 0.21) => {
	select('#sSub').innerHTML = ex.toFixed(2)
	select('#sBtw').innerHTML = (ex * btw).toFixed(2)
	select('#sTotal').innerHTML = (ex * (1 + btw)).toFixed(2)
}

const load = () => {
	const date = new Date()

	selectAll('.date').forEach(el => {
		el.innerHTML = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
	})

	selectAll('.reference').forEach(reference => {
		reference.addEventListener('input', updateReferences)
	})

	selectAll('.hours, .price').forEach(el => {
		el.addEventListener('input', updatePrice)
	})

	selectAll('[contenteditable]').forEach(el => {
		el.addEventListener('focus', selectText)
	})
}

window.addEventListener('load', load)
