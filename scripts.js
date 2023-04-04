const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.24
const euro = 5.56
const bitcoin = 131000

const convertValues = async() => {
    const input = document.getElementById('input-real').value
    const realValueText = document.getElementById('value-received')
    const dolarValueText = document.getElementById('converted-value')


    const data =  await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then( response => response.json())   // API COTAÇÃO TEMPO REAL

    const dolar = data.USDBRL.bid
    const euro = data.EURBRL.bid
    const bitcoin = data.BTCBRL.bid


    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }).format(input)


    if (select.value === 'US$ Dólar Americano') {

        dolarValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }).format(input / dolar)
    }

    if (select.value === '€ Euro') {

        dolarValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }).format(input / euro)
    }

    if (select.value === 'Ƀ BitCoin') {
        dolarValueText.innerHTML = new Intl.NumberFormat('de-DE', 
            { style: 'currency', currency: 'BTC', minimumFractionDigits: 2 }).format((input / bitcoin)).replace(/BTC/,'Ƀ'); 
    }
}



changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyFlag = document.getElementById('currency-img')
    const convertedValue = document.getElementById('converted-value')

    if (select.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = 'Dolár Americano'
        currencyFlag.src = './assets/EUA.png'
        convertedValue.innerHTML = '$ 10.000,00'
    }
    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyFlag.src = './assets/EUR.png'
        convertedValue.innerHTML = '€ 10.000,00'
    }
    if (select.value === 'Ƀ BitCoin'){
        currencyName.innerHTML = 'BitCoin'
        currencyFlag.src = "./assets/BTC.png"
        convertedValue.innerHTML = 'Ƀ 1,00'
    }

    convertValues()
}



button.addEventListener('click', convertValues)
select.addEventListener("change", changeCurrency)