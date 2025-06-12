const nombres = [1, 5, 12, 8, 130, 44];

nombres.forEach((element) => {
    console.log(`Le nombre est ${element}`);
})

const grandsNombres = nombres.filter((element) => {
    return element > 10;
})
console.log(grandsNombres);

const doubles = nombres.map((element) => {
    return element * 2;
})
console.log(doubles);

