const nums = {
    a: 10,
    b: 20,
    c: "string",
    d: 12
};

const sumObjectValues = (obj) => {
    let total = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'number' && obj.hasOwnProperty(key)) {
            total += obj[key];
        }
    }
    return total;
}

console.log(sumObjectValues(nums))