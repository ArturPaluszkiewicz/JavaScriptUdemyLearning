const bankomat = {
    adres: "Zielona Góra - Wroclawska 20",
    saldo: 2000,
    wplacHajs: function(x){
        console.log(`Wplata gotowki`)
        this.saldo+=x
    },
    wyplacHajs: function(x){
        console.log(`wyplata gotowki`)
        this.saldo-=x
    },
    toString: function(){
        return `adres: ${this.adres}, saldo: ${this.saldo}`
    }
}

console.log(bankomat.toString())
bankomat.wplacHajs(137)
console.log(bankomat.toString())
bankomat.wyplacHajs(452)
console.log(bankomat.toString())