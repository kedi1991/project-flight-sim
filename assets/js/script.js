/*check that evrything is loaded before the game starts*/
document.addEventListener("DOMContentLoaded", function(){
    console.log("loaded");

    var plane = document.getElementById("plane");

    var num1 = 0;
    var num2 = 0;

document.addEventListener("keydown", function(e){
    
    if(e.key === "ArrowUp"){
        console.log("Ascending ...");
        plane.style.marginTop = num1-- + "px";
    }else if (e.key == "ArrowLeft"){
        console.log("Decelerating ...");
        plane.style.marginLeft = num1-- + "px";
    }else if (e.key == "ArrowRight"){
        console.log("Accelerating ...");
        plane.style.marginLeft = num1++ + "px";
    }else if (e.key == "ArrowDown"){
        console.log("Descending ...");
        plane.style.marginTop = num1++ + "px";
    }else{
        console.log("Error: Unknown control ...");
    }
    /**console.log(num1++);
*/
    
});
});
/*move forward*/
 function moveForward(point){
    return ++point;
 }
