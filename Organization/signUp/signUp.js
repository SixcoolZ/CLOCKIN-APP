const password = document.getElementById("companyPassword");
const form = document.getElementById("form");
const Continue = document.getElementById("continue");
const loginOption = document.getElementsByTagName("em")[0];
const companyLocation = document.getElementsByClassName("companyLocation");



//getlocation of comapany
// const getLocation = document.querySelector("#continue")

form.addEventListener("submit", function(e){
    e.preventDefault();
    const formInputs = e.currentTarget;
    const formData = new FormData(formInputs);
    const data = Object.fromEntries(formData.entries());
    localStorage.setItem("password", data.password);
    
    
 

    if(password.value.length < 6 || password.value.length > 18){
        alert("Your password must be less than 18 charcters  \n and greater than 5 characters");
    }

    else{
        
            
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((companyLocation) =>{
                data.latitude= companyLocation.coords.latitude;
                data.longitude = companyLocation.coords.longitude;
                data.role = "org";
                delete data.checkbox;
                
                showLoadingSpinner();
                addCompany(data);
    
            },(error)=>{
                 alert(`Error Code: ${error.code}  Error Message: ${error.message} \n
                Solution:  Enable Your Location To Continue`)
            })
            
           
         
           form.reset()
           

        }
    }

})



//  addCompany(data)


function addCompany(data){
    fetch('https://clockin-be.onrender.com/auth/signup',{
        method: "POST",
        headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify(data),
  
  })
    .then((res) => res.json())
    .then((data) => {
        console.log({data})
         localStorage.setItem("token", data.token);
         showLoadingSpinner();
        window.location.href ="/Organization/signUp/confirmation.html"
    })

    .catch(error=>{
        alert("error message", error);
        hideLoadingSpinner() 
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

loginOption.addEventListener("click", function(){

   window.location.href ="/Organization/signIn/signIn.html"
})


