let person1 = {
    name: "Mike",
    info: {
        country: "Spain",
        age: 23
    },
    postsQuantity: 100
};

let person2 = {
    name: "Alice",
    info: {
        country: "Italy",
        age: 25
    },
};

const shortPerson = (person) => {
    let {
        name: n, 
        info: {
            country: c, 
        age: a
        },
        postsQuantity: p = 0
    }  = person;

    console.log( {
        "n": n,
        "c": c,
        "a": a,
        "p": p
    })
};

console.log(shortPerson(person1));

console.log(shortPerson(person2));
