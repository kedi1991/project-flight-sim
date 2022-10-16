/*check that evrything is loaded before the game starts*/
document.addEventListener("DOMContentLoaded", function(){
    console.log("loaded");

    var background = document.getElementById("background");
    var inst_time = document.getElementById("flighttime_val");

    var num1 = 0;
    var num2 = 0;

    var speed = 7;
    var left = 0;
    var altitude = 0;
    var time = 0;
    var gear = 0;

    
    var acceleration = 15;
    var animDuration =  document.getElementById("background").style.animationDuration;
    var craft =  document.getElementById("craft");

document.addEventListener("keydown", function(e){
    
    if(e.key === "ArrowUp"){
        craft.style.rotate = "-8deg";
        craft.classList.add("climb_class");
        // console.log("Ascending ...");
        // plane.style.marginTop = num1-- + "px";
        // (document.getElementById("altimeter")).value = altitude++;


    }else if (e.key == "ArrowLeft"){
        acceleration = deccelerate(acceleration);
        document.getElementById("background").style.animationDuration = acceleration + "s";
        console.log("anim duration: " + document.getElementById("background").style.animationDuration);

    }else if (e.key == "ArrowRight"){       
       
        //start the timer and take off--
        if(time == 0){
        mainFrames_hor();
       } 
    }
    


    else if (e.key == "ArrowDown"){
        craft.style.rotate = "8deg";
        // console.log("Descending ...");
        // plane.style.marginTop = num1++ + "px";
        // (document.getElementById("altimeter")).value = altitude--;
    }else{
        console.log("Error: Unknown control ...");
        
    }  
});

//move the background to show speed
function mainFrames_hor(){
   
    setInterval(function()
    {for(var i = 0; i< 1; i++)
        {
        time++; 
        console.log("time is: "+ time)
        inst_time.innerHTML = time;
       
            if(time <= 10){
                gear = 0;
                console.log("gear: "+ gear);
                background.classList.add("speed" + gear);
            }else if (time <= 20){
                background.classList.remove("speed" + gear);
                gear = 1;
                background.classList.add("speed" + gear);
                console.log("gear: "+ gear);
            }else if (time <= 30){
                background.classList.remove("speed" + gear);
                gear = 2;
                background.classList.add("speed" + gear);
            }else if (time <=40){
                background.classList.remove("speed" + gear);
                gear =3;
                background.classList.add("speed" + gear);
            }else if (time <=50){
                background.classList.remove("speed" + gear);
                gear =4;
                background.classList.add("speed" + gear);
            }else if (time <= 60){
                background.classList.remove("speed" + gear);
                gear =5;
                background.classList.add("speed" + gear);
            }else if (time <=70){
                background.classList.remove("speed" + gear);
                gear=6;
                background.classList.add("speed" + gear);
            }else if (time <=80){
                background.classList.remove("speed" + gear);
                gear=7;
                background.classList.add("speed" + gear);
            }else if (time <=90){
                background.classList.remove("speed" + gear);
                gear=9;
                background.classList.add("speed" + gear);
            }else{
                background.classList.remove("speed" + gear);
                gear=10;
                background.classList.add("speed" + gear);
            }
        
        }
        
    
    }, 1000);
        
   
  }

  //to cruise altitute
function mainFrames_dig(){
   
    setInterval(function()
    {for(var i = 0; i< 1; i++)
        {
        time++; 
        //inst_time.innerHTML = time;
       
            if(time <= 10){
                gear = 0;
                console.log("gear: "+ gear);
                background.classList.add("speed" + gear);
            }else if (time <= 20){
                background.classList.remove("speed" + gear);
                gear = 1;
                background.classList.add("speed" + gear);
                console.log("gear: "+ gear);
            }else if (time <= 30){
                background.classList.remove("speed" + gear);
                gear = 2;
                background.classList.add("speed" + gear);
            }else if (time <=40){
                background.classList.remove("speed" + gear);
                gear =3;
                background.classList.add("speed" + gear);
            }else if (time <=50){
                background.classList.remove("speed" + gear);
                gear =4;
                background.classList.add("speed" + gear);
            }else if (time <= 60){
                background.classList.remove("speed" + gear);
                gear =5;
                background.classList.add("speed" + gear);
            }else if (time <=70){
                background.classList.remove("speed" + gear);
                gear=6;
                background.classList.add("speed" + gear);
            }else if (time <=80){
                background.classList.remove("speed" + gear);
                gear=7;
                background.classList.add("speed" + gear);
            }else if (time <=90){
                background.classList.remove("speed" + gear);
                gear=9;
                background.classList.add("speed" + gear);
            }else{
                background.classList.remove("speed" + gear);
                gear=10;
                background.classList.add("speed" + gear);
            }
        
        }
        
    
    }, 1000);
        
   
  }


});

