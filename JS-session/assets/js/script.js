let dboxes = document.querySelectorAll(".dbox");

let dragElements =document.querySelectorAll("data-id");

let currentId;

dboxes.forEach(dbox => {
    dbox.ondragover=(function (e) {
        e.preventDefault();
    })
    dbox.ondrop=function(){
        dragElements.forEach(element => {
            element.ondragstart=function(){
                currentId=element.setAttribute("data-id");
                console.log(currentId);
            }
            element.ondragend=function(){
                if (currentId==dbox.getAttribute("id")){
                    dbox.append(element);
                }
            }
        });
       
    }
    
});