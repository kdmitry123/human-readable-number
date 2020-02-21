const numbers = ['','one','two','three','four','five','six','seven','eight','nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable (number) {
    if(number === 0) return 'zero';
    if(number < 100) return towDigital(number);
    if(number < 1000) return numbers[Math.floor(number % 1000 / 100)] + ' hundred'+ ((number % 100) ? ' ' + towDigital(number % 100):'');
}

function towDigital(num) {
    if(num < 20) return numbers[num];
    if(num < 100) return (tens[Math.floor(num / 10)] +' '+ numbers[(num%10)]).split(' ').filter(n => n).join(' ');
}
