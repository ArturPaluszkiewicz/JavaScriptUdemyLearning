const funkcja = (urodziny) => {
    let birthDate = new Date(urodziny)
    let todayDate = new Date()
    return Math.floor((todayDate.getTime() - birthDate.getTime())/86400000)
}
const dayOfBirth = "2023-12-11"
console.log(funkcja(dayOfBirth))
