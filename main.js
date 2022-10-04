const result = document.querySelector('[data-id = "result"]')
// operations
const operations = document.querySelectorAll('[data-id = "operation"]')
// numbers
const numbers = document.querySelectorAll(`[data-id = "num"]`)
// delete 
const cancel = document.querySelector(`[data-id = "cancel"]`)
const backspace = document.querySelector(`[data-id = "backspace"]`)

let newNum = ''
let memory = ''
let operator = ''

const cancelF = () => {
	newNum = ''
	memory = ''
	operator = ''
	result.innerText = '0'
}

const backspaceF = () => {
	newNum = newNum.slice(0, -1)
	result.innerText = (newNum.length === 0 ? '0' : newNum)
}


const operation = e => {
	// zapisuje operator jak jeszce nie mam
	if (operator === '') {
		operator = e.currentTarget.dataset.value
		memory = parseFloat(newNum)
		newNum = ''
		return
	}
	// uzytkownik zmienia zdanie i klika inny operator
	if (operator !=='' && newNum ==='') {
		operator = e.currentTarget.dataset.value
		return
	}

	// wykonuje działanie
	switch (operator) {
		case 'plus':
			memory = memory + parseFloat(newNum)
			break
		case 'minus':
			memory = memory - parseFloat(newNum)
			break
		case 'times':
			memory = memory * parseFloat(newNum)
			break
		case 'divide':
			memory = memory / parseFloat(newNum)
			break
		case 'equals':
			memory = parseFloat(newNum)
			break
	}

	result.innerText = memory.toString()
	operator = e.currentTarget.dataset.value
	newNum = ''
}

const inputNum = e => {
	if (e.target.dataset.value === "." && newNum.includes(".")) return
	if (e.target.dataset.value === "." && newNum.length === 0 ) newNum += '0'	
	newNum += e.target.dataset.value
	result.innerText = newNum
}

numbers.forEach(el => el.addEventListener('click', inputNum))
operations.forEach(el => el.addEventListener('click', operation))
cancel.addEventListener('click', cancelF)
backspace.addEventListener('click', backspaceF)

