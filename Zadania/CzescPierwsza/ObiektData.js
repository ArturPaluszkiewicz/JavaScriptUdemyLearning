const funkcja = (urodziny) => {
    let birthDate = new Date(urodziny)
    let todayDate = new Date()
    return (todayDate.getTime() - birthDate.getTime()) > 18*365*24*60*60*1000
}

const birthDay = "1996-7-2"
const birthDay2 = "2005-12-27"
console.log(funkcja(birthDay2))