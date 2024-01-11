let sekundy = 15
let minuty = 10
let godziny = 11
let isStarted = false
let interval = setInterval(()=>{
},1000)


function resetZegara(){
    sekundy = 0
    minuty = 0
    godziny = 0
    ustawCzas()
}

function ustawCzas(){
    let godzinaJakoString = (godziny < 10) ? `0${godziny}` : `${godziny}`
    let minutyJakoString = (minuty < 10) ? `0${minuty}` : `${minuty}`
    let sekundyJakoString = (sekundy < 10) ? `0${sekundy}` : `${sekundy}`
    document.getElementById("timer").textContent =`${godzinaJakoString}:${minutyJakoString}:${sekundyJakoString}`
}

function dodajCzas(x){
    sekundy = sekundy + x
    if(sekundy>59){
        sekundy -= 60
        minuty++
    }
    if(minuty>59){
        minuty -= 60
        godziny++
    }
    if(godziny>23){
        resetZegara()
    }
    ustawCzas()
}
function startStop(){
    if(isStarted){
        clearInterval(interval)
        isStarted = false
    }else{
        interval = setInterval(() => {
            dodajCzas(1)
        }, 1000)
        isStarted = true
    }
}

setTimeout(ustawCzas,1500)
