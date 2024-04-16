/*
const amountElement = document.querySelector(".js-amount");
const rateElement = document.querySelector(".js-rate");
const formElement = document.querySelector(".js-form");
const resultElement = document.querySelector(".js-result");
const currencyElement = document.querySelector(".js-currency");
console.log("Już w repozytorium GIT");
    
    const usdRate = 4.39;
    const eurRate = 4.66;
    const gbpRate = 5.30;
    const chfRate = 4.74;
    

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const amount = +amountElement.value;
        let result;

    const checkedCurrencyElement = document.querySelector(".js-currency:checked");

    switch (checkedCurrencyElement?.value) {
        case 'eur':
            result = amount / eurRate;
            
            break;
        case 'usd':
            result = amount / usdRate;
            
            break;
        case 'gbp':
            result = amount / gbpRate;
            
            break;
        case 'chf':
            result = amount / chfRate;
            
            break;
    }
    
    resultElement.innerText = `${result.toFixed(2)}`;
    
});

*/
{


    console.log("Już w repozytorium GIT");

    const calculateResult = (amount, currency) => {
        const usdRate = 4.07;
        const eurRate = 4.32;
        const gbpRate = 5.06;
        const chfRate = 4.46;

        switch (currency) {
            case 'eur':
                return amount / eurRate;
            case 'usd':
                return amount / usdRate;
            case 'gbp':
                return amount / gbpRate;
            case 'chf':
                return amount / chfRate;
        }
    };

    const updateResultText = (result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${result.toFixed(2)}`;
    };


    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const checkedCurrencyElement = document.querySelector(".js-currency:checked");
        

        const amount = +amountElement.value;
        const currency = checkedCurrencyElement?.value;

        let result = calculateResult(amount, currency);

        updateResultText(result);

    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);

    };

    init();
}