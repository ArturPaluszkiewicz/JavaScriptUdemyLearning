const mapujOcene = (ocena) => {
    switch(ocena){
        case 1:
            return "niedostateczny"
        case 2:
            return "dopuszczajacy"
        case 3:
            return "dostaeczny"
        case 4:
            return "dobry"
        case 5:
            return "bardzo dobry"
        case 6:
            return "celujacy"
        default:
            return "blad"
    }
}
const oceny = [1,2,3,4,5,6,7,1015]
oceny.forEach(e => {
    console.log(mapujOcene(e))
})