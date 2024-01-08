const students = {
    "Adam": [23, 55, 53],
    "John": [53, 59, 73],
    "Pete": [3, 5, 2],
    "Tomasz": [64, 75, 56]
}
function checkStudents(students){
    let goodStudents = []
    for(const s in students){
        let isGood = false
        students[s].forEach(e => {
            if(e > 71){
                isGood = true
                return
            }
        });
        if(isGood){
            goodStudents.push(s)
        }
    }
    return goodStudents
}
console.log(`Lista dobrych uczniow: ${checkStudents(students)}`)
console.log(checkStudents(students))