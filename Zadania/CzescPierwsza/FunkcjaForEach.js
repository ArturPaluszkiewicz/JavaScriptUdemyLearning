const tablica = [23,12,5,9,45]
let suma = 0;
let suma2 = 0;
let srednia = 0

const funkja1 = (e) => {
    suma += e
}
const funkja2 = (e,i) => {
    suma2 += e;
    srednia = Math.floor(suma2/(i+1))
    
}

tablica.forEach(funkja1)
tablica.forEach(funkja2)
console.log(suma)
console.log(srednia)