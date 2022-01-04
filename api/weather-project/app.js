const express=require("express");
const https=require("https");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function (req,res) {
   res.sendFile(__dirname+"/index.html");
  });

  app.post("/",function(req,res){

    const query=req.body.cityName;

    
    const api_url="https://api.openweathermap.org/data/2.5/weather?q="+ query+"&units=metric&appid=5f079803e5af34518c02d08c591af80b";
    console.log(api_url);
  https.get(api_url,function (api_resp) {
      
      
      api_resp.on("data",function(data){

          const weather_details=JSON.parse(data);
          const query_found=weather_details.cod;
          console.log(query_found);
          

          if(query_found==200){
          const temperature=weather_details.main.temp;
          const descri=weather_details.weather[0].description;
          //console.log(temperature);

          const iconid=weather_details.weather[0].icon;
          const icon_url="http://openweathermap.org/img/wn/"+iconid+"@2x.png";
          res.setHeader("Content-Type", "text/html");
          res.write("<h3>The weather is "+descri +"</h3>");
          res.write("<h1>The temparature in city "+query +" is"+ temperature+"</h1>");
          res.write("<img src="+ icon_url+">"); 
          
            }
        else{
          res.write("<h1>Oh snap did not find that city</h1>");
        }
        res.send();

    });
  });
    
    
  });



app.listen(3000,function(){
console.log("Server started");
});