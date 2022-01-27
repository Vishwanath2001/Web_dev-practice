const express=require("express");
const bodyParser = require("body-parser");

const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set('view engine',"ejs");


var items=["Get up","Go to gym","Eat breakfast"];
app.get("/",function(req,res){
    var today=new Date();
    var currentDay=today.getDay();
    var day="";
    var options={weekday:'long',
                 month:'long',
                 day:'numeric'   
    
    };
    var today=new Date();
    day=today.toLocaleDateString("en-US",options);
    res.render('index',{frontDay:day,newItems:items});
    

    

});

app.post("/",function(req,res){
 var item=req.body.newItem
 items.push(item);

 res.redirect("/");
});

app.listen(3000,function(){
console.log("server started at 3000");
}); 


