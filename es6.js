const  numbers =  [22 , 25 ,  45 , 65]
const people  =  ['amir' , 'zamir' , 'jamil']
const student = {
     name:  'Salim khan',
     age: 32 ,
     movies: ['king khan',  ' kuraban ' ]
}

// 1. template string 

const  about = ` My  name is ${student.name} age of  ${student.age} has number ${numbers[3]} aslso  lijed movie ${student.movies[0]}  `
console.log(about);

// 2 arrow function 
const  getFiftyFive = () => 55
const addSixtyFive = num => num + 65
const isEven = num => num % 2 === 0;

const addThree = (first, second, third) => first + second + third
const doMath = (first, second) =>{
    const result = first + second ;
    return result
}
// speard operator 
numbers.push(99)
const newNumber = [...numbers , 'abc' ]


console.log(newNumber);