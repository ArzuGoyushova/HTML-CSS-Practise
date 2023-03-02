const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// grandparent.addEventListener('click', e => {
//     console.log(e.target);
// })

// grandparent.addEventListener('click', e => {
//     console.log("gr 1");
// },
// {capture:true} //default false, normalda child,parent,gr chixmali idi ama gr capture olur deye birinci o chixir. sonra child,parent
// )
// // grandparent.addEventListener('click', e => {
// //     console.log("gr 2");
// // })

// parent.addEventListener('click', e => {
//     console.log("parent");
// })

// child.addEventListener('click', e => {
//     console.log("child");
// }) //ichindedi deye hamisini chixardir. event bubbling adlanir.
// //event capturing ise yuxaridan ashagi hereket edir. bubble eksine

// grandparent.addEventListener('click', e => {
//     console.log("gr capture");
// },
// {capture:true} 
// )
// grandparent.addEventListener('click', e => {
//      console.log("gr bubble");
// })


// parent.addEventListener('click', e => {
//     e.stopPropagation();
//     console.log("parent capture");
// },
// {capture:true} 
// )
// parent.addEventListener('click', e => {
//      console.log("parent bubble");
// })


// child.addEventListener('click', e => {
//     console.log("child capture");
// },
// {capture:true} 
// )
// child.addEventListener('click', e => {
//      console.log("child bubble");
// })

//gr capture, parent capture, child capture, child bubble, parent bubble, gr bubble

//eventi saxlamaq uchun stopPropogation(), bax parente yuxarida


//eventi 1 defe run etmek uchun {once:true}

// grandparent.addEventListener('click', e => {
//      console.log("gr bubble");
// })

// parent.addEventListener('click', e => {
//      console.log("parent bubble");
// },{once:true})

// child.addEventListener('click', e => {
//      console.log("child bubble");
// })


//eventi remove etmek uchun 

// grandparent.addEventListener('click', e => {
//      console.log("gr bubble");
// })

// parent.addEventListener('click', sayHi);

// setTimeout(() => {
//     parent.removeEventListener('click', sayHi);
// }, 2000);


// child.addEventListener('click', e => {
//      console.log("child bubble");
// })

// function sayHi(){
//     console.log("Hi");
// }

const divs = document.querySelectorAll("div");

// divs.forEach(div => {
//     div.addEventListener('click', () => {
//         console.log("hi");
//     })
// }); bu silinir

// document.addEventListener('click', e =>{
//     if (e.target.matches("div")){
//         console.log("hi");
//     }
// })
//daha yaxshi formada

addGlobalEventListener("click", "div", e => {
    console.log("hi");
})

function addGlobalEventListener(type,selector,callback){
    document.addEventListener(type, e => {
        if(e.target.matches(selector)){
            callback(e);
        }
    })
}


//yuxaridaki eventListener ashagidakina tesir etmeyecek, etmesi uchun delegation istifade olunur
const newDiv = document.createElement('div');
newDiv.style.width="200px";
newDiv.style.height="200px";
newDiv.style.backgroundColor="purple";
document.body.append(newDiv);