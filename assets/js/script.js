/*check that evrything is loaded before the game starts*/
document.addEventListener("DOMContentLoaded", function(){
    console.log("loaded");

    var background = document.getElementById("background");

    var num1 = 0;
    var num2 = 0;

    var speed = 7;
    var left = 0;
    var altitude = 0;

document.addEventListener("keydown", function(e){
    
    if(e.key === "ArrowUp"){
        console.log("Ascending ...");
        plane.style.marginTop = num1-- + "px";
        (document.getElementById("altimeter")).value = altitude++;
    }else if (e.key == "ArrowLeft"){
        console.log("Decelerating ...");
        (document.getElementById("speedometer")).value = speed--;
        plane.style.marginLeft = num1-- + "px";




    }else if (e.key == "ArrowRight"){
        console.log("Accelerating ..." + left);
       
  
    
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
 function accelerate(increment){
    return point;
 }
/**reduce the speed */
 function decelerrate(increment){
    return --point;
 }
