let cars = [
    { brand: 'Honda', price: 13000, fullname: 'Bobby Enomate'},
    { brand: 'Rolls-Royce', price: 120000, fullname: 'kola Enomate'}
];

const carInfo = (arr) => {
    arr.forEach((car) => {
        const price = car.price;
        const brand = car.brand;
        if (price < 10000) {
            console.log(`Price of my new ${brand} is ${price}$ and it's a cheap car`);
            } else {
                console.log(`Price of my new ${brand} is ${price}$ and it's an expensive car`);
            };
    });
    
};

const priceIncrement = (arr) => {
    const newArr = arr.map((car) => {
        car.price = car.price * 2;
        delete car["brand"];
        car.firstname = car.fullname.split(" ")[0]
        delete car["fullname"];
        return {...car, model: "Toyota"}
    });
    console.log(newArr);
}

carInfo(cars);
priceIncrement(cars);
