// Write your solution in this file!

var customerName = 'bob'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}


function setBestCustomer() {
    bestCustomer = 'not bob'; 
    console.log(bestCustomer)
}
console.log(bestCustomer)
setBestCustomer(); 
// console.log(bestCustomer)

function overwriteBestCustomer(newBestCustomer) {
    newBestCustomer = 'maybe bob';
    bestCustomer = newBestCustomer;
}

const leastFavoriteCustomer = 'mr bob'

function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer = 'mr bob'
    leastFavoriteCustomer = 'jane'
}

changeLeastFavoriteCustomer()

