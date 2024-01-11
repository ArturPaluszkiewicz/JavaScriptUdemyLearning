// Utwórz prostą aplikację umożliwiającą użytkownikowi wygodne przeszukiwanie treści i śledzenie historii jego ostatnich wyszukiwań.
// Funkcje Aplikacji:
// 	• Wyszukiwanie:
// 		○ Użytkownik może wprowadzić wyszukiwanie w dostępnym polu tekstowym.
// 		○ Po naciśnięciu przycisku "Szukaj", wprowadzone wyszukiwanie jest zapisywane.
// 	• Historia Wyszukiwań:
// 		○ Aplikacja przechowuje historię ostatnich wyszukiwań, nawet po ponownym otwarciu przeglądarki.
// 		○ Historia jest wyświetlana poniżej formularza, aby użytkownik mógł łatwo przejrzeć poprzednie wyszukiwania.
// 	• Czyszczenie Historii:
// Dla wygody użytkownika, istnieje przycisk "Wyczyść historię", który usuwa całą historię wyszukiwań.

let szukane = []
if(localStorage.getItem("historia")){
    szukane = JSON.parse(localStorage.getItem("historia"))
}
wyswietlHistorie()

function search(){
    let szukana = document.getElementById("searchInput").value
    if(szukana){
        szukane.unshift(szukana)
    }
    localStorage.setItem("historia",JSON.stringify(szukane))
    wyswietlHistorie()
    document.getElementById("searchInput").value = ''
}

function clearHistory(){
    localStorage.removeItem("historia")
    szukane = []
    wyswietlHistorie()
}

function wyswietlHistorie(){
    let lista = document.getElementById("recentSearches")
    lista.innerHTML = ''
    for(let e of szukane){
        let nowyElement = document.createElement("div")
        nowyElement.textContent = e
        lista.appendChild(nowyElement)
    }
}