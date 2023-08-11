const companyId = document.getElementById("company__id");
const companyName = document.getElementById("company__name");
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
        console.log({data})
        companyName.innerHTML = data.name
    companyId.innerHTML = data.org_code;
    
    });
    

});         

