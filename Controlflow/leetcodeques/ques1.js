function expect(val) {
    return {
        toBe: function (otherVal) {
            if (val !== otherVal) {
                throw new Error("Not Equal");
            }
            return true;
        },
        notToBe: function (otherVal) {
            if (val === otherVal) {
                throw new Error("Equal");
            }
            return true;
        }
    };
}

// Example usage:
try {
    expect(5).toBe(5); // No error, as 5 === 5
    // console.log("Test passed: 5 is equal to 5");

    // expect(5).notToBe(10); // No error, as 5 !== 10
    // console.log("Test passed: 5 is not equal to 10");

    // expect(5).toBe(10); // Error: Not Equal, as 5 !== 10
} catch (error) {
    console.error(error.message);
}


function new1(val) {
    return {
        new2: function (otherVal) {
            console.log(otherVal)

        }
    }
}

new1(2).new2(10)