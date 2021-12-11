let dataList = [
    {
        name: "Facebook",
        stockPrice: "$330"
    },
    {
        name: "Amazon",
        stockPrice: "$3,206"
    },
    {
        name: "Apple",
        stockPrice: "$125"
    },
    {
        name: "Netflix",
        stockPrice: "$330"
    },
    {
        name: "Alphabet (GOOG)",
        stockPrice: "$2,451"
    },
    {
        name: "Salesforce(CRM)",
        stockPrice: "$237,48"
    },
    {
        name: "CMC Materials (CCMP)",
        stockPrice: "$150"
    },
    {
        name: "Bitcoin",
        stockPrice: "$47,900"
    }        
    
];

//storing the element in a variable
const datafeed = document.querySelector(".data");

//mapping through the list and accessing each key, value pair and returning it in the div
let info = dataList.map(function(element) {
    return '<div>' + 'Company: ' + element.name + '<br />' + 'Stock price: ' +  element.stockPrice + '</div>'
})

//adding content of each key, value pair to the div element
datafeed.innerHTML = info.join('\n');