function checkTable(table, predykat){
    for(let e of table){
        if(predykat(e)){
            return true
        }
    }
    return false
}

const tablica = [12,44,33,7,9,121,52,99]
const predykaty = [x => x > 100,
x => x % 17 === 0,
x => x < 0]

for(let p of predykaty){
    console.log(checkTable(tablica,p))
}
