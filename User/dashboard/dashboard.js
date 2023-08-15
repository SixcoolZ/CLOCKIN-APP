const signInBtn = document.getElementById("signInBtn");
const signOutBtn = document.getElementById("signOutBtn");
const logOut = document.getElementById("logout");
const userTimeIn = document.getElementById("time-in");
const userTimeOut = document.getElementById("time-out");
const usersTimeINWeekly = document.getElementById("checkin-count");

const token = localStorage.token;
// let isLoggedIn = false;

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
            console.log(data);
        }).catch(error=>{
            console.log("error message==>", error)
        });  
  })
  
  //  console.log(latitude);6
  //  console.log(longitude);6
  },(error) => {
    console.error(error)
  })
}

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
          const date = new Date(data.createdAt);
          // const hours24 = date.getHours();
          // const minutes = date.getMinutes();

        // Convert to 12-hour format and determine AM/PM
          // const hours12 = hours24 > 12 ? hours24 - 12 : (hours24 === 0 ? 12 : hours24);
          // const amPm = hours24 >= 12 ? 'PM' : 'AM';

        userTimeIn.innerHTML = date.toLocaleTimeString();
            console.log(data);
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
            console.log(data);
        }).catch(error=>{
            console.log("error message==>", error)
        });  
})

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
          const date = new Date(data.updatedAt);
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