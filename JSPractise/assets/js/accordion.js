let accs = document.querySelectorAll(".acc-title");
let accsContent = document.querySelectorAll(".acc-content");
//let id = document.querySelectorAll("#id");

let lastOpened;

accs.forEach(title => {
    title.addEventListener("click", function(){
     accsContent.forEach(content => {
        if (title.getAttribute("data-id")==content.getAttribute("id")){
            if(content.classList.contains("d-none")){
                content.classList.remove("d-none");
            } else {
                content.classList.add("d-none");
            }
        }
     });
    })
});