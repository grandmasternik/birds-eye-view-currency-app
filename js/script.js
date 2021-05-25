// Finnhub.io API key: c2m38iaad3idnodd6et0

let $dropdownBox = $("#dropdownBox");
let $returnedData = $("#returnedData");

let fromCurrencySymbol = $("#fromCurrencyMenu option:selected").val();
let toCurrencySymbol = $("#toCurrencyMenu option:selected").val();

let countdownBar = $("#countdownBar");

function getExchangeRate() {

    fromCurrencySymbol = $("#fromCurrencyMenu option:selected").val();
    toCurrencySymbol = $("#toCurrencyMenu option:selected").val();

    $.ajax({
        url: `https://finnhub.io/api/v1/forex/rates?base=${fromCurrencySymbol}&token=c2m38iaad3idnodd6et0`
    }).then(
        function (returnedData) {

            $("#askPriceBox").html(returnedData['quote'][toCurrencySymbol]);

        }
    )
}



const interval = setInterval(function () {

    getExchangeRate();
    
countdownBar.width(400);

countdownBar.animate({
    width: "0px",
    height: "1px",
}, 4800);


}, 5000);

setInterval(interval);

// update displayed heading currency pairs
$("select").change(function () {
    $("#renderFromCurrency").html($("#fromCurrencyMenu option:selected").val());
    $("#renderToCurrency").html($("#toCurrencyMenu option:selected").val());
    getExchangeRate();

});