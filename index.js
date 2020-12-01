
const amountInput = document.getElementById("amount-input");
const convertBtn = document.getElementById("convertBtn");
const currencySelect = document.getElementById("currency-select");
const amountOutput = document.getElementById("amount-output")
const loader = document.getElementById("loader");

convertBtn.addEventListener("click", function() {
    const currency = currencySelect.value;
    const amount = amountInput.value;
    let rateExchange;
    
    fetch(`https://api.nbp.pl/api/exchangerates/rates/C/${currency}/today/`).then(response => response.json())
    .then( function(response) {
        loader.style.display = "block";
        rateExchange = response.rates[0].ask;
        let sum = convert(amount, rateExchange);
        setTimeout(function() {
            loader.style.display = "none";
            amountOutput.innerText = `Po przeliczniu na PLN to ${sum.toFixed(2)} zł.`;
        }, 2300)
    }).catch(error => {
        console.log("error: ", error);
    });
});

function convert (amount, rate) {
    let convertedVal = amount * rate;
    return convertedVal
}