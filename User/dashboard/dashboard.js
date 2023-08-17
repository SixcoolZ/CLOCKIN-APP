const userDailyDate = document.getElementById("user-date");
const signInBtn = document.getElementById("signInBtn");
const signOutBtn = document.getElementById("signOutBtn");
const logOut = document.getElementById("logout");
const userTimeIn = document.getElementById("time-in");
const userTimeOut = document.getElementById("time-out");
const usersTimeINWeekly = document.getElementById("checkin-count");

const token = localStorage.token;
// let isLoggedIn = false;

let date = new Date();
userDailyDate.innerHTML = date.toLocaleDateString();

const data = {}
if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition((userLocation) =>{
    //  data[latitude] = userLocation.coords.latitude;
    // data[longitude] = userLocation.coords.longitude;
    const latitude = userLocation.coords.latitude;
   const  longitude= userLocation.coords.longitude;

   data.latitude = latitude;
   data.longitude = longitude;

   signInBtn.addEventListener("click", function(){
    fetch('https://clockin-be.onrender.com/record',{
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          timeInDate();
          usersTimeINWeekly.innerHTML = data.__v;
        //  GeolocationPosition.userLocation.coords.latitude;
        //   GeolocationPosition.userLocation.coords.longitude;
            // console.log(data);
        }).catch(error=>{
            console.log("error message==>", error)
        });  
  })
  
  //  console.log(latitude);6
  //  console.log(longitude);6
  },(error) => {
    alert(error.message);
    // console.error(error) 
  })
}
 
let checkInCount = document.getElementById('checkin-count')

function timeInDate(){
  fetch('https://clockin-be.onrender.com/record',{
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
        // body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          const date = new Date(data[0][0].createdAt);
           
            checkInCount.textContent = data[1].numberOfTimeIns;
            console.log(isDateWithinDay(data[0][0].createdAt));
            dailyDetails(data);

              // console.log(data[0])
          // const hours24 = date.getHours();
          // const minutes = date.getMinutes();

        // Convert to 12-hour format and determine AM/PM
          // const hours12 = hours24 > 12 ? hours24 - 12 : (hours24 === 0 ? 12 : hours24);
          // const amPm = hours24 >= 12 ? 'PM' : 'AM';

        userTimeIn.innerHTML = date.toLocaleTimeString();
            // console.log(data);
        }).catch(error=>{
            console.log("error message==>", error)
        });  
}


signOutBtn.addEventListener("click", function(){
  fetch('https://clockin-be.onrender.com/record',{
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
        // body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          timeOutDate()
        //  GeolocationPosition.userLocation.coords.latitude;
        //   GeolocationPosition.userLocation.coords.longitude;
            // console.log(data);
        }).catch(error=>{
            console.log("error message==>", error)
        });  
})

let checkOutCount = document.getElementById('checkout-count')

function timeOutDate(){
  fetch('https://clockin-be.onrender.com/record',{
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
        // body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          const date = new Date(data[0][0].updatedAt);
          checkOutCount.textContent = data[1].numberOfTimeOuts;
          dailyDetails(data);
          // const h\ours24 = date.getHours();
          // const minutes = date.getMinutes();
          

        // Convert to 12-hour format and determine AM/PM
          // const hours12 = hours24 > 12 ? hours24 - 12 : (hours24 === 0 ? 12 : hours24);
          // const amPm = hours24 >= 12 ? 'PM' : 'AM';

        userTimeOut.innerHTML = date.toLocaleTimeString();
            // console.log(data);
        }).catch(error=>{
            console.log("error message==>", error)
        });  
}
timeInDate();
timeOutDate();

logOut.addEventListener("click", function(){
  localStorage.token = null;
  window.location.href = "/User/signIn/signIn.html"
})

// Function to check if a date is within the start and end of the day
function isDateWithinDay(date) {
  const startOfDay = new Date();
  startOfDay.setHours(0,0,0,0);

  const endOfDay = new Date(startOfDay);
  endOfDay.setDate(startOfDay.getDate() + 1 );
  
  return date >= startOfDay && date <= endOfDay;
}

const userTimeDetails = document.getElementById("user-time-deatils");

function dailyDetails(data){
  data[0].forEach(user => {
    const userDetailsRight = document.createElement("div");
    userDetailsRight.classList.add("user-details");

    const userDetailsLeft = document.createElement("div");
    userDetailsLeft.classList.add("user-details");

const userDetail_1 = document.createElement("div");
userDetail_1.classList.add("iconsDiv")
const userDetailIcon = document.createElement("div");
userDetailIcon.setAttribute('class', 'bx bx-log-in');


const userDetailLeft_1 = document.createElement("div");
userDetailLeft_1.setAttribute("class", "iconsDiv")
const userDetailIconLeft = document.createElement("div");
userDetailIconLeft.setAttribute('class', 'bx bx-log-out');


const signInDay = document.createElement("div");
const signIn = document.createElement("h4");
signIn.textContent = "Sigin In";
signInDay.setAttribute("class","day");


const signOutDay = document.createElement("div");
const signOut = document.createElement("h4");
signOut.textContent = "Sigin Out";
signOutDay.setAttribute("class","day");

const day = document.createElement("p");
let date = new Date(user.createdAt);
day.innerHTML = date.toLocaleDateString();

// const date = new Date(user.createdAt);
// day.innerHTML = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;


const dayleft = document.createElement("p");
const dateLeft = new Date(user.updatedAt);
dayleft.innerHTML = dateLeft.toLocaleDateString();


const userDetail_2 = document.createElement("div");
const userTime = document.createElement("p");
userTime.innerHTML = date.toLocaleTimeString();


const userDetailLeft_2 = document.createElement("div");
const userTimeLeft = document.createElement("p");
userTimeLeft.innerHTML = date.toLocaleTimeString();









signInDay.append(signIn, day);
signOutDay.append(signOut, dayleft);


userDetail_1.append(userDetailIcon, signInDay);
userDetailLeft_1.append(userDetailIconLeft, signOutDay);


userDetail_2.appendChild(userTime);
userDetailLeft_2.appendChild(userTimeLeft);


userDetailsRight.append(userDetail_1, userDetail_2);
userDetailsLeft.append(userDetailLeft_1, userDetailLeft_2);


userTimeDetails.append(userDetailsRight, userDetailsLeft);
  });

}





const toggle = document.querySelector("#toggle");
const hideAll = document.querySelector("#toggle-up");

toggle.addEventListener("click", function(){
    hideAll.style.display = "flex";
    toggle.style.display= "none";
    userTimeDetails.style.display = "block";

});
hideAll.addEventListener("click", ()=>{
    hideAll.style.display ="none";
    toggle.style.display = "flex";
    userTimeDetails.style.display ="none"
})