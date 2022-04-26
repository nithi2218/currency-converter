const selectFromList = document.querySelectorAll("select");
const getButton = document.querySelector("button");
const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");
const amount = document.querySelector("input");
const exchangeRateTxt = document.querySelector(".exchange-rate");


for (let i = 0; i < selectFromList.length; i++) {
    for(let currencyCode in countryList){
        let selected;
        if(i == 0) {
         selected = currencyCode == "AUD" ? "selected" : "";
        }
        else if (i == 1) {
          selected = currencyCode == "INR" ? "selected" : "";
        }
 
        let optionTag = `<option value="${currencyCode}" ${selected}>${currencyCode}</option>`;
        selectFromList[i].insertAdjacentHTML("afterbegin", optionTag);
    }
}

window.addEventListener("load", ()=>{
    getExchangeRate();
});

getButton.addEventListener("click", e =>{
    e.preventDefault();
    getExchangeRate();
});

const exchangeIcon = document.querySelector(".icon");
exchangeIcon.addEventListener("click", ()=>{
    let tempCode = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempCode;
    getExchangeRate();
})


function getExchangeRate() {
       
    let amountVal = amount.value;
    if(amountVal == "" || amountVal == "0"){
        amount.value = "1";
        amountVal = 1;
    }
    exchangeRateTxt.innerText = "Getting...";
    let url = `https://v6.exchangerate-api.com/v6/8ab27104b2e165a428af6d21/latest/${fromCurrency.value}`;
    fetch(url)
    .then(response => response.json())
    .then(response =>{
        let exchangeRate = response.conversion_rates[toCurrency.value];
        let totalExRate = (amountVal * exchangeRate);
        exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExRate} ${toCurrency.value}`;
    });
}

