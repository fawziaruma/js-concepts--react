// // 1 array   destructuring 
// const numbers =  [42 , 46]
// const number = numbers[0]

// // const [x , y] = [42 , 24]
//  const [x,y] = numbers

// function  boxify(num1 ,  num2){
//     const  nums  = [num1 , num2]
//     return nums 
// }

// // const [first , second ] = [90, 34]

// const [first , second] = boxify(90 , 25)


// console.log(boxify(90 , 25));

// const student = {
 
//     name:  'sali khan ',
//     age : 32,
//     movies:['dhakr khing0' , 'pathan' ]


// }

// const [firstMovie ,  secondMovie] = student.movies

// console.log(firstMovie ,  secondMovie);
// object des

const {names , ages} = {name: 'alu' , age:14};
const {name , age} = {id: 12 , name: 'alu' , salary:3400 , age:  19};

const empolye = {
    ide: 'vs code',
    desigantion :  'developer',
    machine : 'mac',
    language: ['html' , 'css' , 'js'],
    specification: {
        height: 66,
        width: 67 ,
        address: 'kuwakata',
        drink: 'wataer', 
        watchs:{
                 color: 'black',
                 price:500,
                 brand:'avc'
        }
    }
}
const {machine, ide} = empolye
const {width, address} = empolye.specification
const{brand} = empolye?.specification?.watch
console.log(brand);
