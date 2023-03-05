let boxes = document.querySelectorAll(".box");
let dragElement = document.getElementById("img");

boxes.forEach(box => {
    box.ondragover = function(e){
        e.preventDefault();
    }
    
    box.ondrop = function(){
        box.append(dragElement);
    }
});
