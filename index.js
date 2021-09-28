import {getTotalCost, getPersonTotalCost} from "./sripts/utils.js";
import {getStorageData, setStorageData} from "./sripts/storageApi.js";

// DOM
const bill = document.getElementById('bill')
const tips = document.getElementById('tips')
const persons = document.getElementById('persons')
const total = document.getElementById('total')
const personTotal = document.getElementById('person-total')

render()

// Event Listeners
bill.addEventListener('input', event => onChangeHandler(event, 'billValue'))
persons.addEventListener('input', event => onChangeHandler(event, 'persons'))
tips.addEventListener('input', event => onChangeHandler(event, 'tips'))

// Handlers
function onChangeHandler(event, key){
    const options = getStorageData()
    options[key] = Math.abs(event.target.value)
    update(options)
    setStorageData(options)
    render() 
}

// Render App
function render(){
    const {billValue, tips: tipsValue, persons: personsValue, total: totalValue, personCost} = getStorageData()
    bill.value = billValue
    tips.value = tipsValue
    persons.value = personsValue
    total.innerText = `Total: ${totalValue}$`
    personTotal.innerText = `Per person: ${personCost}$`
}

// Update Options
function update(options){
    options.total = getTotalCost(options.billValue, options.tips)
    options.personCost = getPersonTotalCost(options.total, options.persons)
}