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
            SignIn(data)
        
    }

})


   function SignIn(data){
    fetch("https://clockin-be.onrender.com/org", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(data)
    }).then((res) => res.json())
    .then(data => {
        console.log({data})
        // localStorage.setItem("token", data.token)
        // localStorage.setItem("email", data.email)
        if(data.token){
            window.location.href = ("/User/dashboard/dashboard.html");

        }
        else{
            window.location.href = "/";

        }
    })
}







