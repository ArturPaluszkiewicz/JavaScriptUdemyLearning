function obliczSume(){
    let liczba1 = parseInt(document.getElementById("input1").value)
    let liczba2 = parseInt(document.getElementById("input2").value)
    if(isNaN(liczba1) || isNaN(liczba2)){
        alert("poddano niewlasciwe liczby")
    }
    else{
        alert(`Twoj wynik to: ${liczba1+liczba2}`)
    }
}