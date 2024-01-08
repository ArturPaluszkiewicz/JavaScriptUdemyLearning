const zadanie = (imieiINazwisko) => {
    let tablica = imieiINazwisko.split(" ")
    let inicjal1 = tablica[0].substring(0,1)
    let inicjal2 = tablica[1].slice(0,1)
    let wynik = inicjal1 + "." + inicjal2 + ".";
    return wynik
}

console.log(zadanie("Artur Paluszkiewicz"));