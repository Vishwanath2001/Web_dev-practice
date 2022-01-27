const express=require("express");
const bodyParser = require("body-parser");

const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set('view engine',"ejs");


var items=["Get up","Go to gym","Eat breakfast"];
var Workitems=[];
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
 let identifier=req.body.list;
 console.log(req.body);
 if(identifier==="Work")
 {
    Workitems.push(item);
    res.redirect("/work");
 }
 else
{ items.push(item);
 res.redirect("/");}
});


app.get("/work",function (req,res) 
  {
    res.render('index',{frontDay:"Work List",newItems:Workitems});
  });

app.listen(3000,function(){
console.log("server started at 3000");
}); 


