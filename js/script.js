{
    const currencyElement = document.querySelector(".js-currency");
    const rateElement = document.querySelector(".js-rate");

const rateCalculator = () => {
    const euroCurrency = 4.69;
    const dollarCurrency = 4.32;
    const poundCurrency = 5.33;

    currencyElement.addEventListener("input", (event) => {
        const currency = currencyElement.value;
         
            switch(currency) {
                case "euro":
                    return rateElement.value = euroCurrency;
            
                case "dolar":
                    return rateElement.value = dollarCurrency;
            
                case "funt":
                    return rateElement.value = poundCurrency;
            }
        });
}

rateCalculator();

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
    
    formElement.addEventListener("submit", (onFormSubmit)
    );
}

init();

}
