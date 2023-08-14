const signInBtn = document.getElementById("signInBtn");
const signOutBtn = document.getElementById("signoutBtn");
const statusText = document.getElementById("status");
const userTimeIn = document.getElementById("content1-time");

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
   console.log(JSON.stringify({
    longitude: 7.7090961,
          latitude: 5.1900451
   }))
   signInBtn.addEventListener("click", function(){
    fetch('https://clockin-be.onrender.com/record',{
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
        body: JSON.stringify({
          longitude: 7.7090961,
          latitude: 5.1900451
        }),
      })
        .then((res) => res.json())
        .then((data) => {
        //  GeolocationPosition.userLocation.coords.latitude;
        //   GeolocationPosition.userLocation.coords.longitude;
            console.log(data);
        }).catch(error=>{
            console.log("error message==>", error)
        });  
  })
  
   console.log(latitude);
   console.log(longitude);
  },(error) => {
    console.error(error)
  })
}







    

  //   function signInAndSignOut(){
     
      
  // }



