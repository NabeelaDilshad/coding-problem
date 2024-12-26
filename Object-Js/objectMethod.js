
const product = {
    id: 101,
    name: 'Smartphone',
    price: 25000,
    specifications: {
      battery: '4000mAh',
      processor: 'Octa-core',
    },
    stock: undefined
  };


  // Object.keys();
  const keysofobject = Object.keys(product);
  // console.log(keysofobject)


  // Object.value();
  const valueofobject = Object.values(product);
  // console.log(valueofobject)


  // Object.entries();
  const entiesofobject = Object.entries(product);
  // console.log(entiesofobject)



  const mapobject = [
    [ 'id', 101 ],
    [ 'name', 'Smartphone' ],
    [ 'price', 25000 ],
    [ 'specifications', { battery: '4000mAh', processor: 'Octa-core' } ],
    [ 'stock', undefined ]
  ]

   // Object.Fromentries();
   const fromentiesofobject = Object.fromEntries(mapobject);
  //  console.log(fromentiesofobject)



  // Object.hasOwn() to check properties (key) exist or not
  const namexistornot = Object.hasOwn(product, 'name');
  // console.log(namexistornot)

  // older way  to to check properties (key) exist or not
  const namexistornot1 = product.hasOwnProperty('name');
  // console.log(namexistornot1)


  // Object.is()
  
  // object create , create new object and set prototype passing  object
  const person = {
    isHuman: false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
  };
  
  const me = Object.create(person);
  
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // Inherited properties can be overwritten
  
  console.log(me)
  me.printIntroduction();



  const mostExpensive = (obj) => {
         const sortedobj = Object.keys(obj).sort((a, b) => obj[b] - obj[a])[0];
         console.log(sortedobj)
  }
  mostExpensive ({
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650
  }) //  "The most expensive one is the Pearl Necklace"
  
  mostExpensive({
    "Silver Bracelet": 280,
    "Gemstone Earrings": 180,
    "Diamond Ring": 3500
  }) // "The most expensive one is the Diamond Ring"



  const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
  ];
  
  /* Result is:
  {
    vegetables: [
      { name: 'asparagus', type: 'vegetables', quantity: 5 },
    ],
    fruit: [
      { name: "bananas", type: "fruit", quantity: 0 },
      { name: "cherries", type: "fruit", quantity: 5 }
    ],
    meat: [
      { name: "goat", type: "meat", quantity: 23 },
      { name: "fish", type: "meat", quantity: 22 }
    ]
  }
  */
  function  groupby(vlist) {
        const groupResult = {};
        for( item of vlist){
               const type = item.type
               if(!groupResult[type]){
                     groupResult[type] = []    //  { "vegetables" : [] , fruits:[]}
               }
              groupResult[type].push(item)
            
        }
        console.log(groupResult)
  }


// const result = Object.groupBy(inventory, ({ type }) => type);
// const result = Object.groupBy(inventory,  (item) => item.type);
  
  groupby(inventory)