// let num=parseInt(prompt());
// let arr=[1,2,true,"arzu"];
// for (let index = 0; index < arr.length; index++) {
//     console.log(`${arr[index]}`);
// }

// let sum=0;

// for (let index = 10; index <=50; index++) {
//     if(index%2==0){
//         sum=index++;
//     }
//     console.log(sum);
// }
// try{
//     const age=20;
//     age=22;
// } catch (error){
//     console.log(error.message);
//     throw new Error("error message")
// }
// let arr=[2,3,true,"20",12];
// let sum=0;

// for (let index = 0; index < arr.length; index++) {
//     if(typeof arr[index]=="number"){
//         sum+=arr[index];
//     }
//     console.log(sum);
// }
// let obj={
//     name:"Lorem",
//     surname:"Loremov",
//     age:25,
//     //address:Baki
// }
// obj.address="Baku";
// console.log(obj);

// let arr=[2,3, 20, 12];
// let max=arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]>max){
//         max=arr[i];
//     }
// }
// console.log(max);

//1.function 2.arrow funtions

// function Sum(num, num1){
//     return num+num1;
//     console.log("-----"); ////hem de voiddi
// }
// console.log(Sum(2,4));
// Sum(4,5);

// function FullName(name, surname){
//     return `${name} ${surname}`
// }
// console.log(FullName("lorem", "arzuasag",23,"ahsjah"));//ilk ikisini goturur

// function Sum(a,b,c=5) {
//     return a+b+c;
// }
// console.log(Sum(2,3));

// function Sum(a,b,c=4) {
//     return a+b+c;
// }
// console.log(Sum(2,3));

// function Sum() {
//     console.log(arguments);
// }
// console.log(Sum(2,3,4));


// function Sum() {
//     let sum=0;
//    let arr=Array.from(arguments);
//    for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     sum+=arr[i];
//    }
//    return sum;
// }
// console.log(Sum(2,3,4,12,14));


//console.log(sum(2,3)); //initialize olunmamish access yoxdu sum-a
// let sum=function(a,b) { //deyishen functiondi
//     return a+b;
// }
// //console.log(sum); //let ile teyin olunmush deyishen kimi qebul edir, func-} ekrana chixarir
// console.log(sum(2,3)); //burada deyer gorur ve hesablayir

// let obj={
//     name:"Lorem",
//     surname:"Loremov",
//     age:25,
//     getAge:function(){
//         return this.age; //bu obyektin age-i, this olmasa kenarda axtarir
//     },
//     fullInfo:function(){
//         return `${this.name} ${this.surname} ${this.age}`;
//     }
// }
// //obj.address="Baku";
// //console.log(obj.getAge());
// console.log(obj.fullInfo());

//arrow function ()=>{}

// let sum=a=>{

// } 

// let sum=(a,b)=>
//      a+b;
//     
//     console.log(sum(3,4));

// let sum=(a,b)=>{
// return a+b;
// }
// console.log(sum(3,4));

// let getAge=(age)=>{
// return {Age:age} //object qaytarir
// }
// console.log(getAge(25));

// let getAge=(age)=>({Age:age}) //qisa yazilish
// console.log(getAge(25));

// let getAge=(age)=>({age}) // lap qisa yazilish :D
// console.log(getAge(25));

//ferqler 

// let sum=()=>{
// arguments gormur, ozunden yuxarida chagirib ishletmek olmur
// }
// console.log(sum(3,4));


// let obj={
//     name:"Lorem",
//     surname:"Loremov",
//     age:25,
//     getAge:function(){
//         return this.age; //bu obyektin age-i, this olmasa kenarda axtarir
//     },
//     fullInfo:function(){
//         return `${this.name} ${this.surname} ${this.age}`;
//     },
//     getSurname:()=>{
//         return this.surname; //this ishlemir. gedir window-un ichine orada axtarir. tapa bilmir undefined qaytarir.
//     }
// }
// console.log(obj.getSurname());
// let day = 1;

// switch (day) {
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//         case 4:
//             console.log("thursday");
//             break;
//         case 5:
//             console.log("friday");
//             break;
//     default:
//         break;
// }

//func declaration arguments
function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    return sum
  }
  
  console.log(sumAllNums(1, 2, 3, 4)) // 10


  //arrow func doesn't scope arguments
const sumAllNums = (...args) => {
 // console.log(arguments), arguments object not found in arrow function
 // instead we use a parameter followed by spread operator (...)
 console.log(args)
}

sumAllNums(1, 2, 3, 4)
// [1, 2, 3, 4]


// function declaration

const sumAllNums = (...args) => {
  let sum = 0
  for (const element of args) {
    sum += element
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10

//anonymous
const anonymousFun = function() {
    console.log(
      'I am an anonymous function and my value is stored in anonymousFun'
    )
  }

//expression
//Expression functions are anonymous functions. After we create a function without a name and we assign it to a variable. To return a value from the function we should call the variable
const square = function(n) {
    return n * n
  }
  
  console.log(square(2))

//Self invoking functions are anonymous functions which do not need to be called to return a value.
(function(n) {
    console.log(n * n)
  })(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below
  
  let squaredNum = (function(n) {
    return n * n
  })(10)
  
  console.log(squaredNum)

