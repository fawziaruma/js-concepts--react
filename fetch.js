//   1 JSON  =>  stringify  , parse 

// go to  chat gpt and search 

const student = {
    name: 'omor  faruk',
    age: 80 ,
    movies :  [ 'alo adar' , ' saring barir bou ' ]
}

// fetch 

fetch('url')
.then(res => res.json())
.then(data => console.log(data))

// keys , values 

const keys  =  Object.keys(student)
const value = Object.values(student)


console.log(value);

//  for 
const  number = [25 , 24  , 74  , 21 , 85 , 65  ]
// number.forEach(num =>  console.log(num))
// number.map(num => console.log(num * 2))


//  add or remove from an array 
const products = [

    {name:'watch ' , price: 3200 , brand: 'casio' , color:'silver'},
    {name:'phone ' , price: 5400 , brand: 'hp' , color:'black'},
    {name:'sungless ' , price: 300 , brand: 'raybon' , color:'say'},
    {name:'camarea ' , price: 6500 , brand: 'canon' , color:'yellow'},
    {name:'neon-light ' , price: 500 , brand: 'cion' , color:'nionow'},
  
]

const  newProduct = {name: 'webcamera' ,  price: 700 , brand : 'a4tk' , color:'fray' }
//  copy product array and then add new product 
const addNewProducts =  [...products, newProduct]

console.log(addNewProducts);