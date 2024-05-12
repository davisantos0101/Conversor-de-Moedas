const convertButton = document.querySelector(".convert-button")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency")
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueCoverted = document.querySelector(".currency-value")


    const dolarToday = 5.09 

    const ConvertedValue = inputCurrencyValue / dolarToday

    currencyValueToConvert.innerHTML = inputCurrencyValue
    
}

convertButton.addEventListener("click, convertValues")

