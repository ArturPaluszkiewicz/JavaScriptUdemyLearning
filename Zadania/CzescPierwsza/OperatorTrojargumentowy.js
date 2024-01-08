const ocenTest = (punkty) => {
    return punkty >= 70 ? "pass" : "fail"
}

const testPoints = [69,70,71,12,0,99]

testPoints.forEach(element => {
    console.log(ocenTest(element))
});

const wiekszaLiczba = (liczba1, liczba2) => {
    return liczba1 === liczba2 ? "obie liczby sa rowne" : liczba1 > liczba2 ? liczba1 : liczba2
}
const liczby = [[20,45], [45,20], [33,33], [100,1], [52,79]]

liczby.forEach(e => {
    console.log(wiekszaLiczba(e[0],e[1]))
})