// const sum = require('./sum.js'); //CommonJS modules
import sum from './sum.js'; //ES6 modules
const params = process.argv.slice(2);
const total = sum(params);
console.log(total);