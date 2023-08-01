function validate(){
    let username = document.getElementById(email).value;
    let password = document.getElementById(password).value;
    let companyId = document.getElementById(companyid).value;

    if(email === "" && password === ""){
        alert('login successfully');
    }else{
        alert('Login failed')
    }
}