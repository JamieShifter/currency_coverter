const pln_seed = { pln: 1, eur: 0.22, usd: 0.24, gbp: 0.18, czk: 5.45, rub: 18, jpy: 27.59, btc: 0.00000515 };
let fromAmount = document.querySelector(".js-fromAmount");
let toAmount = document.querySelector(".js-toAmount");
let fromCurrency = document.querySelector(".js-fromCurrency");
let toCurrency = document.querySelector(".js-toCurrency");
let formElement = document.querySelector(".js-form");

formElement.addEventListener("input", () => {
    calculate();

})

function calculate() {
    let inputCurrency = fromCurrency.value;
    let outputCurrency = toCurrency.value;

    //Following formula was constructed to avoid setting up separate ratio objects for every currency - legit

    toAmount.value = (outputCurrency === "btc") ? (fromAmount.value * (pln_seed[outputCurrency] / pln_seed[inputCurrency])) : (fromAmount.value * (pln_seed[outputCurrency] / pln_seed[inputCurrency])).toFixed(2);
}

function reverse() {
    let reversedFromCurrency = toCurrency.value;
    toCurrency.value = fromCurrency.value;
    fromCurrency.value = reversedFromCurrency;
    calculate();
}