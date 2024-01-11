console.log('Running');

const sum = (...numbers) => {
    const result = numbers.reduce((acc, curVal) => acc + curVal, 0);
    console.log(result);
}

sum(12, 10, 12, 12, 12)
// 34
