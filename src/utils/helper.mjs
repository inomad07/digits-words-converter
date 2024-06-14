import { readFileSync } from 'fs';
import { FILE_CONFIG, FILE_PATH } from '../constants.mjs';

export const getDigitsFromFile = () => readFileSync(FILE_PATH, FILE_CONFIG).split(', ');

export const checkWord = word => word.match(/\b(\w*and\w*)\b/g);

export const checkNumbers = (number, func) => number ? func(number) : null;
