
const noArguement = () => {
    throw new Error("Function square requires an argument!");
};

const square = (a = noArguement()) => {
    console.log(a * a );
};

square(10);

square();
