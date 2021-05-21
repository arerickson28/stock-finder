// Resolve Error Codes: Server Side Calls
// let requestUrl = "https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2020-06-01/2020-06-17?apiKey=kYxMgr9oqrEq239cvWobO1J4q6rbXL6S"

let requestTickers = "https://api.polygon.io/v2/reference/tickers?search=apple&apiKey=kYxMgr9oqrEq239cvWobO1J4q6rbXL6S" ;

//parameters
tickers = "tickers?"

stocks = "?market=stocks" 

search = "?search=microsoft"

function getApi(requestTickers) {

let companyNames = [] ;

$("#tags").autocomplete({
    source: companyNames
})


    fetch(requestTickers)
        .then(function (response) {
            console.log(response.status);
            //  Conditional for the the response.status.
            if (response.status) {
            }
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            let tickerObject = data["tickers"]

            for (let i=0; i < tickerObject.length; i++) {
                companyNames.push(tickerObject[i]["ticker"])
            }

            console.log(companyNames) ;

        });
}

getApi(requestTickers);


{/* <script>
  $( function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );
  </script> */}