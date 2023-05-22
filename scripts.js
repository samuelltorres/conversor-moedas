const button = document.getElementById('convert-button')
const select1 = document.getElementById('currency-select1')
const select2 = document.getElementById('currency-select2')


const convertValues = async() => {
    const input = document.getElementById('input-real').value
    const realValueText = document.getElementById('value-received')
    const convertedValueText = document.getElementById('converted-value')


    const data =  await fetch("https://economia.awesomeapi.com.br/last/BRL-USD,BRL-EUR,BRL-GBP,USD-BRL,USD-EUR,USD-GBP,EUR-BRL,EUR-USD,EUR-GBP,GBP-BRL,GBP-USD,GBP-EUR").then( response => response.json())   // API COTAÇÃO TEMPO REAL


    if (select1.value === 'R$ Real Brasileiro') {
        realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }).format(input)        
    }

    if (select1.value === 'US$ Dólar Americano') {
        realValueText.innerHTML = new Intl.NumberFormat('en-US',
        { style: 'currency', currency: 'USD' }).format(input)        
    }

    if (select1.value === '€ Euro') {
        realValueText.innerHTML = new Intl.NumberFormat('de-DE',
        { style: 'currency', currency: 'EUR' }).format(input)        
    }
    if (select1.value === '£ Libra') {
        realValueText.innerHTML = new Intl.NumberFormat('en-GB',
        { style: 'currency', currency: 'GBP' }).format(input) 
    }





    if (select1.value === 'R$ Real Brasileiro' && select2.value === 'R$ Real Brasileiro') {

        convertedValueText.innerHTML = new Intl.NumberFormat('pt-BR',
            { style: 'currency', currency: 'BRL' }).format(input)
    }

    if (select1.value === 'R$ Real Brasileiro' && select2.value === 'US$ Dólar Americano') {

        convertedValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }).format(input * data.BRLUSD.bid)
    }

    if (select1.value === 'R$ Real Brasileiro' && select2.value === '€ Euro') {

        convertedValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }).format(input * data.BRLEUR.bid)
    }

    if (select1.value === 'R$ Real Brasileiro' && select2.value === '£ Libra') {

        convertedValueText.innerHTML = new Intl.NumberFormat('en-GB',
            { style: 'currency', currency: 'GBP' }).format(input * data.BRLGBP.bid)
    }



    if (select1.value === 'US$ Dólar Americano' && select2.value === 'US$ Dólar Americano') {

        convertedValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }).format(input)
    }

    if (select1.value === 'US$ Dólar Americano' && select2.value === 'R$ Real Brasileiro') {

        convertedValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }).format(input * data.USDBRL.bid)
    }

    if (select1.value === 'US$ Dólar Americano' && select2.value === '€ Euro') {

        convertedValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }).format(input * data.USDEUR.bid)
    }

    if (select1.value === 'US$ Dólar Americano' && select2.value === '£ Libra') {

        convertedValueText.innerHTML = new Intl.NumberFormat('en-GB',
            { style: 'currency', currency: 'GBP' }).format(input * data.USDGBP.bid)
    }



    if (select1.value === '€ Euro' && select2.value === 'US$ Dólar Americano') {

        convertedValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }).format(input * data.EURUSD.bid)
    }

    if (select1.value === '€ Euro' && select2.value === 'R$ Real Brasileiro') {

        convertedValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }).format(input * data.EURBRL.bid)
    }

    if (select1.value === '€ Euro' && select2.value === '€ Euro') {

        convertedValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }).format(input)
    }

    if (select1.value === '€ Euro' && select2.value === '£ Libra') {

        convertedValueText.innerHTML = new Intl.NumberFormat('en-GB',
            { style: 'currency', currency: 'GBP' }).format(input * data.EURGBP.bid)
    }



    if (select1.value === '£ Libra' && select2.value === 'US$ Dólar Americano') {

        convertedValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }).format(input * data.GBPUSD.bid)
    }

    if (select1.value === '£ Libra' && select2.value === 'R$ Real Brasileiro') {

        convertedValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }).format(input * data.GBPBRL.bid)
    }

    if (select1.value === '£ Libra' && select2.value === '€ Euro') {

        convertedValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }).format(input * data.GBPEUR.bid)
    }

    if (select1.value === '£ Libra' && select2.value === '£ Libra') {

        convertedValueText.innerHTML = new Intl.NumberFormat('en-GB',
            { style: 'currency', currency: 'GBP' }).format(input)
    }

}



changeCurrency1 = () => {
    const currencyName = document.getElementById('currency-name-received')
    const currencyFlag = document.getElementById('currency-img2')
    const convertedValue = document.getElementById('value-received')

    if (select1.value === 'R$ Real Brasileiro') {
        currencyName.innerHTML = 'Real'
        currencyFlag.src = './assets/BR.png'
        convertedValue.innerHTML = 'R$ 0,00'
    }
    if (select1.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = 'Dolár Americano'
        currencyFlag.src = './assets/EUA.png'
        convertedValue.innerHTML = '$ 0,00'
    }
    if (select1.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyFlag.src = './assets/EUR.png'
        convertedValue.innerHTML = '€ 0,00'
    }
    if (select1.value === '£ Libra'){
        currencyName.innerHTML = 'Libra'
        currencyFlag.src = "./assets/LIB.png"
        convertedValue.innerHTML = '£ 0,00'
    }

    convertValues()
}


changeCurrency2 = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyFlag = document.getElementById('currency-img')
    const convertedValue = document.getElementById('converted-value')

    if (select2.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = 'Dolár Americano'
        currencyFlag.src = './assets/EUA.png'
        convertedValue.innerHTML = '$ 0,00'
    }    
    if (select2.value === 'R$ Real Brasileiro') {
        currencyName.innerHTML = 'Real'
        currencyFlag.src = './assets/BR.png'
        convertedValue.innerHTML = 'R$ 0,00'
    }
    if (select2.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyFlag.src = './assets/EUR.png'
        convertedValue.innerHTML = '€ 0,00'
    }
    if (select2.value === '£ Libra'){
        currencyName.innerHTML = 'Libra'
        currencyFlag.src = "./assets/LIB.png"
        convertedValue.innerHTML = '£ 0,00'
    }

    convertValues()
}



button.addEventListener('click', convertValues)
select2.addEventListener("change", changeCurrency2)
select1.addEventListener("change", changeCurrency1)