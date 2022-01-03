const express=require("express");
const app=express();

app.listen(3000,function () {console.log("Server started at port 3000");  });

app.get("/",function(req,res){res.send('<h1>Hi this is testing my express server</h1>');
});
app.get("/contact",function (req,res) {res.send("contact at vishwanathbhat2001@gmail.com");  });
app.get("/about",function (req,res) {res.send("PAGE OWNED BY VISHWANATH");  });
app.get("/hobbies",function (req,res) {res.send("Playing games");  });

