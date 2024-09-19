
// function inkLevels(obj){
//     const values = Object.values(obj);
//     let min = values[0];
//     for(let i= 1;  i < values.length; i++){
//            if(values[i] < min){
//             min = values[i];
//            }
//            else if ( min == values[i] && i !== 0){
//             console.log("undefine issue here ",values[i+1])
//                 min = values[i+1];
//            }
//     }
//     // console.log(min)
// }





// inkLevels({
//     "cyan": 23,
//     "magenta": 12,
//     "yellow": 10
//   }) // 10
  
//   inkLevels({
//     "cyan": 432,
//     "magenta": 543,
//     "yellow": 777
//   })    //  432
  
//   inkLevels({
//     "cyan": 10,
//     "magenta":10,
//     "yellow": 30
//   })   //  30



  function inkLevels(inks) {
    // Get all the values from the object
    let inkValues = Object.values(inks);

    // Create a frequency map to count occurrences of each value
    inkValues.forEach(value => {
      frequencyMap[value] = (frequencyMap[value] || 0) + 1;
      

    //  if(frequencyMap[value]){
    //     frequencyMap[value] = frequencyMap[value] + 1;
    //  }
    //  else{
    //     frequencyMap[value] = 1;
    //  }


    });

    // console.log("frequencyMap", frequencyMap)
    
    // Filter out the values that have duplicates
    let uniqueValues = inkValues.filter(value => frequencyMap[value] === 1);
                                         
    // If no unique values remain, return null or a specific message
    if (uniqueValues.length === 0) return "No unique ink levels found";
  
    // Return the minimum of the remaining values
    return Math.min(...uniqueValues);
  }
  
  // Test cases
  console.log(inkLevels({ "cyan": 23, "magenta": 12, "yellow": 10 }));   // Output: 10
  console.log(inkLevels({ "cyan": 432, "magenta": 543, "yellow": 777 })); // Output: 432
  console.log(inkLevels({ "cyan": 10, "magenta": 10, "yellow": 30 }));    // Output: 30









  



