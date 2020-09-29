export default (params) => {
    if (params.some(param => isNaN(+param))) {
        throw new Error('pasa numbers mamón')
    }
    const total = params.reduce((pre, cur) => pre + +cur, 0);
    return total;
}