import prompt from './utils/prompt.mjs';
import { convertDigits } from './utils/digitsConverter.mjs';
import { checkWord, checkNumbers, getDigitsFromFile } from './utils/helper.mjs'
import { YES_OPTION, GREETING_MESSAGE, PLACEHOLDER_MESSAGE, FILE_DIGITS, AND, FIRST_NUMBER_MESSAGE, SECOND_NUMBER_MESSAGE } from './constants.mjs';

const getInputs = () => {
    const numbers = [];
    const firstNumber = prompt(FIRST_NUMBER_MESSAGE);
    const secondNumber = prompt(SECOND_NUMBER_MESSAGE);

    numbers.push(firstNumber);
    numbers.push(secondNumber);
    return numbers;
};

const convertToWord = (numbers) => {
    numbers.map((word) => {
        const isWord = checkWord(word);

        if (isWord) {
            const numb = word.replace(/[^0-9]/g, '');
            return console.log(checkNumbers(numb, convertDigits), AND)
        }

        return console.log(convertDigits(word))
    });

};

const main = () => {
    console.log(GREETING_MESSAGE)
    console.log(PLACEHOLDER_MESSAGE);
    const readFromFile = prompt(FILE_DIGITS).toUpperCase();
    readFromFile === YES_OPTION ? convertToWord(getDigitsFromFile()) : convertToWord(getInputs())
};

main();
