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

let arrObj=[
    {name:"Company1", 
    createdDate:1996,
    terminateDate:2000,
    annualRevenue:5},
    {name:"Company2", 
    createdDate:1990,
    terminateDate:2020,
    annualRevenue:1000000000},
    {name:"Company3", 
    createdDate:1970,
    terminateDate:2010,
    annualRevenue:5000},
    {name:"sompany4", 
    createdDate:1978,
    terminateDate:2005,
    annualRevenue:10000},
    {name:"Nompany5", 
    createdDate:1960,
    terminateDate:1980,
    annualRevenue:900000}
]

let revenueSum=arrObj.filter(comp=>comp.name.startsWith("Com") && comp.createdDate>1900 && comp.terminateDate<2025 && comp.annualRevenue>1000).reduce((prev, next)=>prev.annualRevenue+=next.annualRevenue);

console.log(revenueSum);
