function getFirstSelector(selector) {
	return document.querySelector(selector)
}

function nestedTarget() {
	return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy (n){
	let lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
	for (let i = 0, l = lis.length; i < l; i++) {
		lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
	}
	return lis.innerHTML
}
function deepestChild() {
	let divSearch = document.getElementById('grand-node').querySelectorAll('div')[3]
	let foundBoo = []
	return divSearch
}
