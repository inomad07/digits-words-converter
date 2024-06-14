import { ones, tens, teens, zero, hundred, thousand, million, MILLION_DIGIT, THOUSAND_DIGIT, HUNDRED_DIGIT, TEN_DIGIT, TWENTY_DIGIT, NINETY_NINE_DIGIT, ZERO_DIGIT } from '../constants.mjs'

const convertMillions = (number) => {
    if (number >= MILLION_DIGIT) {
        return convertMillions(Math.floor(number / MILLION_DIGIT)) + million + convertThousands(number % MILLION_DIGIT);
    }

    return convertThousands(number);
};

const convertThousands = (number) => {
    if (number >= THOUSAND_DIGIT) {
        return convertHundreds(Math.floor(number / THOUSAND_DIGIT)) + thousand + convertHundreds(number % THOUSAND_DIGIT);
    }

    return convertHundreds(number);
};

const convertHundreds = (number) => {
    if (number > NINETY_NINE_DIGIT) {
        return ones[Math.floor(number / HUNDRED_DIGIT)] + hundred + convertTens(number % HUNDRED_DIGIT);
    }

    return convertTens(number);
};

const convertTens = (number) => {
    if (number < TEN_DIGIT) return ones[number];
    if (number >= TEN_DIGIT && number < TWENTY_DIGIT) return teens[number - TEN_DIGIT];
    return tens[Math.floor(number / TEN_DIGIT)] + " " + ones[number % TEN_DIGIT];
};

export const convertDigits = (number) => number == ZERO_DIGIT ? zero : convertMillions(number);

