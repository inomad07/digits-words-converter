const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

const convertMillions = (number) => {
    if (number >= 1000000) {
        return convertMillions(Math.floor(number / 1000000)) + " million " + convertThousands(number % 1000000);
    }

    return convertThousands(number);
};

const convertThousands = (number) => {
    if (number >= 1000) {
        return convertHundreds(Math.floor(number / 1000)) + " thousand " + convertHundreds(number % 1000);
    }

    return convertHundreds(number);
};

const convertHundreds = (number) => {
    if (number > 99) {
        return ones[Math.floor(number / 100)] + " hundred " + convertTens(number % 100);
    }

    return convertTens(number);
};

const convertTens = (number) => {
    if (number < 10) return ones[number];
    if (number >= 10 && number < 20) return teens[number - 10];
    return tens[Math.floor(number / 10)] + " " + ones[number % 10];
};

const convert = (number) => {
    if (number == 0) return "zero";
    return convertMillions(number);
};

const main = (number) => {
    if (!number) return;
    return convert(number);
};




module.exports = {
    main
};