const tablica = [23, 12, 5, 9, 45]
console.log(`tablica przed zamiana: ${tablica}`)
let x = 2
let y = 4

const funkcja = (tablica, x, y) => {
    let tempX = tablica[x]
    let tempY = tablica[y]
    tablica.splice(x,1)
    tablica.splice(y-1,1)

    tablica.splice(x,0,tempY)
    tablica.splice(y,0,tempX)
    return tablica
}
console.log("tablica po zamianie")
console.log(funkcja(tablica,x,y))