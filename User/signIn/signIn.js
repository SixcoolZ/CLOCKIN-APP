const form = document.getElementById('form')

form.addEventListener("submit", function(e){
    e.preventDefault();
    const formInputs = e.currentTarget;
    const formData = new FormData(formInputs);
    const data = Object.fromEntries(formData.entries());   
 console.log({data})

    if(password.value.length < 6 || password.value.length > 18){
        alert("Your password must be less than 18 charcters  \n and greater than 5 characters");
    }

    else{
        showLoadingSpinner()
            SignIn(data)
        
    }

})


   function SignIn(data){
    fetch("https://clockin-be.onrender.com/auth/signin/", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(data)
    }).then((res) => res.json())
    .then(data => {
        console.log({data})
        localStorage.setItem("token", data.token)
        showLoadingSpinner();
        // localStorage.setItem("email", data.email)
        if(data.token){
            window.location.href = ("/User/dashboard/dashboard.html");

        }

    }).catch(error => { 
        hideLoadingSpinner() 
        alert(error.message);
    }).finally(()=>{
        hideLoadingSpinner
        
    })
    
}


const spinner = document.getElementById('loading-spinner');
let btn = document.getElementById('continue');


function showLoadingSpinner() {
    btn.setAttribute('disabled', true)
    spinner.style.display = 'block';
  }
  
  function hideLoadingSpinner() {
    // btn.setAttribute('disabled', false)
    spinner.style.display = 'none';
  }
  
  // Simulate some delay and then hide the spinner
  setTimeout(hideLoadingSpinner, 3000);







