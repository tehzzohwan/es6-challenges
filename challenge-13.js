let cars = [
    { brand: 'Honda', price: 13000 },
    { brand: 'Rolls-Royce', price: 120000 }
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

carInfo(cars);
