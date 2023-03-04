let loginButton = document.getElementById("loginBtn");
let emailInput = document.getElementById("exampleInputEmail1");
let passwordInput = document.getElementById("exampleInputPassword1");

loginButton.addEventListener("click", function(e){
    e.preventDefault();
    if(emailInput.value==""){
        document.getElementById("emailBosh").classList.remove("d-none");
    }
    else if(passwordInput.value==""){
        document.getElementById("passwordBosh").classList.remove("d-none");
    } else{
        alert("Logged");
    }
})

loginButton.append(divkdrlykhe);