var account=document.querySelector(".right-name");
var name_account=document.querySelector(".right-name-account");
account.addEventListener("mouseover",function(){
    name_account.style.display="block";
});
account.addEventListener("mouseout",function(){
    name_account.style.display="none";
});
var set=document.querySelector(".right-set");
var set_all=document.querySelector(".right-set-all");
set.addEventListener("mouseover",function(){
    set_all.style.display="block";
});
set.addEventListener("mouseout",function(){
    set_all.style.display="none";
});
var right_all=document.querySelector(".right-right-head");
var right_body=document.querySelector(".right-right-body");
var span=document.getElementById("span");
right_all.addEventListener("mouseover",function(){
    right_body.style.display="block";
    right_body.style.backgroundColor="rgb(231,232,234)";
    span.style.backgroundColor="rgb(231,232,234)";
    span.style.color="#000";
});
right_all.addEventListener("mouseout",function(){
    right_body.style.display="none";
    span.style.backgroundColor="#398bfb";
    span.style.color="white";
});
var newnum;
var lastnum;
var div=document.querySelector(".body-foot-body").children;
var element=document.getElementById("hum");
var foot_top_left=document.querySelector(".foot-top-left");
foot_top_left.addEventListener("click",function (e) {
    console.log("!111");
    var target=e.target;
    if(target.nodeName.toLowerCase()=="a"){
        element.className="";
        lastnum=element.name;
        target.className="active";
        newnum=target.name;
        for(var i=0;i<div.length;i++){
            if(i==lastnum){
                div[i].className="body-foot-middle"+i;
            }
            if(i==newnum){
                div[i].className="foot-active body-foot-middle"+i;
            }
        }
        element=target;
    }
});

