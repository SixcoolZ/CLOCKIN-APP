const password = document.getElementById("password");
const form = document.getElementById("form");
const signUp = document.getElementById("submit");
const loginOption = document.getElementsByTagName("a")[0];



form.addEventListener("submit", function(e){
    e.preventDefault();
    const formInputs = e.currentTarget;
    const formData = new FormData(formInputs);
    console.log({formData})

    const data = Object.fromEntries(formData.entries());
    
    if(password.value.length < 6 || password.value.length > 15){
        alert("Your password must be less than 15 charcters  \n and greater than 5 characters");
    }

    else{
        
        addUser(data);
        form.reset();
    }

})


function addUser(data){
    fetch('https://clockin-be.onrender.com/auth/signup',{
        method: "POST",
        headers: {
      "Content-Type": "application/json",
    //   Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  
  })
    .then((res) => res.json())
    .then((data) => {
        window.location.href ="/User/dashboard/dashboard.html";
    }).catch(error=>{
        console.log("error message==>", error)
    });
}



loginOption.addEventListener("click", function(){

    location.href ="/User/signIn/signIn.html"
})
