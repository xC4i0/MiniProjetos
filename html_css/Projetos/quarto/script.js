const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-value").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")// valor em Real
    const currencyValueConvert = document.querySelector(".currency-value")// Outras Moedas

    console.log(currencySelect.value)

    const dolarToday = 4.92
    const euroToday = 5.26
    const libraToday = 6.05
    const bitcoinToday = 129.975

 
    if (currencySelect.value == "dolar") { 
        // Se o select estiver selecionado o valor de dolar, entra aqui.
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro") {
        // Se o select estiver selecionado o valor de euro, entra aqui.
        currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue / euroToday)
    }

    if(currencySelect.value == "libra") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-GB", { style: "currency",currency: "GBP"}).format(inputCurrencyValue / libraToday)
    }

    if(currencySelect.value == "bitcoin") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", { srtle: "currency", currency: "BRL"}).format(inputCurrencyValue / bitcoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue)
 
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/estados-unidos.png"
    }

    if(currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if(currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
    }

    if(currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("Click", convertValues)