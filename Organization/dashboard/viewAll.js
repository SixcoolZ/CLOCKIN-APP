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
});

const allSignIn = document.querySelector(".sigIns")

token = localStorage.token

let count = 0
fetch("https://clockin-be.onrender.com/record/all", {
    method: "GET",
    headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
    },
        // body: JSON.stringify(data)
    }).then((response) => response.json())
    .then(data => {
        // console.log(data)
        data.forEach(user => {
            const all = document.createElement("div");
            all.setAttribute("id", "allNames");
            const serialNumber = document.createElement("p");
            const names = document.createElement("p");
            const timein = document.createElement("p");
            const timeOut = document.createElement("p");
            serialNumber.innerHTML = ++count;
            names.innerHTML = user.user.name;

            let date = new Date(user.createdAt);
            timein.innerHTML = date.toLocaleTimeString();

            let timeOutTime = new Date(user.updatedAt);
            

            timeOut.innerHTML = timeOutTime.toLocaleTimeString();

            all.append(serialNumber, names, timein, timeOut);
            allSignIn.appendChild(all)
        });
})