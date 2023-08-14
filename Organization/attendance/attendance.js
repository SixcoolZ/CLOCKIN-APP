const backToDashboard = document.getElementById("dashboard");
const logout = document.getElementById("logout");

backToDashboard.addEventListener("click", function(){
    window.location.href = "/Organization/dashboard/dashboard.html";
});

logout.addEventListener("click", function(){
    window.location.href = "/Organization/signIn/signIn.html"
})