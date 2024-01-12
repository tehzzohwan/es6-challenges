let greeting = (() => {
    var hello = "How are you doing";
    const greet = (name) => {
        return `${hello} ${name}`;
    }

    const changeGreeting = (newHello) => {
        hello = newHello;
    }

    return {
        greet,
        changeGreeting
    }
})();

console.log(greeting.greet("Bob"))

console.log(
    greeting.changeGreeting("Good Morning from")
);

console.log(greeting.greet("Emily"))