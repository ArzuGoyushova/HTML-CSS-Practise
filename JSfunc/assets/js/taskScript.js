// let number=Number(prompt("Please enter a number:"));
// let check=x=>x%21==0;
// console.log(check(number));



// function SumOfEven(){
//     let sum=0;
//     let array=Array.from(arguments);
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         if(element%2==0){
//             sum+=element;
//         }
//     }
//     return sum;
// }
// console.log(SumOfEven(1,2,3,4,5,6));

// function SumOfEven(){
//     let sum=0;
//     let array=Array.from(arguments);
//     array.forEach(element => element%2==0 {
//         if(){
//         sum+=element; }
//     });
//     return sum;
// }
// console.log(SumOfEven(1,2,3,4,5,6));


    // if((number%10)*100  + ((number-((number%10)*100))%10) + ((((number-((number%10)*100))-(number-((number%10)*100)%10))%10)*10)==number){
    //     return true;
    // } 

let number=Number(prompt("Please enter a number:"));

function Pal(number) {
    var rem, temp, final = 0;
		temp = number;
		while(number!=0)
		{
			rem = number%10;
			number = parseInt(number/10);
			final = final*10+rem;
		}
		if(final==temp)
		{
			return true;
		}
		else
		{
			return false;
		}
}
console.log(Pal(number));