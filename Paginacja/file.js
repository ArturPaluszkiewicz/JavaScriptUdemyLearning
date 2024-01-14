window.onload = () => {
    let iloscElementow = 10
    let strona = 1
    let wyszukiwanie = ""

    wyswietlTabele()

    async function wyswietlTabele(){
        const tabela = document.getElementById("tabelka")
        tabela.innerHTML = ''
        let respone = await fetch(`https://users-api-jk.azurewebsites.net/api/users/paged?page=${strona}&pageSize=${iloscElementow}`)
        let data = await respone.json()
        let nowyHTML = ``
        for(let i of data.items){
            nowyHTML += `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.email}</td><td>${i.address.street}</td><td>${i.address.city}</td><td>${i.address.zipCode}</td></tr>`
        }
        tabela.innerHTML = `${nowyHTML}`
    } 
    
    function ustawIloscElementow(value){
        iloscElementow = value
        wyswietlTabele()
    }
    function ustawStrone(){
        wyswietlTabele()
    }
    function ustawWyszukiwanie(){
        wyswietlTabele()
    }
    let wielkoscStrony = document.getElementById("pageSizeSelect")
    wielkoscStrony.addEventListener("change", (event) => {
        ustawIloscElementow(wielkoscStrony.options[wielkoscStrony.options.selectedIndex].value)
    })
    
}