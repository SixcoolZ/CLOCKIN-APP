
const timeInDate = document.querySelector(".Date");
const names = document.querySelector(".Name");
const timeIn = document.querySelector(".Clock-In");
const timeOut = document.querySelector(".clock-out");
// const eachDate = document.querySelectorAll(".eachDay")
console.log(eachDate);

fetch("https://clockin-be.onrender.com/record/all",{
  method:"GET",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(data)
}).then((res) => res.json())
.then(data => {
  console.log({data})
  data.forEach(user => {
   let eachName = document.createElement("p");
   let eachTimeIn = document.createElement("p");
   let eachTimeOut = document.createElement("p");
    eachName.innerHtml = user.name;
    eachTimeIn.innerHTML = user.time_in;
    eachTimeOut.innerHTML = user.time_Out
    names.appendChild(eachName);
  });
  


})