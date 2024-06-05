import { readFileSync } from "fs";
import { FILE_CONFIG, FILE_PATH } from '../constants.mjs';

export const getDigitsFromFile = () => readFileSync(FILE_PATH, FILE_CONFIG).split(', ');
