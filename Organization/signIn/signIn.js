const form = document.getElementById('form')

form.addEventListener("submit", function(e){
    e.preventDefault();
    const formInputs = e.currentTarget;
    const formData = new FormData(formInputs);
    const data = Object.fromEntries(formData.entries());

        SignIn(data);
        form.reset();
})

   function SignIn(data){
    fetch("https://clockin-be.onrender.com/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(data)
    }).then((response) => response.json())
    .then(data => {
        console.log({data})
        localStorage.setItem("token", data.token)
        localStorage.setItem("email", data.user.email)
        localStorage.setItem("password", data.password)
        if(data.token){
            window.location.replace("/User/dashboard/dashboard.html") 

        }
        
        else{
            window.location.href = "/";

        }
    })
}
