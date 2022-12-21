let $ = 11200;
function convertor(amount, currancy) {
    if (currancy === 'USD') {
        return ($ * amount).toFixed(2) + ' UZS'
    }else{
        return (amount / $).toFixed(2) + ' USD'
    }

}
console.log(convertor(200, 'USD'),convertor(12000000, 'UZS'));
