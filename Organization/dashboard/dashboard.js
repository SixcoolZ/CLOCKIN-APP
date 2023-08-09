const companyId = document.getElementById("company__id");
const comapanyID = localStorage.orgCode ;


fetch('https://clockin-be.onrender.com/org',{
    method: "GET",
    headers: {
    "Content-Type": "application/json; charset=UTF-8",
    // Authorization: `Bearer ${comapanyID}`,
}

}).then((response) => response.json())
.then(() => {
companyId.innerHTML = comapanyID;

})


fetch("http://localhost:8080/record/organization",{
    method: "GET",
    headers: {
        "Content-Type": "application/json; charset=UTF-8",
    }
}).then((response) => response.json())
.then((data) => {
    console.log(data);
})