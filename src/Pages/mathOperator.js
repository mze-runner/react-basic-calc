import {OPERATORS} from './static';

export const convertStrToDigit = (str, isNegative) => {
    // const toNumber = parseInt(str);
    const toNumber = parseFloat(str === '' ? 0 : str);
    const output = toNumber * (isNegative ? -1 : 1);
    return Number(output);
}

export const _mathOperation = (x, y, oper) => {
console.log(`EXEC: _mathOperation call input x = ${x} | y = ${y} | oper = ${oper}`);
    if(oper === OPERATORS.MULTIPLY ){
        return parseFloat(x) * parseFloat(y);
    }
    if(oper === OPERATORS.ADD){
        return parseFloat(x) + parseFloat(y);
    }
    if(oper === OPERATORS.SUBTRACT){
        return parseFloat(x) - parseFloat(y);
    }
    if(oper === OPERATORS.DIVIDE){
        return parseFloat(x) / parseFloat(y);
    }
};