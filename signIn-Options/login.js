const organizationLogIn = document.getElementById("organizationLogIn");
const userLogin = document.getElementById("userLogin");






organizationLogIn.addEventListener("click", function(){
    showLoadingSpinner()
    window.location.href = "/Organization/signIn/signIn.html"
});



userLogin.addEventListener("click", ()=>{
    showLoadingSpinner()
    window.location.href="/User/signIn/signIn.html"
});


const spinner = document.getElementById('loading-spinner');
let btn = document.getElementById('organizationLogIn');
let userBtn = document.getElementById("userLogin");


function showLoadingSpinner(){
     btn.setAttribute('disabled', true);
     userBtn.setAttribute('disabled', true)
    spinner.style.display = 'block';
  }
  
  function hideLoadingSpinner(){
    // btn.setAttribute('disabled', false)
    spinner.style.display = 'none';
  }