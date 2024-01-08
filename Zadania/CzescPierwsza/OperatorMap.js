const tablica = [0, 15, 30, 45, 60]
console.log(`tablica po potegowaniu: ${squareNumbers(tablica)}`)



let tablica2 = tablica.map(e => e * 9 / 5 + 32)
let funkcja = (tablica) => {
    let nowaTablica = []
    tablica.forEach(e => nowaTablica.push(e * 9 / 5 + 32))
    return nowaTablica
}
let tablica3 = funkcja(tablica)
console.log(`temperatura w stopniach celciusza ${tablica}`)
console.log(`temperatura w stopniach farehait ${tablica2}`)
console.log(`temperatura w stopniach farehait ${tablica3}`)
