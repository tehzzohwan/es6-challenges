const obj = {
    x: 5,
    y: 20,
    z: 3
};
 const mult = (obj) => {
    const {x, y, z} = obj;
    return (x * y * z);
 };


console.log(mult(obj))
