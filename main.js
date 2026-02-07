let number = 0
let number2=0;
console.log("hi");
document.getElementById("add").onclick = function() {
    console.log("add was clicked");
    number=number+1;
     console.log(number);
    document.getElementById("num").innerHTML=number;
    
    
   
}
document.getElementById("reset").onclick = function() {
    console.log("reset was clicked");
    number=0;
    console.log(number);
    document.getElementById("num").innerHTML=number;

}
document.getElementById("sub").onclick = function() {
    console.log("sub was clicked");
    number=number-1;
    console.log(number);
    document.getElementById("num").innerHTML=number;
    if(number <=0){
        console.log("its negative  value")
        document.getElementById("num").innerHTML="Error";
        number=0;
    }
        
    

}

document.getElementById("add2").onclick = function() {
    console.log("add was clicked");
    number2=number2+1;
    console.log(number2);
    console.log(number);
    document.getElementById("num2").innerHTML=number2;
}
document.getElementById("reset2").onclick = function() {
    console.log("reset was clicked");
    number2=0;
    console.log(number2);
    document.getElementById("num2").innerHTML=number2;

}
document.getElementById("sub2").onclick = function() {
    console.log("sub was clicked");
    number2=number2-1;
    console.log(number2);
    document.getElementById("num2").innerHTML=number2;
    if(number2 <=0){
        console.log("its negative  value")
        document.getElementById("num2").innerHTML="Error";
        number2=0;
    }
}
document.getElementById("result").onclick = function() {
    console.log("button pressed");
}
