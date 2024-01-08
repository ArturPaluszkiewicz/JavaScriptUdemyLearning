const miesiace = {
    1: "styczen",
    2: "luty",
    3: "marzec",
    4: "kwiecien",
    5: "maj",
    6: "czerwiec",
    7: "lipiec",
    8: "sierpien",
    9: "wrzesien",
    10: "pazdziernik",
    11: "listopad",
    12: "grudzien"
}
const mapujMiesiac = (miesiac) => {
    return miesiace[miesiac] || "nie ma takiego miesiaca"
}
const miesiaceJakoLiczby = [1,2,3,4,5,6,7,8,9,10,11,12,13,44]
miesiaceJakoLiczby.forEach(e => {
    console.log(mapujMiesiac(e))
})


