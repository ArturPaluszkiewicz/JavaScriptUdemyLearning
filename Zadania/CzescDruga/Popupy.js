function calculateBmi(){
    const weight = prompt("Podaj wage swojego ciała w kg.")
    const height = prompt("Podaj swoj wzrost w metrach")
    if(weight <= 0 || height <= 0) {
        alert("Poddano zle dane!")
        return
    }
    let result = (weight / (height * height)).toFixed(2)
    alert(`Twoj wspolczynik BMI wynosi ${result}`)
}
