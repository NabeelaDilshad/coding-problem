
const arr = [1,2]
//push Appends new elements to the end of an array, and returns the new length of the array.
// const push = arr.push(4,5)
// console.log(arr);

//pop Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// const p = arr.pop();
// console.log(arr, 'p', p);


// shift Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// const shiftelement = arr.shift();
// console.log(shiftelement, arr);

// unshift Inserts new elements at the start of an array, and returns the new length of the array.
const unshiftelement = arr.unshift(100);
console.log(unshiftelement, arr);




console.log("------------------------------------------------- ---------- ")

const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];
  
  // sort by value
//   items.sort((a, b) => a.value - b.value);
  
  // sort by name
  items.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
   


  // forEach , map , filter , reduce

    const numbers = [10,20,30,40,50];

    // function getsumnormal(nums){
    //      let sum = 0;
    //      for (let i = 0; i < nums.length; i++) {
    //           sum +=nums[i]
            
    //      }
    //      console.log(sum)

    // }
    // getsumnormal(numbers);


    // const callbackfun = (item) => sum += item

    function getsumnormalforEach(nums){
        let sum = 0;
         nums.forEach(function(item, index){
              sum += item
         })
        //  nums.forEach(( item) =>  sum+= item)

        // nums.forEach(callbackfun)
        //  console.log(sum)

    }
    getsumnormalforEach(numbers);



    // map 
    const maparr = [ 1,2,3,4,5];

    function getdouble(arr){
        const r = arr.map((item) => item*2 )
        // console.log(r,maparr)
    }
    getdouble(maparr)



    const users = [
        {
          name: "Alice",
          age: 28,
          skills: [
            { skillName: "JavaScript", level: 8 },
            { skillName: "Python", level: 6 }
          ],
          projects: [
            { title: "Project A", duration: 3 },
            { title: "Project B", duration: 2 }
          ]
        },
        {
          name: "Bob",
          age: 34,
          skills: [
            { skillName: "JavaScript", level: 5 },
            { skillName: "Java", level: 7 }
          ],
          projects: [
            { title: "Project C", duration: 5 },
            { title: "Project D", duration: 4 }
          ]
        },
        {
          name: "Charlie",
          age: 22,
          skills: [
            { skillName: "Ruby", level: 3 },
            { skillName: "Python", level: 9 }
          ],
          projects: [
            { title: "Project E", duration: 1 },
            { title: "Project F", duration: 6 }
          ]
        }
      ];


      function mapprojectcode(users){
         const result =  users.map((item) =>  {
               const totalProjectDurationarray =  item.skills.filter(( item) => item.level > 6 ).length
               const totalproject = item.projects.map((item) => item.title )
               const totalProjectDuration = item.projects.reduce((acc,item) =>  acc+item.duration ,0)
              return {
                name: item.name,
                highLevelSkillCount: totalProjectDurationarray,
                projectTitles: totalproject,
                totalProjectDuration: totalProjectDuration
              }
            })
            return result;
      }
    const rp =  mapprojectcode(users)
    // console.log(rp)

    // OP   ---->
    //   [
    //     {
    //       name: "Alice",
    //       highLevelSkillCount: 1,
    //       projectTitles: ["Project A", "Project B"],
    //       totalProjectDuration: 5
    //     },
    //     {
    //       name: "Bob",
    //       highLevelSkillCount: 1,
    //       projectTitles: ["Project C", "Project D"],
    //       totalProjectDuration: 9
    //     },
    //     {
    //       name: "Charlie",
    //       highLevelSkillCount: 1,
    //       projectTitles: ["Project E", "Project F"],
    //       totalProjectDuration: 7
    //     }
    //   ]

    const users2 = [
        {
          userId: 1,
          name: "Alice",
          transactions: [
            { type: "income", amount: 500 },
            { type: "expense", amount: 200 },
            { type: "income", amount: 300 }
          ]
        },
        {
          userId: 2,
          name: "Bob",
          transactions: [
            { type: "expense", amount: 150 },
            { type: "income", amount: 700 }
          ]
        },
        {
          userId: 3,
          name: "Charlie",
          transactions: [
            { type: "income", amount: 400 },
            { type: "expense", amount: 50 },
            { type: "expense", amount: 100 }
          ]
        }
      ];

       // [
    //     { name: "Alice", totalIncome: 800, totalExpense: 200 },
    //     { name: "Bob", totalIncome: 700, totalExpense: 150 },
    //     { name: "Charlie", totalIncome: 400, totalExpense: 150 }
    //   ]


    
    //   const summary = users.map(user => {
    //     const { income, expense } = user.transactions.reduce(
    //       (totals, transaction) => {
    //         if (transaction.type === "income") {
    //           totals.income += transaction.amount;
    //         } else {
    //           totals.expense += transaction.amount;
    //         }
    //         return totals;
    //       },
    //       { income: 0, expense: 0 } // Initial values for income and expense
    //     );
        
    //     return {
    //       name: user.name,
    //       totalIncome: income,
    //       totalExpense: expense
    //     };
    //   });
      
    //   // Output the summary
    //   console.log(summary);

  

    // [
    //     { name: "Alice", totalIncome: 800, totalExpense: 200 },
    //     { name: "Bob", totalIncome: 700, totalExpense: 150 },
    //     { name: "Charlie", totalIncome: 400, totalExpense: 150 }
    //   ]


    const sales = [
        { date: "2024-09-01", product: "Laptop", amount: 1000 },
        { date: "2024-09-01", product: "Mouse", amount: 50 },
        { date: "2024-09-02", product: "Keyboard", amount: 100 },
        { date: "2024-09-01", product: "Monitor", amount: 300 },
        { date: "2024-09-02", product: "Headphones", amount: 200 }
      ];
    //   const salesByDate = sales.reduce((acc, sale) => {
    //     if (!acc[sale.date]) {
    //       acc[sale.date] = { date: sale.date, totalAmount: 0 };
    //     }
    //     acc[sale.date].totalAmount += sale.amount;
    //     return acc;
    //   }, {});
      
    //   // Convert the object back into an array
    //   const result = Object.values(salesByDate);
      
    //   // Output the result
    //   console.log(result);

    // output
    // [
    //     { date: "2024-09-01", totalAmount: 1350 },
    //     { date: "2024-09-02", totalAmount: 300 }
    //   ]