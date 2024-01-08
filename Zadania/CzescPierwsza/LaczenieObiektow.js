const people = [{
    firstName: "John",
    lastName: "Doe"
},{
    firstName: "Paul",
    lastName: "Walker"
}]
const additionalProperties = {
    age: 30,
    gender: "male"
}

const addingObcjects = (tabOfObj, addProp) => {
    return tabOfObj = tabOfObj.map(e => e = {...e, ...addProp})
}

let t = addingObcjects(people, additionalProperties)

console.table(t)
t.forEach(element => {
    console.log(element)
});