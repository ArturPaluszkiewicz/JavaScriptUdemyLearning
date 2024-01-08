const t1 = [5, 10, 15, 90]
const predykaty = [e => e > 0, e => e % 2 === 0]

function all(tablica, predykat){
    let result = true
    let i = 0
    while(tablica[i]){
        if(!predykat(tablica[i])){
            result = false;
        }
        i++
    }
    return result;
}

for(const predykat of predykaty){
    console.log(all(t1,predykat))
}