
var x=document.getElementById("div_get").innerHTML

var y=document.getElementById("value1")
var i=0

var res = x.split(" ");

function fonk(){
  
  y.value=res[i]
  i=i+1
}


y.addEventListener("keyup", function(event) {
  
  if (event.keyCode === 32) {
    fonk();
  
    
  }
});