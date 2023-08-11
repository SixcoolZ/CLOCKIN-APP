let token = localStorage.getItem("token");
const totalUser = document.querySelector("#total__user");
const TodaysSignIn = document.querySelector("#number-OfSignin-PerDay");
const comapanyID = document.querySelector("#company__id");


fetch('https://clockin-be.onrender.com/record/organization',{
    method: "GET",
    headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
    }
}).then((response) => response.json())
.then((data) => {
    comapanyID.innerHTML = data.code
    totalUser.innerHTML = data.totalUsers;
    TodaysSignIn.innerHTML = data.recordedToday;

})