// let arr=[1,2,3,4,5];

// arr.push(6);
// arr.pop();
// arr.shift();
// arr.unshift(10);

// console.log(arr);

// (function Sum(num1,num2) {
//     console.log(num1+num2);
// })(2,3); //immediately call functions


// function Return(arr) {
//     for (let i = 0; i < arr.length; i++) {
//             arr[i]=arr[i]+5;
//     }
// }

// Return(arr=[1,2,3,4,5]);
// console.log(arr);

// function Sum(arr, cb){
//     let newArr=[];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(cb(arr[i]));
//     }
//     return newArr;
// }
// console.log(Sum([1,2,3,4],n=>n*3)); //callback function

let arr=[1,2,3,5];

// arr.map(val=>{
//     let sum=0;
//     return sum+=val;
// })
//console.log(arr[3][2]);

// arr.forEach((value,index,array)=>{
//     console.log(array);
// })

//let newArr=arr.map((value,index,array)=>{

//});

// let newArr=arr.map((value,index,array)=>value+5);
// console.log(newArr);

// let newArr = arr.map((value, index, arr)=>({val:value}));
// console.log(newArr);

// let newArr=arr.filter(value=>value>=2 && value!=3); //predicate. 2den boyuk elementlerden yeni array duzeldib qaytarir
// console.log(newArr); //daha chox elementi silmek uchun istifade olunur

// let sum=arr.reduce((total, value)=>total+=value,10); //10 default for total
// console.log(sum);

// let mult=arr.reduce((prev, next)=>{
//     return prev*=next;
// },10)
// console.log(mult);

// let users=[
//     {name:"Aci", salary:7000},
//     {name:"Aci2", salary:5000},
//     {name:"Aci3", salary:2000},
//     {name:"Aci4", salary:1000},
// ]

// let newUsers=users.filter(user=>user.salary>2000);
// console.log(newUsers);

//let sumSalary=users.filter(user=>user.salary>2000).reduce((prev,next)=>prev.salary+=next.salary);
//console.log(sumSalary);

// let check=arr.every(value=>value>=1); //her bir element sherti odemelidir
// console.log(check); //true qaytarir

//let check=arr.some(value=>value>=3); //hech olmasa bir element sherti odemelidir
// console.log(check); //true qaytarir

let string = "loReM m ";
//let string = "loRem \'m\'";
//let word = new String("ipsum");

// console.log(string.length);
// console.log(string.toLowerCase());
// console.log(string.toUpperCase());
// console.log(string.trim());
// console.log(string.trimStart());
// console.log(string.trimEnd());
// console.log(string.indexOf("m")); //birincini qaytarir
// console.log(string.lastIndexOf("m")); //sonuncunu qaytarir
// console.log(string.includes("lorem")); //false
// console.log(string.concat("salam","sagol")); //sona yapishdirir
// console.log(string.endsWith("m"));  //bu herfle bitir mi? true
// console.log(string.startsWith("j"));
// console.log(string.split(" ")); //2 indexli massiv
// console.log(string.split(" ").join(", ")); //loRem, m
//console.log(string.slice(0,3)); //eger 0dan bashlasa sonuncu index daxil deyil (yeni 0,1,2ci indexleri chap edir)
//console.log(string.substring(4,5)); //4cu ve 5ci indexde duran
//console.log(string.slice(string.indexOf("o"),3));
//let num=5.129;
//console.log(num.toFixed); yuvarlaqlashdirir
//console.log(string.match("m"));
//console.log(string.replace("m", "ponchik"));
// console.log(string.replace(/m/i, "ponchik")); //birincini deyishir, boyuk de olsa
// console.log(string.replace(/m/gi, "ponchik")); //hamisini deyishir

// let arrObj=[
//     {name:"Company1", 
//     createdDate:1996,
//     terminateDate:2000,
//     annualRevenue:5},
//     {name:"Company2", 
//     createdDate:1990,
//     terminateDate:2020,
//     annualRevenue:1000000000},
//     {name:"Company3", 
//     createdDate:1970,
//     terminateDate:2010,
//     annualRevenue:5000},
//     {name:"sompany4", 
//     createdDate:1978,
//     terminateDate:2005,
//     annualRevenue:10000},
//     {name:"Nompany5", 
//     createdDate:1960,
//     terminateDate:1980,
//     annualRevenue:900000}
// ]

// let revenueSum=arrObj.filter(comp=>comp.name.startsWith("Com") && comp.createdDate>1900 && comp.terminateDate<2025 && comp.annualRevenue>1000).reduce((prev, next)=>prev.annualRevenue+=next.annualRevenue);

// console.log(revenueSum);

// let us check if a banana exist in the array

// const fruits = ['banana', 'orange', 'mango', 'lemon']
// let index = fruits.indexOf('banana')  // 0

// if(index === -1){
//    console.log('This fruit does not exist in the array')  
// } else {
//     console.log('This fruit does exist in the array')
// }
// // This fruit does exist in the array

// // we can use also ternary here
// index === -1 ? console.log('This fruit does not exist in the array'): console.log('This fruit does exist in the array')

// // let us check if an avocado exist in the array
// let indexOfAvocado = fruits.indexOf('avocado')  // -1, if the element not found index is -1
// if(indexOfAvocado === -1){
//    console.log('This fruit does not exist in the array')  
// } else {
//     console.log('This fruit does exist in the array')
// }
// // This fruit does not exist in the array

// let indexOfLemon = fruits.indexOf('lemon');
// indexOfLemon === -1 ? console.log("Doesn't exist") : console.log("exists");

// const numbers = [1, 2, 3, 4, 5, 6]
// numbers.splice(3, 3, 7, 8, 9)
// console.log(numbers.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items


// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']
// const fullStack = [frontEnd, backEnd]
// console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
// console.log(fullStack.length)  // 2
// console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
// console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]

// let nums = [1,2,3,4,5,6]
// console.log(nums.splice(0,nums.length-1));

// let nums2 = [1,2,3,4,5,6]
// console.log(nums2.slice(0,nums2.length-1));

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//1
countries.forEach(con=>console.log(con));
//2
numberss.forEach(num=>console.log(num));
//3
console.log(countries.map(value=>value.toUpperCase()));
//4
console.log(countries.map(value=>value.length));
//5
console.log(numberss.map(value=>value*value));
//6
console.log(products.map(value=>value.price));
//7
console.log(countries.filter(con=>con.includes("land")));
//8
console.log(countries.filter(con=>con.length==6));
//9
console.log(products.filter(pri=>pri.price!='' && pri.price!=' '));
//10
console.log(numberss.reduce((prev,next)=>prev+next,0));
//11
console.log(countries.reduce((prev,next)=>prev + " " + next),"are north European countries");
//12
console.log(countries.findIndex(value=>value=="Norway"));
//13
console.log(products.filter(pri=>pri.price!='' && pri.price!=' ').reduce((prev,next)=>prev+next.price,0));
//14
function categorizeCountries(arr) {
    return arr.filter(value=>value.includes("land"));
}
console.log(categorizeCountries(countries));
//15
function  getLastThreeCountries(arr) {
   return arr.slice(-3);
}
console.log( getLastThreeCountries(countries));
