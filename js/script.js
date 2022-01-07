{
    const plnSeed = { pln: 1, eur: 0.22, usd: 0.24, gbp: 0.18, czk: 5.45, rub: 18, jpy: 27.59, btc: 0.00000515 };
    let inputCurrency = document.querySelector(".js-fromCurrency");
    let outputCurrency = document.querySelector(".js-toCurrency");
    let fromAmount = document.querySelector(".js-fromAmount");
    let toAmount = document.querySelector(".js-resultAmount");

    function reverse() {
        let reversedFromCurrency = outputCurrency.value;
        outputCurrency.value = inputCurrency.value;
        inputCurrency.value = reversedFromCurrency;
        calculate(inputCurrency, outputCurrency, fromAmount, toAmount, plnSeed);
    }

    const liveFeedback = (inputCurrency, outputCurrency, fromAmount, toAmount, seed) => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("input", () => {
            calculate(inputCurrency, outputCurrency, fromAmount, toAmount, seed);
        })
    }

    const calculate = (inputCurrency, outputCurrency, fromAmount, toAmount, seed) => {
        resultAmount = (outputCurrency.value === "btc") ? (fromAmount.value * (seed[outputCurrency.value] / seed[inputCurrency.value])) : (fromAmount.value * (seed[outputCurrency.value] / seed[inputCurrency.value])).toFixed(2);
        toAmount.innerText = resultAmount + " " + outputCurrency.value.toUpperCase();
    }

    const init = () => {
        console.log("Hello fellow developers!")
        liveFeedback(inputCurrency, outputCurrency, fromAmount, toAmount, plnSeed);
    }

    init()
}