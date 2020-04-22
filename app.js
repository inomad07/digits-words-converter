const fs = require("fs");
const prompt = require('prompt-sync')({sigint: true});

const Helper = require('./helper');

const getNumbersFromFile = () => {
   return fs.readFileSync('./numbers.txt', {encoding:'utf8', flag:'r'});
};

const getNumbers = () => {
    let numbers = [];
    const firstNumber = prompt('Enter your first number: ');
    const secondNumber = prompt('Enter your second number: ');

    numbers.push(firstNumber);
    numbers.push(secondNumber);
    return numbers;
};

const checkWord = (firstNumber) => {
    return firstNumber.match(/\b(\w*and\w*)\b/g);
};

const convertToWord = (numbers) => {
    numbers.map((word) => {
        const isExistWord = checkWord(word);

        if (isExistWord) {
            let numb = word.replace(/[^0-9]/g, '');
            return console.log(Helper.main(numb), 'and')
        }

        return console.log(Helper.main(word))
    });

};


const checkInput = (type) => {
    if (type == 0) {
        let numbers = getNumbersFromFile();
        numbers = numbers.split(', ');
        return convertToWord(numbers);
    }

    let numbers = getNumbers();

    convertToWord(numbers);
};

const spellNumbers = () => {
    const type = prompt('#1. Read from file, type 0. #2. Type yourself 2: ');
    checkInput(type);
};


console.log(`Enter the number from 1 to 1,000,000`);

spellNumbers();
