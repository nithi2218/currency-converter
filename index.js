const selectFromList = document.querySelectorAll("form select");
const getButton = document.querySelector("form button");
const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");


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


function getExchangeRate(){

}