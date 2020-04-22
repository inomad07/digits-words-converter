const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

const convert_millions = (number) => {
    if (number >= 1000000) {
        return convert_millions(Math.floor(number / 1000000)) + " million " + convert_thousands(number % 1000000);
    }

    return convert_thousands(number);
};

const convert_thousands = (number) => {
    if (number >= 1000) {
        return convert_hundreds(Math.floor(number / 1000)) + " thousand " + convert_hundreds(number % 1000);
    }

    return convert_hundreds(number);
};

const convert_hundreds = (number) => {
    if (number > 99) {
        return ones[Math.floor(number / 100)] + " hundred " + convert_tens(number % 100);
    }

    return convert_tens(number);
};

const convert_tens = (number) => {
    if (number < 10) return ones[number];
    if (number >= 10 && number < 20) return teens[number - 10];
    return tens[Math.floor(number / 10)] + " " + ones[number % 10];
};

const convert = (number) => {
    if (number == 0) return "zero";
    return convert_millions(number);
};

const main = (number) => {
    if (!number) return;
    return convert(number);
};




module.exports = {
    main
};