//multiples-codewars-1
// function findMultiples(integer, limit) {
//     let array = new Array() ;
//     for (let i=integer; i<=limit; i++){
//       if (i%integer==0){
//         array.push(i);
//       }
//     }
//     return array;
//   }
//   console.log(findMultiples(2,26));


//   var flatten = function (array){
//         return [].concat.apply([],array);
//       }
  
//   console.log(flatten([[[1,2,3]]]));

//   var capitals = function (word) {
// 	let arr=[];
//   for (let i=0; i<word.length; i++){
//     if(word[i].match(/[A-Z]/)){
//         arr.push(i);
//     }
//   }
//   return arr;
// };
// console.log(capitals("AdkgaJAdjs9kB"));

// function filter_list(l) {
//     return l.filter(item => typeof item === 'number');
//   }
//   console.log(filter_list([1,2,'aasf','1','123',123]));


// function maskify(cc) {
//     return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
//   }
//  console.log(maskify("12345678910"));


//  function collatz(n) {
//     let narr=[n];
//     while(n!=1){
//         if(n%2==0){
//             n/=2;
//             narr.push(n);
//         } else {
//             n=n*3+1;
//             narr.push(n);
//         }
//     }
//     return narr;
//   }
//   console.log(collatz(20));

//   function digitize(n) {
//     let arr=[];
//     let str=n.toString();
//     for (let i = 0; i < str.length; i++) {
//         arr.push(Number.parseInt(str[i]));
//     }
//     return arr.reverse();
//   }
//   console.log(digitize(62745));

//   function digitize(n) {
//     return String(n).split('').map(Number).reverse()
//   }
// function getEvenNumbers(numbersArray){
//     return numbersArray.filter(x=>x%2==0);
//   }
//   console.log(getEvenNumbers([2,4,5,6]));


// class Animal {
//     constructor(name, type) {
//       this.name = name;
//       this.type = type;
//     }
//     toString() {
//       return `${this.name} is a ${this.type}`;
//     }
//   }

//   var dog = new Animal("Max", "dog");
//   console.log(dog.toString());

// function sumTwoSmallestNumbers(numbers) { 
//   return Math.min(...numbers)+Math.min(...numbers.filter(num=>num!=Math.min(...numbers)));
//   }
//   console.log(sumTwoSmallestNumbers([10,2,3,4,5,6]));

  // function addLength(str) {
  //   return str.split(' ').map((value)=>value + " " + value.length);
  //   }
  //   console.log(addLength("arzu manui"));

  // function countDevelopers(list) {
  //   return list.filter(val=>val.continent=="Europe" && val.language=="JavaScript").length;
  // }

  // function validatePIN (pin) {
  //   var n = pin.length;
  //   if( n != 4 && n != 6)
  //       return false;
  //   for (var i in pin)
  //       if (pin[i] > '9' || pin[i] < '0')
  //           return false;
  //   return true;
  // }
  // console.log(validatePIN("4554"));

// function splitTheBill(x) {
//   let values = Object.values(x).map(value => value - Object.values(x).reduce((prev, next) => prev + next) / 3);
//   let keys = Object.keys(x);
//   let newObj = {};
//   for (let i = 0; i < Object.keys(x).length; i++) {
//     newObj[keys[i]] = values[i];
//   }
//   console.log(newObj);
// }
// splitTheBill({ A: 20, B: 15, C: 10 });

// function fill_gaps(timesheet) {
// 	for (let i = 0; i < timesheet.length; i++) {
//     if(timesheet[i]==null){
//       if((timesheet[i-1]==timesheet[i+1])||timesheet[i-1]==null || timesheet[i+1]==null){
//         timesheet[i]=timesheet[i-1];
//       }
//     }
//   }
//   console.log(timesheet);
// }
// fill_gaps([1,null,1]) // -> [1,1,1] 
// fill_gaps([1,null,null,null,1]) // -> [1,1,1,1,1]  # There may be multiple nulls
// fill_gaps([1,null,1,2,null,2]) // -> [1,1,1,2,2,2]  # There may be multiple replacements required
// fill_gaps([1,null,2,null,2,null,1]) //-> [1,null,2,2,2,null,1]  # No nesting.
// fill_gaps([1,null,2]) //-> [1,null,2] # No replacement if ends don't match
// fill_gaps([null,1,null]) //-> [null,1,null] # No replacement if ends don't match off the ends of the array

// function accum(s) {
// 	let arr = s.split("");
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//       let el = arr[i].repeat(i+1);
//         arr2.push(el.charAt(0).toUpperCase() + el.slice(1).toLowerCase());    
//   }
//   let str = arr2.join("-");
//   console.log(str);
// }
// accum("ZpglnRxqenU");

function getMiddle(s)
{
  let l = s.length;
  if (l%2==0){
    return s.charAt(l/2-1)+s.charAt(l/2);
  } else {
    return console.log(s.charAt(l/2))
  }
}

getMiddle("test");
getMiddle("A");