const funkcja = (tab1, tab2, num) => {
    let temp = tab1.concat(tab2)
    temp.sort((a,b) => b - a)
    let wynik = temp.splice(0,num)
    return wynik
}
const tablica1 = [23, 46, 5]
const tablica2 = [11, 3]

console.log(funkcja(tablica1, tablica2, 3))