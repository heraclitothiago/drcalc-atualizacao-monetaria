const date = new Date()
const day = date.getDate()
const month = date.getMonth() + 1
const year = date.getFullYear()

const setDay = document.querySelector("body > table > tbody > tr:nth-child(2) > td:nth-child(2) > form > table > tbody > tr:nth-child(5) > td > table > tbody > tr > td:nth-child(3) > div:nth-child(2) > select:nth-child(1)")
setDay.value = day
const setMonth = document.querySelector("body > table > tbody > tr:nth-child(2) > td:nth-child(2) > form > table > tbody > tr:nth-child(5) > td > table > tbody > tr > td:nth-child(3) > div:nth-child(2) > select:nth-child(2)")
setMonth.value = month
const setYear = document.querySelector("body > table > tbody > tr:nth-child(2) > td:nth-child(2) > form > table > tbody > tr:nth-child(5) > td > table > tbody > tr > td:nth-child(3) > div:nth-child(2) > select:nth-child(3)")
setYear.value = year


const setInpc = document.querySelector("body > table > tbody > tr:nth-child(2) > td:nth-child(2) > form > table > tbody > tr:nth-child(7) > td > table > tbody > tr > td > select > option:nth-child(9)");
setInpc.setAttribute("selected", "selected")
const tax = document.querySelector("body > table > tbody > tr:nth-child(2) > td:nth-child(2) > form > table > tbody > tr:nth-child(9) > td > table > tbody > tr:nth-child(1) > td:nth-child(1) > input")
tax.value = "1,00"
const taxSimple = document.querySelector("body > table > tbody > tr:nth-child(2) > td:nth-child(2) > form > table > tbody > tr:nth-child(9) > td > table > tbody > tr:nth-child(1) > td:nth-child(2) > select > option:nth-child(2)")
taxSimple.setAttribute("selected", "selected")

const calParam = document.querySelector("body > table > tbody > tr:nth-child(2) > td:nth-child(2) > form > table > tbody > tr:nth-child(11) > td > table > tbody > tr > td:nth-child(3) > input[type=checkbox]")
calParam.setAttribute("checked", "true")

const calcMemory = document.querySelector("body > table > tbody > tr:nth-child(2) > td:nth-child(2) > form > table > tbody > tr:nth-child(13) > td > table > tbody > tr > td > div > input[type=checkbox]:nth-child(4)")
calcMemory.setAttribute("checked", "true")
