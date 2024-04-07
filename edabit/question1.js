function tuckIn(arr1, arr2) {
    return [arr1[0], ...arr2, arr1[1]]
}

const r = tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9])
// console.log(r);



////////////////////////////passing arr2 in the mid of arr1/////////////////////////////////////////

function midPass(arr1, arr2) {

    for (let i = 0; i < arr1.length; i++) {
        mid = (arr1.length - 1) / 2;
    }

}





function midPass(arr1, arr2) {
    // Find the middle index of arr1
    const middleIndex = Math.ceil(arr1.length / 2);

    // Insert elements of arr2 into arr1 at the middle index
    // We use arr1.splice() and pass the middle index as the starting index where we want to insert elements.
    arr1.splice.apply(arr1, [middleIndex, 0].concat(arr2));

    return arr1;
}

// Test the function
const result = midPass([1, 2, 3, 4, 5, 6, 7, 8, 9], [10, 20, 30, 40, 50, 60, 70]);
console.log(result); // Output: [1, 2, 3, 10, 20, 30, 40, 50, 60, 70, 4, 5, 6, 7, 8, 9]






