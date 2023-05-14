// Creating an array of objects
const products = [

     {name:'watch ' , price: 3200 , brand: 'casio' , color:'silver'},
     {name:'phone ' , price: 5400 , brand: 'hp' , color:'black'},
     {name:'sungless ' , price: 300 , brand: 'raybon' , color:'say'},
     {name:'camarea ' , price: 6500 , brand: 'canon' , color:'yellow'},
     {name:'neon-light ' , price: 500 , brand: 'cion' , color:'nionow'},
   

]

const brands = products.map(product=>product.brand)
//  products.forEach(product=>console.log(product.name))

 
// console.log(brands);
// 3 filter 
const  priemum = products.filter(x =>  x.price > 4000 )
const spicifyName = products.filter(p => p.name.includes('n') )
console.log(spicifyName);

// console.log(priemum);

// find 
//  only single  value show 
const spical = products.find(p  => p.name.includes('n'))
console.log(spical);
