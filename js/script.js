{
    const calculateResult = (amount, currency) => {
        const usdRate = 4.07;
        const eurRate = 4.33;
        const gbpRate = 5.06;
        const chfRate = 4.48;

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