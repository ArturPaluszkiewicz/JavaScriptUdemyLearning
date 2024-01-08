function validateUsername(name){
    if(typeof name !== 'string'){
        throw new Error("Name must be a string")
    }
    if(name.length < 4){
        throw new Error("Name must have more letters than 3")
    }
    return true
}

const names = ["Artur", "Adam", "Axe", 45, {imie: "Artur", nazwisko: "Tezartur"}]

for(let name of names){
    try{
        console.log(validateUsername(name))
    }catch(error){
        if(error.message === "Name must be a string"){
            console.log("Co to za dziwne imie")
        }else if(error.message === "Name must have more letters than 3"){
            console.log("to imie jest za krotkie")
        }else{
            console.error(error)
        }
    }
}