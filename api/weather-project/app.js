const express=require("express");
const https=require("https");
const app=express();

app.get("/",function (req,res) {
    const api_url="https://api.openweathermap.org/data/2.5/find?q=Mysuru&units=metric&appid=5f079803e5af34518c02d08c591af80b";

    https.get(api_url,function (api_resp) {
        console.log(api_resp);
      });
      res.send("working");
  });


app.listen(3000,function(){
console.log("Server started");
});