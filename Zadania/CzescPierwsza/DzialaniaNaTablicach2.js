const tablica = [23, 12, 5, 9, 45]
console.log(`tablica przed zamiana: ${tablica}`)
let x = 20

const funkcja = (tablica, valueToCheck) => {
    let tempTablica = tablica.filter(x => x > valueToCheck)
    return tempTablica.length
}

console.log(`w tej tablicy bylo ${funkcja(tablica,x)} wystapien liczby ${x}`)