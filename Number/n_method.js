/**                         *****    isNaN() ******
                    Purpose: The global isNaN() function determines whether a value is "Not-a-Number" after attempting to coerce it into a number.
                    How it Works
                    isNaN first tries to convert the input value to a number.
                    If the resulting value is NaN, it returns true; otherwise, it returns false.
                    Characteristics
                    Type Coercion: isNaN coerces the value into a number before checking.
                    It may produce unexpected results because of its reliance on type conversion.
                    Examples
*/
        isNaN(NaN); // true (NaN is not a number)
        isNaN("Hello"); // true (String "Hello" cannot be converted to a number)
        isNaN(undefined); // true (undefined coerces to NaN)
        isNaN("123"); // false ("123" is converted to the number 123)
        isNaN(true); // false (true coerces to 1, which is a number)
        Pitfalls
        // isNaN may return true for non-NaN values because of its coercion.
        isNaN("Hello"); // true (not intuitive, as "Hello" is a string, not NaN)
        isNaN(undefined); // true (undefined coerces to NaN)

/** 
                              ****** Number.isNaN() ********
                    Purpose: Number.isNaN() is a more precise way to determine if a value is NaN.
                    How it Works
                    Number.isNaN does not perform type coercion.
                    It only returns true if the value is strictly NaN.
                    Characteristics
                    No Type Coercion: Number.isNaN does not try to convert the input to a number.
                    Only values that are explicitly NaN return true.
                    Examples
*/
        Number.isNaN(NaN); // true (NaN is explicitly NaN)
        Number.isNaN("Hello"); // false ("Hello" is not coerced to NaN)
        Number.isNaN(undefined); // false (undefined is not NaN)
        Number.isNaN("123"); // false ("123" is not NaN)
        Number.isNaN(true); // false (true is not NaN)

// Benefits
// More predictable and reliable compared to isNaN because it avoids type coercion.
// Use Number.isNaN when you need to strictly check for the NaN value.


                 //  Number.parseFloat
                console.log(Number.parseFloat("123.45"));  // 123.45
                console.log(Number.parseFloat("  123.45abc"));  // 123.45
                console.log(Number.parseFloat("abc123.45"));  // NaN
                console.log(Number.parseFloat("0.1e2"));  // 10 (scientific notation)
                console.log(Number.parseFloat(""));  // NaN


                // convert string to  number 
                console.log(Number.parseInt("123"));      // 123
                console.log(Number.parseInt("123abc"));   // 123 (stops at 'a')
                console.log(Number.parseInt("abc123"));   // NaN (no valid number at the start)
                console.log(Number.parseInt("  100"));    // 100 (leading whitespace is ignored)
                console.log(Number.parseInt("0x10"));     // 16 (hexadecimal)
                console.log(Number.parseInt("101", 2));   // 5 (binary)
                console.log(Number.parseInt("15", 8));    // 13 (octal)



