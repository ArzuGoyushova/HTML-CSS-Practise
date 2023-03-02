"use strict"
//let result = document.getElementById("test");
//result.innerText="<h1>Aci</h1>";
//result.innerHTML="<h1>Aci</h1>";

// let boxes = document.getElementsByClassName("box"); //HTMLCollection qaytarir. 1 dene de olsa
//console.log(boxes)
// let divs = document.getElementsByTagName("div");

// let query = document.querySelector(".box"); //1ci bu classli elementi qaytarir
// console.log(query);

// let text = document.querySelector("#test p");
// console.log(text);

// let text = document.querySelectorAll("div"); //NodeList qaytarir
// text.forEach((value,index)=>{
//     value.innerText=index+1;
// })

//let div = document.getElementById("box");
// div.style.backgroundColor="red";
// div.style.width="200px";
// div.style.height="200px";
//div.className="d";
//div.className="c"; //override olur yuxaridakilar
// div.classList.add("d");
// div.classList.add("c"); //override olmur, yanina yazdirir

//div.classList.remove("c");
//let exist = div.classList.contains("c");
//console.log(exist); //varsa true

// function MakeAlert() {
//     alert("Salam");
// }

//let btn = document.getElementById("btn");
//btn.onclick=()=>alert("salam");
// btn.onclick=()=>alert("salamll"); //sonunucnu oxuyur

// btn.addEventListener("click", function(){ //override etmek olmur, 10 dene yazsan 10u da ishleyer
//     alert("clicked")
// })
// btn.addEventListener("lclick", function(){
//     alert("double clicked")
// })
//btn.onclick=()=>alert("salamll");

// let btn=document.getElementById("addBtn");
// let input=document.getElementById("textInput");
// let list=document.getElementById("itemList");
// let removeBtn=document.getElementById("removeBtn");

// btn.addEventListener("click", function(){
//     let value=input.value;
//     if (value==""){
//         alert("bosh qoyma");
//         return;
//     }
//     let li=document.createElement("li");
//     li.classList.add("list-group-item","liHover");
//     li.innerText=value;
//     li.onclick=()=>{
//         li.innerHTML="";
//         li.style.backgroundColor="white";
//         li.style.cursor="pointer";
//     }
//     list.appendChild(li);
//     // let li = `<li class="list-group-item">${value}</li>`;
//     // list.innerHTML+=li;
//     input.value="";
// })

// removeBtn.addEventListener("click", function(){
//     list.innerHTML="";
// })

// let btn=document.getElementById("addBtn");
// let input=document.getElementById("textInput");
// let list=document.getElementById("itemList");

// btn.addEventListener("click", function(){
//     let value=input.value;
//     list.innerHTML="";
//         for (let i = 1; i <= value; i++) {
//             let li=document.createElement("li");
//             li.className="list-group-item";
//             li.innerHTML=i;
//             list.appendChild(li);
//         }  
//     input.value="";
// })

// document.getElementById("add").onclick=function(){
//     let text=document.getElementById("text");
//     text.classList.toggle("test");
// }





// toplama.addEventListener("click", function(){ 
//      let number1=document.getElementById("number1").value;
//      let number2=document.getElementById("number2").value;
//     result.value=Number(number1)+Number(number2);
// })
// chixma.addEventListener("click", function(){ 
//     let number1=document.getElementById("number1").value;
//     let number2=document.getElementById("number2").value;
//    result.value=Number(number1)-Number(number2);
// })
// vurma.addEventListener("click", function(){ 
//     let number1=document.getElementById("number1").value;
//     let number2=document.getElementById("number2").value;
//    result.value=Number(number1)*Number(number2);
// })
// bolme.addEventListener("click", function(){ 
//     let number1=document.getElementById("number1").value;
//     let number2=document.getElementById("number2").value;
//     result.value=Number(number1)/Number(number2);
// })
// class buttons{
//     constructor(num1,num2){
//         let num1=document.getElementById("number1").value;
//         let num2=document.getElementById("number2").value;
//     }

  


   
// }



let toplama=document.getElementById("toplama");
let chixma=document.getElementById("chixma");
let vurma=document.getElementById("vurma");
let bolme=document.getElementById("bolme");
let result=document.getElementById("result");


let btns = document.querySelectorAll(".btn"); 
btns.forEach((btn) => {
    btn.onclick=function(){
        let number1=document.getElementById("number1").value;
let number2=document.getElementById("number2").value;
    let operator = btn.getAttribute("data-id");
        switch (operator) {
            case "+":
                result.value = Number(number1) + Number(number2);
                break;
            case "-":
                result.value= Number(number1) - Number(number2);
                break;
            case "*":
                result = Number(number1) * Number(number2);
                break;
                case ":":
                    result.value = Number(number1) / Number(number2);
                    break;
            default:
                break;
        }
    }
    
})
