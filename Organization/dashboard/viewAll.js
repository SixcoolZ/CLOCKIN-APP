const signInHeader = document.querySelector(".sigIns");
const viewAll = document.querySelector("#allSignIns");
const hideAll = document.querySelector("#closeAllSignIns");

viewAll.addEventListener("click", function(){
    hideAll.style.display = "flex";
    viewAll.style.display= "none";
    signInHeader.style.display = "block";

});
hideAll.addEventListener("click", ()=>{
    hideAll.style.display ="none";
    viewAll.style.display = "flex";
    signInHeader.style.display ="none"
})