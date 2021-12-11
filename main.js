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
    }        
    
];

const datafeed = document.querySelector(".data");

let info = dataList.map(function(element) {
    return '<div>' + 'Company: ' + element.name + '<br />' + 'Stock price: ' +  element.stockPrice + '</div>'
})

datafeed.innerHTML = info.join('\n');