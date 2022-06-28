// 01
// const array = [1,2,3,4,5]

// const double = array.map((number) => {
//     return number * 2
// })

// console.log(double)

// 02
// const longNames = [
//     {
//         firstName: "Jane",
//         lastName: "Doe"
//     },
//     {
//         firstName: "John",
//         lastName: "Smith"
//     }
// ]

// const shortNames = longNames.map((name) =>{
//     return({
//         name: `${name.firstName} ${name.lastName}`
//     })
// })

// console.log(shortNames)

// 03
// const array = [1, "toto", 34, "JavaScript", 8]

// const numbers = array.filter((number) => {
//     return(number > 0)
// })

// console.log(numbers)

// 04
// const numbers = [1,2,3,4,5,6,7,8]

// const even = numbers.filter((number) =>{
//     return(number % 2 === 0)
// })

// console.log(even)

// 05
// const cakes = [
// 	{
// 		name: "cake",
// 		flavor: "vanilla",
// 		status: "available"
// 	},
// 	{
// 		name: "brownie",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// 	{
// 		name: "pie",
// 		flavor: "strawberry",
// 		status: "available"
// 	},
// 	{
// 		name: "muffin",
// 		flavor: "pistachio",
// 		status: "available"
// 	},
// 	{
// 		name: "donut",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// ]

// const chocolateCake = cakes.filter((flavor) => {
//     return(flavor.flavor === "chocolate")
// })

// const soldOut = chocolateCake.map((cake) => {
//     return({
//         name: `${cake.name}`, flavor: `${cake.flavor}`, status: "sold out !"
//     })
// })

// console.log(soldOut)

// 06
// const cakes = [
// 	{
// 		name: "cake",
// 		flavor: "vanilla",
// 		status: "available"
// 	},
// 	{
// 		name: "brownie",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// 	{
// 		name: "pie",
// 		flavor: "strawberry",
// 		status: "available"
// 	},
// 	{
// 		name: "muffin",
// 		flavor: "pistachio",
// 		status: "available"
// 	},
// 	{
// 		name: "donut",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// ]

// const pie = cakes.find((cake) => {
//     return cake.name === "pie"
// })

// console.log(pie)

// 07

// const arrayNumbers = [1,2,3,4,5,6,7,8,9]
// let result = 1
// arrayNumbers.forEach((number) => {
//     result *= number
// })

// console.log(result)

// 08
// let boxes = [0,1,2,3,4,5,6,7]

// boxes.forEach((box, index) => {
//     let row = ""
    
//     boxes.forEach((indexLine) => {
//         if((indexLine + index) % 2 === 0){
//             row += "[ ]"
//         }else{
//             row += "[X]"
//         }
//     })
//     console.log(row)
// })
