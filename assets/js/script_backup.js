/*check that evrything is loaded before the game starts*/
document.addEventListener("DOMContentLoaded", function(){
    console.log("loaded");

    var plane = document.getElementById("plane");

    var num1 = 0;
    var num2 = 0;

    var speed = 0;
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
        console.log("Accelerating ...");
        (document.getElementById("speedometer")).value = speed++;

        
        (document.getElementById("accelerator")).value = accelerate();;
        //accelerator key detection
        function accelerate(){
            setInterval( ++altitude, 10);
            return altitude;
        }
        
        if(time <= 10){
            gear++
            console.log("gear: "+ gear);
            background.classList.add("speed" + gear);
        }else if (time > 10 && time <= 20){
            gear++
            background.classList.add("speed" + gear);
            console.log("gear: "+ gear);
        }else if (time <= 30){
            background.classList.remove("speed" + gear);
            gear++
            background.classList.add("speed" + gear);
        }else if (time <=40){
            background.classList.remove("speed" + gear);
            gear++
            background.classList.add("speed" + gear);
        }else if (time <=50){
            background.classList.remove("speed" + gear);
            gear++
            background.classList.add("speed" + gear);
        }else{
            background.classList.remove("speed" + gear);
            gear++
            background.classList.add("speed" + gear);
        }
       

    }else if (e.key == "ArrowDown"){
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
 function moveForward(point){
    return ++point;
 }
