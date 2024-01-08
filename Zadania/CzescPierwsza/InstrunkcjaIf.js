const kwota = [199, 201, 178, 14, 555, 99, 100, 200]

const obliczRabat = (price) => {
    let rabat = 0
    if(price >= 200){
        rabat = 5;
    }else if(price >= 100){
        rabat = 3
    }
    return rabat
}
const wyswietlSume = (price) => {
    return `Rabat dla zakupow wynoszacych ${price} jest rowny ${obliczRabat(price)}`
}

kwota.forEach(e => console.log(wyswietlSume(e)))