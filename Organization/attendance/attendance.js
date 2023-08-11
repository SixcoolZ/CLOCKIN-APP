
fetch("https://clockin-be.onrender.com/record/all",{
  method:"GET",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(data)
}).then((res) => res.json())
.then(data => {
  console.log({data})


})