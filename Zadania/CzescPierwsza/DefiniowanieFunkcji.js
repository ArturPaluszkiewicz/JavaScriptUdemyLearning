function zadanie(imie, nazwisko){
    let result = imie +" "+ nazwisko;
    return result;
}
const zadanieZmienna = function zadanie(imie, nazwisko){
    let result = imie +" , "+ nazwisko;
    return result;
}
const strzalka = (imie, nazwisko) => {
    let result = imie +" => "+ nazwisko;
    return result;
}
console.log(zadanie("Artur", "Paluszkiewicz"))
console.log(zadanieZmienna("Paluszkiewicz", "Artur"))
console.log(strzalka("Artur","Paluszkiewicz"))