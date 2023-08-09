const key = "22731b796fa3a9a880511a31245cd07f"

function colocarDadosNaTela(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name 
    document.querySelector(".temp").innerHTML = dados.main.temp
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())

    colocarDadosNaTela(dados)
}

function cliqueiNoBotao(){
    const cidade = document.querySelector(".input-cidade").value 

    buscarCidade(cidade)
}