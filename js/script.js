{
    const currencyElement = document.querySelector(".js-currency");
    const rateElement = document.querySelector(".js-rate");

    const getCurrencyRate = (currency) => {
        const rateEuro = 4.69;
        const rateDollar = 4.32;
        const ratePound = 5.33;

        switch (currency) {
            case "euro":
                return rateEuro;

            case "dolar":
                return rateDollar;

            case "funt":
                return ratePound;
        }
    }

    const onChangeCurrency = () => {
        const currency = currencyElement.value;
        const currencyRate = getCurrencyRate(currency);

        rateElement.value = currencyRate;
    }

    const updateOutcomeText = (outcome) => {
        const outcomeElement = document.querySelector(".js-outcome");
        outcomeElement.innerText = outcome.toFixed(2);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");

        const amount = +amountElement.value;
        const rate = rateElement.value;
        const outcome = amount * rate

        updateOutcomeText(outcome);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", (onFormSubmit));
        currencyElement.addEventListener("input", onChangeCurrency);

        updateRate();
    }

    init();

}
