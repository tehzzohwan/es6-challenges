const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

const sumPlusMinus = (arr) => {
    let plus = 0;
    let minus = 0;
    for (let i in arr) {
        if (arr[i] > 0) plus += arr[i];
        else minus += arr[i];
    }
    return {
        'plus': plus, 
        'minus': minus
    }
}

console.log(sumPlusMinus(nums));