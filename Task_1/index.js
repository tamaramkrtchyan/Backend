//task 1
const task_one=require('./stringutils')
console.log(task_one.first('hello'))
console.log(task_one.second('hello'))
console.log(task_one.third('hello friends',5))


//task 2
const task_two= require('./mathOperations')
console.log("add=",task_two.add(1,2))
console.log("subtrsct=",task_two.subtract(1,2))
console.log("multiply=",task_two.multiply(1,2))
console.log("divide=",task_two.divide(1,2))

//task 3 
const task_three = require('./arrayUtils')
console.log("Unique elem is ",task_three.unique([1,2,3,1,2]))
console.log("Flatten= ",task_three.flatten([1,[2],[[3]],[[[4]]]]))
console.log("Chunk=",task_three.chunk([1,2,3,4,5,6],2))


//task 4
const task_foure = require('./dateUtils');
console.log(task_foure.formatDate(new Date('2023-05-26'), 'YYYY-MM-DD'))
console.log(task_foure.isWeekend(new Date('2020-05-03')))
console.log(task_foure.daysBetween(new Date('2023-08-06'), new Date('2023-08-23')))
