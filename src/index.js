module.exports = function toReadable (number) {
  const arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
   'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const arr2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const hundred = 'hundred';
 if (number < 20) {
    return arr1[number];
 }
 if (number < 100) {
    if (number % 10 === 0) {
        return arr2[number / 10 - 2];
    }
    else {
        return `${arr2[Number(String(number)[0]) - 2]} ${arr1[Number(String(number)[1])]}`;
    }
 }
 else {
    if (number % 100 === 0) {
        return `${arr1[number / 100]} ${hundred}`;
    }
    else {
        const num = Number(String(number).slice(1))
        if (num < 20) {
            return `${arr1[Number(String(number)[0])]} ${hundred} ${arr1[num]}`
        }
        if (num % 10 === 0) {
            return `${arr1[Number(String(number)[0])]} ${hundred} ${arr2[num / 10 - 2]}`
        }
        else {
            return `${arr1[Number(String(number)[0])]} ${hundred} ${arr2[Number(String(num)[0]) - 2]} ${arr1[Number(String(num)[1])]}`
        }
    }
 }
}
