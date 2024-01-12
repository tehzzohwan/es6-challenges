let vowelsCount = 0;

let vowels = ["a", "e", "i", "o", "u"];

const str = "Today is the best day of my life.";

for (let x in vowels) {
    for (let y of str) {
        if (vowels[x] === y) {
            vowelsCount++;
        };
    };
};

console.log(vowelsCount);
