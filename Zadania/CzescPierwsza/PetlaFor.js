const funkcjaFilter = (tablica, predykat) => {
    let nowaTablica =[]
    for(let i = 0;i < tablica.length;i++){
        if(predykat(tablica[i])){
            nowaTablica.push(tablica[i])
        }
    }
    return nowaTablica
}

const tablica = [12,44,33,7,9,121,52,99]
const predykat1 = x => x % 11 === 0
const predykat2 = (x) => {
    if(x < 10){
        return true
    }
    return false
}
const predykat3 = x => x === 44

console.log(funkcjaFilter(tablica, predykat1))
console.log(funkcjaFilter(tablica, predykat2))
console.log(funkcjaFilter(tablica, predykat3))