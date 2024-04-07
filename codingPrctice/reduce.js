// const array = [1, 2, 3, 4, 5]
// const initialValue = 0;
// const sumWithInitial = array.reduce(
// (acc, currentvalue) => acc + currentvalue, initialValue);
// console.log(sumWithInitial);

const array = [1, 2, 3, 4]
const sumArray = array.reduce(function (acc, currentvalue) {
    return acc + currentvalue
}, 0);

// console.log(sumArray);



const cources = [
    {
        course1: "js cource",
        price: 1999

    },
    {
        course2: "pyth cource",
        price: 2999

    },
    {
        course3: "datastructure cource",
        price: 8999

    },
    {
        course4: "devops cource",
        price: 10000

    }
]

const totalPrice = cources.reduce((acc, item) => {
    return acc + (item.price)
}, 0);
console.log(totalPrice);




