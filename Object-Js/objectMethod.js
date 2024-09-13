
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