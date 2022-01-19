const express=require("express");
const bodyParser=require("body-parser");
const https=require("https");
const { url } = require("inspector");
const app=express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));



app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html")
});

app.post("/",function (req,res) {
var fir_name=req.body.fname;
var las_name=req.body.lname;
var Email=req.body.mail_addr;
var data={
    members:[
        {
            email_address:Email,
            status:"subscribed",
            merge_fields:{
                FNAME:fir_name,
                LNAME:las_name
            }
        }
    ]
};

const jsonData=JSON.stringify(data);

const url="https://us20.api.mailchimp.com/3.0/lists/789a1e1700";

const options={
    method:"POST",
    auth:"vishwa:52f35b4688927a31417716c31e73d5cd-us20"
}
const request=https.request(url,options,function(response){
    
    if(response.statusCode==200){
        res.sendFile(__dirname+"/success.html")
    }
    else{
        res.sendFile(__dirname+"/failure.html")

    }
    response.on("data",function(data){
        console.log(JSON.parse(data));
    })
})
request.write(jsonData);
request.end();
});

app.post("/failure",function (req,res) {
    res.redirect("/");
  })

app.listen(3000,function(){
    console.log("Server started");
})


// api key:52f35b4688927a31417716c31e73d5cd-us20
//789a1e1700
