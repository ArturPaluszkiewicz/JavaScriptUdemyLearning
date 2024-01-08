let sumaKlikniec = 0
function klikniecie(){
    sumaKlikniec++
    console.log("zmieniono obiekt dom po raz:" + sumaKlikniec)
    let przycisk = document.getElementById("przycisk1")
    przycisk.textContent = `Click me ${sumaKlikniec}`
    console.log(przycisk)
}