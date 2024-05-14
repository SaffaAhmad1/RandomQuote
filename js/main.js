var qouteOutput = document.getElementById("quoteText")
var authorOutput = document.getElementById("quoteAuthor")

var quote =[
    {quoteText : "“Be yourself; everyone else is already taken.”", quoteAuthor: "-- Oscar Wilde" },
    {quoteText : "“So many books, so little time.”", quoteAuthor: "--  Frank Zappa" },
    {quoteText : "“A room without books is like a body without a soul.”", quoteAuthor: "-- Marcus Tullius Cicero" },
    {quoteText : "“You only live once, but if you do it right, once is enough.”", quoteAuthor: "-- Mae West" },
    {quoteText : "“If you tell the truth, you don't have to remember anything.”", quoteAuthor: "-- Mark Twain" },
]

var random = 0;

function rondomQoute() {
    var randomQuote;
    do{
        randomQuote = Math.floor(Math.random() * quote.length);
    }
    while(randomQuote === random)
    random = randomQuote
    qouteOutput.innerHTML = quote[random].quoteText;
    authorOutput.innerHTML = quote[random].quoteAuthor;
}