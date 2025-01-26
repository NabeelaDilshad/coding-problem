/* 
                                    ****** String.at() ********
                Introduced in: ES2022.
                Purpose: Retrieves the character at a specified position, supporting negative indexing.

                Syntax:
                string.at(index)

                Behavior:
                Supports negative indices to count from the end of the string.
                Returns undefined for out-of-range indices.
**/

        // Example:
        var str = "hello";
        console.log(str.at(1));  // Output: 'e'
        console.log(str.at(-1)); // Output: 'o'
        console.log(str.at(10)); // Output: undefined




/* 
                                ****** String.charAt() ******
                Introduced in: Original JavaScript specification (ECMAScript 1st Edition).
                Purpose: Retrieves the character at a specified position.

                Syntax:
                string.charAt(index)

                Behavior:
                Does not support negative indices.
                Returns an empty string ("") for out-of-range indices.
                Example:
**/                
        var str = "hello";
        console.log(str.charAt(1));  // Output: 'e'
        console.log(str.charAt(-1)); // Output: ''
        console.log(str.charAt(10)); // Output: ''

        
/*
                                  ******  substring(start, end) ******
                Extracts characters between the start and end indices (excluding end).
                If start > end, the method swaps the indices.
                If end is omitted, it extracts until the end of the string.

*/
                const str = "hello";
                str.substring(1, 4); "ell"


/*                          
                                  ****  slice(start, end) ****
                Extracts characters between the start and end indices (excluding end).
                Does not swap indices.
                Supports negative indices to count from the end of the string.
*/
                const str = "hello";
                str.slice(1, 4); // "ell"
                str.slice(-3, -1); // "ll"




        console.log(`------ check 1 ------`);

        for( let item in "hello"){
            //   /console.log(item) // 0 ,1 ,2 ,3 ,4
             
        }
        for( let item of "hello"){
            // console.log(item) // h ,e ,l ,l ,o
        }


            // way to create string
            // const username = "faiz"
            // const username1 = String("faiz")
            // const username2  = new  String("faiz")


        // List of all JavaScript String methods with descriptions

        // 1. charAt(index)
        // Returns the character at the specified index.
        console.log("hello".charAt(1));      // "e"

        // 2. charCodeAt(index)
        // Returns the Unicode of the character at the specified index.
        console.log("hello".charCodeAt(1)); // 101

        // 3. concat(str1, str2, ...)
        // Joins two or more strings.
        console.log("hello".concat(" ", "world")); // "hello world"

        // 4. includes(searchString, position)
        // Checks if a string contains the specified value.
        console.log("hello".includes("ell")); // true

        // 5. endsWith(searchString, length)
        // Checks if a string ends with specified value.
        console.log("hello".endsWith("lo")); // true

        // 6. indexOf(searchValue, fromIndex)
        // Returns the position of the first occurrence of specified value.
        console.log("hello".indexOf("l")); // 2

        // 7. lastIndexOf(searchValue, fromIndex)
        // Returns the position of the last occurrence of specified value.
        console.log("hello".lastIndexOf("l")); // 3

        // 8. localeCompare(compareString)
        // Compares two strings in the current locale.
        console.log("a".localeCompare("b")); // -1

        // 9. match(regexp)
        // Matches a string against a regular expression.
        console.log("hello".match(/l/g)); // ["l", "l"]

        // 10. matchAll(regexp)
        // Returns an iterator of all matched results.
        console.log([..."hello".matchAll(/l/g)]); // [["l"], ["l"]]

        // 11. normalize(form)
        // Returns the Unicode Normalization Form of a string.
        console.log("\u1E9B\u0323".normalize()); // "ẛ̣"

        // 12. padEnd(targetLength, padString)
        // Pads the current string from the end.
        console.log("hello".padEnd(10, "-")); // "hello-----"

        // 13. padStart(targetLength, padString)
        // Pads the current string from the start.
        console.log("hello".padStart(10, "-")); // "-----hello"

        // 14. repeat(count)
        // Returns a new string with the specified number of copies.
        console.log("hello".repeat(3)); // "hellohellohello"

        // 15. replace(searchValue, newValue)
        // Replaces a specified value with another value in a string.
        console.log("hello".replace("l", "L")); // "heLlo"

        // 16. replaceAll(searchValue, newValue)
        // Replaces all occurrences of a specified value with another value in a string.
        console.log("hello".replaceAll("l", "L")); // "heLLo"

        // 17. search(regexp)
        // Searches a string for a value matching a regular expression.
        console.log("hello".search(/l/)); // 2

        // 18. slice(start, end)
        // Extracts a part of a string.
        console.log("hello".slice(1, 4)); // "ell"

        // 19. split(separator, limit)
        // Splits a string into an array of substrings.
        console.log("hello world".split(" ")); // ["hello", "world"]

        // 20. startsWith(searchString, position)
        // Checks if a string starts with specified characters.
        console.log("hello".startsWith("he")); // true

        // 21. substring(start, end)
        // Extracts characters between two indices.
        console.log("hello".substring(1, 4)); // "ell"

        // 22. toLowerCase()
        // Converts a string to lowercase.
        console.log("HELLO".toLowerCase()); // "hello"

        // 23. toUpperCase()
        // Converts a string to uppercase.
        console.log("hello".toUpperCase()); // "HELLO"

        // 24. toString()
        // Returns the string representation of an object.
        console.log((123).toString()); // "123"

        // 25. trim()
        // Removes whitespace from both sides of a string.
        console.log("  hello  ".trim()); // "hello"

        // 26. trimStart()
        // Removes whitespace from the start of a string.
        console.log("  hello  ".trimStart()); // "hello  "

        // 27. trimEnd()
        // Removes whitespace from the end of a string.
        console.log("  hello  ".trimEnd()); // "  hello"

        // 28. valueOf()
        // Returns the primitive value of a string object.
        console.log("hello".valueOf()); // "hello"

        // 29. at(index)
        // Returns the character at a specified index (supports negative indices).
        console.log("hello".at(-1)); // "o"
