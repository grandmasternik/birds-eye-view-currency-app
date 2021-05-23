// const settings = {
// "async": true,
//     	"crossDomain": true,
//     	"url": "https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=AUD&to=CAD&amount=1",
//     	"method": "GET",
//     	"headers": {
//         		"x-rapidapi-key": "389c53ce73msh2b33a37c4f8b8e8p1af329jsn4ea928ca4eec",
//         		"x-rapidapi-host": "currency-converter5.p.rapidapi.com"
//         	}
// //         };
        

let request = goBtn;
request.open('GET', 'https://currency-converter5.p.rapidapi.com/389c53ce73msh2b33a37c4f8b8e8p1af329jsn4ea928ca4eec', true)

// curl -H "x-rapidapi-key": "389c53ce73msh2b33a37c4f8b8e8p1af329jsn4ea928ca4eec" https://currency-converter5.p.rapidapi.com/currency/convert?format=json

//         request.onload = function () {
//   Begin accessing JSON data here
//   var data = JSON.parse(this.response)

//   if (request.status >= 200 && request.status < 400) {
//     data.forEach((mo) => {
//       console.log(movie.title)
//     })
//   } else {
//     console.log('error')
//   }
// }

// request.send()

// $.ajax(XMLHttpRequest).done(function (response) {
// 	console.log(response);
// });

// function handleGetData(GET) {

//     GET.preventDefault();
    
//     searchText = $("#searchForm").val();
    
//   $.ajax({
//       url: `https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=${searchText}`,
//     })
//     .then(
//       function (data) {
//         $baseCurrency.text(data["main"]["base_currency"]);
//         $desiredCurrency.text(data["main"]["desired_currency"]);
//         $weather.text(data["weather"][0]["description"]);
    
//       },
//       function (error) {
//         console.log("bad request: ", error);
//       }
//     );
// }
// $("form").on('submit', handleGetData);

