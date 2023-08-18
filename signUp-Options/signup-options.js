
const organizationSignUp = document.getElementById("organizationSignUp");
const userSignUp = document.getElementById("userSignUp");






organizationSignUp.addEventListener("click", function(){
    //showLoadingSpinner()
    window.location.href = "/Organization/signUp/signUp.html"
});



userSignUp.addEventListener("click", function(){
    //showLoadingSpinner()
    window.location.href="/User/signUp/signUp.html"
});


// const spinner = document.getElementById('loading-spinner');


