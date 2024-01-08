// projekt książka telefoniczna:
// utwórz aplikację która będzie przechowywać kontakty w pamięci
// aplikacja ma mieć możliwość dodawania nowych kontaktów, usuwania kontaktów
// wyświetlania wszystkich kontaktów
// wyszukiwania kontaktów po nazwie lub numerze telefonu
// przy dodawanu kontaktu sprawdź czy taki kontakt już istnieje - jeżeli tak to wyświetl odpowiedni komunikat
// sprawdź czy numer telefonu ma poprawny format (dla uproszczenia: ma mieć 9 znaków)
// sprawdź czy nazwa kontaktu ma poprawny format (dla uproszczenia: conajmniej 3 znaki)
// nie modyfikuj pliku index.html
const ksiazka = []
document.getElementById("add-contact").addEventListener("click", dodajKontakt)
document.getElementById("search").addEventListener("change", filtrujKsiazke)
function dodajKontakt(){
    const nazwa = document.getElementById("name").value
    const phoneNumber = document.getElementById("phoneNumber").value
    const regex = /^[0-9]+$/;

    if(nazwa.length < 3){
        alert("Podana nazwa jest za krotka! Minimum 3 znaki.")
        return
    }
    if(!regex.test(phoneNumber) || phoneNumber.length !== 9){
        alert("Numer telefonu musi skladac sie z 9 cyfr!")
        return
    }
    if(ksiazka.find(e => e.nazwa === nazwa))
    {
        alert("Podany uzytkownik juz istnieje!")
        return
    }
    ksiazka.push({nazwa: nazwa, numer: phoneNumber})
    wyswietlKsiazke(ksiazka)
}

function wyswietlKsiazke(ksiazka){
    const lista = document.getElementById("contactsList")
    lista.innerHTML=''
    ksiazka.forEach(e => {
        let kontakt = document.createElement("p")
        kontakt.textContent = `Nazwa: ${e.nazwa} - Number: ${e.numer}`
        kontakt.id = e.nazwa
        let removeButton = document.createElement("button")
        removeButton.addEventListener("click", usunZKsiazki)
        removeButton.textContent = "Remove"
        removeButton.className = "btn btn-secondary"
        kontakt.appendChild(removeButton)
        lista.appendChild(kontakt)
    })
}

function filtrujKsiazke(){
    let szukana = document.getElementById("search").value
    let regex = new RegExp(szukana)
    wyswietlKsiazke(ksiazka.filter(e => {
        return (regex.test(e.nazwa) || regex.test(e.numer))
    }))
}
function usunZKsiazki(event){
    let elementDoUsuniecia = event.target.parentNode.id
    ksiazka.splice(ksiazka.findIndex(e => e.nazwa === elementDoUsuniecia), 1)
    wyswietlKsiazke(ksiazka)
}