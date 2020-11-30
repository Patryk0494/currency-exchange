// axios.get('http://api.nbp.pl/api/exchangerates/rates/C/CHF/today/').then(response => {
//     console.log("response: ", response);
// });

// fetch("http://api.nbp.pl/api/exchangerates/rates/C/CHF/today/").then(response => response.json())
// .then( function(response) {
//     console.log("response: ", response);
//     console.log((response.rates[0].ask));
// }).catch(error => {
//     console.log("error: ", error);
// });

const amountInput = document.getElementById("amount-input");
const convertBtn = document.getElementById("convertBtn");
const currencySelect = document.getElementById("currency-select");
const amountOutput = document.getElementById("amount-output")

convertBtn.addEventListener("click", function() {
    const currency = currencySelect.value;
    const amount = amountInput.value;
    let rateExchange;
    
    fetch(`http://api.nbp.pl/api/exchangerates/rates/C/${currency}/today/`).then(response => response.json())
    .then( function(response) {
        rateExchange = response.rates[0].ask;
        let sum = convert(amount, rateExchange);
        amountOutput.innerText = `Po przeliczniu na PLN to ${sum.toFixed(2)} zł.`;
        // console.log(sum.toFixed(2));
    }).catch(error => {
        console.log("error: ", error);
    });
});

function convert (amount, rate) {
    let convertedVal = amount * rate;
    return convertedVal
}