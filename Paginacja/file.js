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
        wyswietlIloscStron(data.totalItems)
    } 
    function wyswietlIloscStron(iloscWszystkichElementow){
        let iloscStron = Math.ceil(iloscWszystkichElementow/iloscElementow)
        let iloscStronElement = document.getElementById("pagination")
        iloscStronElement.innerHTML = ''
        for(let i = 1;i<=iloscStron;i++){
            let nowyElementLi = document.createElement("li")
            nowyElementLi.addEventListener("click", (event) => {
                ustawStrone(event.target.textContent)
            })
            if(i == strona){
                nowyElementLi.innerHTML = `<li class="page-item"><a class="page-link active" href="#">${i}</a></li>`
            }else{
                nowyElementLi.innerHTML = `<li class="page-item"><a class="page-link" href="#">${i}</a></li>`
            }
            iloscStronElement.appendChild(nowyElementLi)
        }
    }
    
    function ustawIloscElementow(value){
        iloscElementow = value
        strona = 1
        wyswietlTabele()
    }
    function ustawStrone(value){
        strona = value
        wyswietlTabele()
    }
    function ustawWyszukiwanie(){
        wyswietlTabele()
    }
    let wielkoscStrony = document.getElementById("pageSizeSelect")
    wielkoscStrony.addEventListener("change", (event) => {
        ustawIloscElementow(wielkoscStrony.options[wielkoscStrony.options.selectedIndex].value)
    })
    let stronicowanie = document.getElementById("pagination")
    let wzorzec = /\bactive\b/
    for(let e of stronicowanie.children){
        if(wzorzec.test(e.innerHTML)){
            console.log(e.children[0].textContent)
        }
    }
    console.log(stronicowanie.children)
    
}