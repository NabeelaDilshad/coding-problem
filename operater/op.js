// In JavaScript, ?? (Nullish Coalescing Operator) and || (Logical OR Operator) are both used to provide a fallback value when evaluating expressions, but they behave differently in how they handle “falsy” values.

// || (Logical OR Operator):

// 	•	This operator returns the first truthy value from its operands.
// 	•	A value is considered “falsy” if it is false, 0, '' (empty string), null, undefined, or NaN.


const a = 0;
const result = 1 || 42;
console.log(result); // 42


// ?? (Nullish Coalescing Operator):

// 	•	This operator only checks for null or undefined, ignoring other falsy values like false, 0, '', or NaN.
// 	•	It returns the right-hand operand if the left-hand operand is null or undefined.

const a1 = 0;
const result1 = a1 ?? 42;
console.log(result1); // 0



function applyUserSettings(settings) {
    // Using || would override valid values like 0 (soundLevel) or false (showTips)
    const defaultSettings = {
      soundLevel: settings.soundLevel ?? 50,  // Default to 50 if undefined or null
      brightness: settings.brightness ?? 75,  // Default to 75 if undefined or null
      difficulty: settings.difficulty || 'medium', // Fallback to 'medium' for any falsy value
      showTips: settings.showTips ?? true,  // Default to true if undefined or null
    };
  
    return defaultSettings;
  }
  
  // User provides some settings
  const userSettings1 = {
    soundLevel: 0,          // Valid value: 0 means no sound
    brightness: 100,        // Valid value: max brightness
    difficulty: '',         // Falsy value: empty string, fallback to default
    showTips: false,        // Valid value: user doesn’t want tips
  };
  
  const userSettings2 = {
    soundLevel: undefined,  // Undefined: should fallback to default 50
    brightness: null,       // Null: should fallback to default 75
    difficulty: 'hard',     // Valid value: user set to 'hard'
    showTips: undefined,    // Undefined: should fallback to default true
  };
  
  console.log(applyUserSettings(userSettings1));
  // Output: { soundLevel: 0, brightness: 100, difficulty: 'medium', showTips: false }
  
  console.log(applyUserSettings(userSettings2));
  // Output: { soundLevel: 50, brightness: 75, difficulty: 'hard', showTips: true }