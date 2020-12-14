var s= document.getElementById("color");
s.addEventListener('click', function(){
  var arr="0123456789ABCDEF";//all possible combination of letters in hexcode that specifies color
  var colors="#";//choosing the color
  for (var i =0; i<6;i++){
    colors+=arr[Math.floor(Math.random()*16)];
  }
  var c=document.getElementsByClassName("outer-container");
  c[0].style.backgroundColor= colors;
});
var x =document.getElementById("shape");
x.addEventListener('click', function(){
  var arr=[1,2,3,4,5,6];
  var choice=arr[Math.floor(Math.random()*6)];
  var s=document.getElementsByClassName("shape-container");
  if(choice===1){
    s[0].style.clipPath="polygon(50% 0, 0 100%, 100% 100%)";
  }
  else if(choice===2){
    s[0].style.clipPath="polygon(0 0, 0 100%, 100% 100%)";
  }
  else if(choice===3){
    s[0].style.clipPath="polygon(0 0,100% 0, 100% 100%, 0 100%)";
  }
  else if(choice===4){
    s[0].style.clipPath="polygon(20% 0, 80% 0, 100% 100%, 0,100%)";
  }
  else if(choice===5){
    s[0].style.clipPath="polygon( 0 20%, 100% 20%, 100% 80%, 0 80%)";
  }
  else if(choice===6){
    s[0].style.clipPath="polygon(100% 0, 100% 100%, 0 100%)";
  }
});
