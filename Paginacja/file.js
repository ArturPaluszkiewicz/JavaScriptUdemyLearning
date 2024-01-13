window.onload = () => {
    let iloscElementow = 10
    let strona = 1
    let wyszukiwanie = ""

    wyswietlTabele()

    async function wyswietlTabele(){
        const tabela = document.getElementById("tabelka")
        tabela.innerHTML = ''
        console.log(tabela)
        let respone = await fetch(`https://users-api-jk.azurewebsites.net/api/users/paged?page=${strona}&pageSize=${iloscElementow}`)
        let data = await respone.json()
        console.log(data)
        let nowyHTML = ``
        for(let i of data.items){
            console.log(i)
            nowyHTML += `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.email}</td><td>${i.address.street}</td><td>${i.address.city}</td><td>${i.address.zipCode}</td></tr>`
        }
        tabela.innerHTML = `${nowyHTML}`
    } 
    
    function ustawIloscElementow(){
        wyswietlTabele()
    }
    function ustawStrone(){
        wyswietlTabele()
    }
    function ustawWyszukiwanie(){
        wyswietlTabele()
    }
}