let amountElement = document.querySelector(".js-amount");
let rateElement = document.querySelector(".js-rate");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");
let currencyElement = document.querySelector(".js-currency");

    
    let usdRate = 4.39;
    let eurRate = 4.66;
    let gbpRate = 5.30;
    let chfRate = 4.74;
    

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        let amount = +amountElement.value;
        let result;

    const checkedCurrencyElement = document.querySelector(".js-currency:checked");

    switch (checkedCurrencyElement?.value) {
        case 'eur':
            result = amount / eurRate;
            console.log("Wybrano euro");
            break;
        case 'usd':
            result = amount / usdRate;
            console.log("Wybrano dolara");
            break;
        case 'gbp':
            result = amount / gbpRate;
            console.log("Wybrano funta");
            break;
        case 'chf':
            result = amount / chfRate;
            console.log("Wybrano franka");
            break;
    }
    
    resultElement.innerText = `${result.toFixed(2)}`;
    
});


