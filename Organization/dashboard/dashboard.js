const companyId = document.getElementById("company__id");
const companyName = document.getElementById("company__name");
const attendance = document.getElementById("attendance");
const logOut = document.getElementById("logout");
// const comapanyID = localStorage.orgCode ;


document.addEventListener('DOMContentLoaded', () => {
 
    fetch('https://clockin-be.onrender.com/org',{
        method: "GET",
        headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
    }
    
    }).then((response) => response.json())
    .then((data) => {
        // console.log({data})
        companyName.innerHTML = data.name
    companyId.innerHTML = data.org_code;
    
    });
    

});         

attendance.addEventListener("click", function(){
    window.location.href ="/Organization/attendance/attendance.html"
});

logOut.addEventListener("click", ()=>{
    window.location.href = "/Organization/signIn/signIn.html"
})