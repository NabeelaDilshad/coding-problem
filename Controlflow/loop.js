
//  find even number unka sum ;

let arr = [1,2,3,4,5,6 ,7,8,9,10,11,12,13,14];

function normalLoop(list){
     let sum = 0;
     for(let i=0; i <list.length; i++){
       if(list[i] % 2 == 0){
          sum += list[i];
       }
     }
     console.log(`sum of arr is ${sum}`);
};
// normalLoop(arr);



// ========================================== ForEach ========================================================

function forEarchloop(list){ 
        let sum = 0;
        list.forEach( function( item, index, array){
              if(item % 2 == 0){
                   sum += item;
              }
        })
        console.log(`sum by forEach is ${sum}`);
}
// forEarchloop(arr);
    

// ========================================== map ========================================================



let list = [12,24,6,2];   // double to list its value also retain orinal array not affected


function doubleNormal(list){
      let result = [];
      for(let i=0; i<list.length; i++){
            result.push(list[i] * 2);
      }

      console.log("rseult array", result);
      console.log("original array", list);
};

// doubleNormal(list)


function doublewithMap(list){
    const r =   list.map((item, index) => {
      return  item*2
    }  );
    console.log("rseult array", r);
    console.log("original array", list);
};

// doublewithMap(list)




// ========================================== filter ========================================================

const users = [
    {
        id: 1,
        name: 'Alice',
        age: 30,
        email: 'alice@example.com'
    },
    {
        id: 2,
        name: 'Bob',
        age: 19,
        email: 'bob@example.com'
    },
    {
        id: 3,
        name: 'Charlie',
        age: 35,
        email: 'charlie@example.com'
    },
    {
        id: 4,
        name: 'hogn',
        age: 26,
        email: 'hogn@example.com'
    },
    {
        id: 5,
        name: 'lie',
        age: 17,
        email: 'lie@example.com'
    },
];


function filterage(users){
      const r =  users.filter((item) => {
         if(item.age < 20){
               return  item;
         }
      });
    //   console.log(r);

    let result = [];
    for(let i = 0; i < users.length; i++){
          if(users[i].age < 20){
               result.push(users[i]);
          }
    }
    console.log("result", result)
     
}

// filterage(users);