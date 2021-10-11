var play1_value=Math.floor(1+(Math.random()*6));

var imagename="dice"+play1_value+".png";
var source="images/"+imagename;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",source);

var play2_value=Math.floor(1+(Math.random()*6));
var imagename2="dice"+play2_value+".png";
var source2="images/"+imagename2;

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",source2);



if(play1_value>play2_value){
document.querySelector("h1").innerHTML="🚩 Player 1 wins";
}
else if(play1_value<play2_value){
    document.querySelector("h1").innerHTML=" Player 2 wins 🚩";
}
else if(play1_value==play2_value){
    document.querySelector("h1").innerHTML=" Draw";
}

