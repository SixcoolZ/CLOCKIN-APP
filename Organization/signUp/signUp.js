const password = document.getElementById("companyPassword");
const form = document.getElementById("form");
const Continue = document.getElementById("continue");
const loginOption = document.getElementsByTagName("em")[0];



form.addEventListener("submit", function(e){
    e.preventDefault();
    if(password.value.length <= 6 || password.value.length >= 15){
        alert("Your password must be less than 15 charcters  \n and greater than 6 characters")
    }
    else{
        location.href ="/Organization/signUp/confirmation.html"
    }
})

loginOption.addEventListener("click", function(){

    location.href ="/Organization/signIn/signIn.html"
})