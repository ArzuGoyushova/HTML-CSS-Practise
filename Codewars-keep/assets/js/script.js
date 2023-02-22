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