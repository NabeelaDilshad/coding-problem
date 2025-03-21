

/**
        parseInt:
            Purpose: Converts a string into an integer (whole number).
        Usage:
            It parses the string and returns the first integer it finds.
            It stops parsing when it encounters a non-numeric character.
            If the string does not start with a valid integer, it returns NaN.
        Example:
        */
parseInt('42');        // 42
parseInt('42abc');     // 42
parseInt('abc42');     // NaN
parseInt('10.5');      // 10 (stops parsing at the decimal point)



/**
    parseFloat:
         Purpose: Converts a string into a floating-point number (a number that can have decimals).
    Usage:
        It parses the string and returns the number with decimal points if available.
        Like parseInt, it stops parsing when it hits a non-numeric character.
        If the string doesn't represent a valid floating-point number, it returns NaN.
    Example:
    */

parseFloat('42');      // 42
parseFloat('42.5');    // 42.5
parseFloat('42abc');   // 42
parseFloat('abc42');   // NaN
parseFloat('10.5abc'); // 10.5