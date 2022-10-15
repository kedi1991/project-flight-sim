/*check that evrything is loaded before the game starts*/
document.addEventListener("DOMContentLoaded", function(){
    console.log("loaded");

    var background = document.getElementById("background");

    var num1 = 0;
    var num2 = 0;

    var speed = 7;
    var left = 0;
    var altitude = 0;

    var acceleration = 15;
    var animDuration =  document.getElementById("background").style.animationDuration;

document.addEventListener("keydown", function(e){
    
    if(e.key === "ArrowUp"){
        console.log("Ascending ...");
        plane.style.marginTop = num1-- + "px";
        (document.getElementById("altimeter")).value = altitude++;


    }else if (e.key == "ArrowLeft"){
        acceleration = deccelerate(acceleration);
        document.getElementById("background").style.animationDuration = acceleration + "s";
        console.log("anim duration: " + document.getElementById("background").style.animationDuration);



    }else if (e.key == "ArrowRight"){       
        acceleration = accelerrate(acceleration);
       animDuration = acceleration + "s";
        console.log("anim duration: " + animDuration);
    }




    else if (e.key == "ArrowDown"){
        console.log("Descending ...");
        plane.style.marginTop = num1++ + "px";
        (document.getElementById("altimeter")).value = altitude--;
    }else{
        console.log("Error: Unknown control ...");
        
    }
    /**console.log(num1++);
*/
    
});
});
/*move forward*/
 function deccelerate(acceleration){
    return acceleration + .1;
 }
/**reduce the speed */
 function accelerrate(acceleration){
    return acceleration - .1 ;
 }

 /**Read for taxi */
 function taxi(acceleration){
    
 }
