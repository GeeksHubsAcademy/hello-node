const params = process.argv.slice(2);
if (params.some(param => isNaN(+param))) {
    throw new Error('pasa numbers mamón')
}
const total = params.reduce((pre, cur) => pre + cur, 0);
console.log(total)