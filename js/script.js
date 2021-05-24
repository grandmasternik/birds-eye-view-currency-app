let $audCadBox = $("#audCadBox");

function getExchangeRate(currency1,currency2) {
        
    $.ajax({
        url: `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${currency1}&to_currency=${currency2}&apikey=S0RUG5FIZMMSMIIO`
    }).then(
        function(returnedData) {

           // alert("Exchange rate function was called!");
            $audCadBox.html(returnedData["Realtime Currency Exchange Rate"]["8. Bid Price"]);

            console.log(returnedData["Realtime Currency Exchange Rate"]);

        }

    )
    
}


// getExchangeRate('AUD', 'CAD');


const interval = setInterval(function() {
   // method to be executed;
    getExchangeRate('AUD', 'CAD');
 }, 1000);

setInterval(interval);









