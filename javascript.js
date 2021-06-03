var box= document.getElementById("box");

document.getElementById("button1").addEventListener("click", function(){
    box.style.width= "200px";
    box.style.height= "200px";
});

document.getElementById("button2").addEventListener("click", function(){
    box.style.backgroundColor= "blue";
});

document.getElementById("button3").addEventListener("click", function(){
    box.style.opacity=0.5;
});
//Reset
document.getElementById("button4").addEventListener("click", function(){
    box.style.backgroundColor="orange";
    box.style.opacity=1;
    box.style.width="150px";
    box.style.height="150px";
});

