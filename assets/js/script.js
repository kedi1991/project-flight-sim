/*check that evrything is loaded before the game starts*/
document.addEventListener("DOMContentLoaded", function(){
    console.log("loaded");

    var background = document.getElementById("background");
    var inst_time = document.getElementById("flighttime_val");
    var inst_velocity = document.getElementById("velocity_val");
    var craft_rotation = 0;

    var marks = document.getElementsByClassName("middle_mark");
    var flight_screen = document.getElementById("flight-screen");
    var xx = Math.floor(marks[0].getBoundingClientRect().x);
    //start for the runway animation;
    setInterval(function(){
        console.log("right x: " + xx);
        console.log("screen: "+ Math.floor(flight_screen.getBoundingClientRect().x));
        console.log("full dims: "+ flight_screen.getBoundingClientRect());
        
        xx = xx + 1;
        //marks[0].style.right = xx + "px";
        marks[0].classList.add("middle_mark_anim");

        // if ( xx == "700"){
        //     xx = -50;
        // }

    }, 1);

    
    var velocity = 0;
    var left = 0;
    var altitude = 0;
    var time = 0;
    var gear = 0;

    var craft =  document.getElementById("craft");

document.addEventListener("keydown", function(e){
    /**rotate the plane for climb */
    if(e.key === "ArrowUp"){
        craft_rotation--;
        craft.style.rotate = craft_rotation + "deg";
        craft.classList.add("climb_class");
    /**reduce thrust */    
    }else if (e.key == "ArrowLeft"){
        deccelerate(gear);
        gear = gear - 1;
    //start the timer and take off--
    }else if (e.key == "ArrowRight"){       
        if(time == 0){
        full_thrust();
       } 
    }
    /**rotate the plane for cruise or landing */
    else if (e.key == "ArrowDown"){
        craft_rotation++;
        craft.style.rotate = craft_rotation + "deg";
    /***Any unknown control pressed */    
    }else{
        console.log("Error: Unknown control ...");    
    }  
});

//move the background to show speed
function full_thrust(){
   //move the runway lines
    
    setInterval(function()
    {for(var i = 0; i< 1; i++)
        {
        time++; 
        
        console.log("time is: "+ time)
        inst_time.innerHTML = time + " sec";

       
        inst_velocity.innerHTML = velocity;

            if(time <= 10){
                gear = 0;
                console.log("gear: "+ gear);
                background.classList.add("speed" + gear);
                velocity = 10 + " mph";

            }else if (time <= 20){
                background.classList.remove("speed" + gear);
                gear = 1;
                background.classList.add("speed" + gear);
                console.log("gear: "+ gear);
                velocity = 40 + " mph";
            }else if (time <= 30){
                background.classList.remove("speed" + gear);
                gear = 2;
                background.classList.add("speed" + gear);
                velocity = 70 + " mph";
            }else if (time <=40){
                background.classList.remove("speed" + gear);
                gear =3;
                background.classList.add("speed" + gear);
                velocity = 75 + " mph";
            }else if (time <=50){
                background.classList.remove("speed" + gear);
                gear =4;
                background.classList.add("speed" + gear);
                velocity = 98 + " mph";
            }else if (time <= 60){
                background.classList.remove("speed" + gear);
                gear =5;
                background.classList.add("speed" + gear);
            }else if (time <=70){
                background.classList.remove("speed" + gear);
                gear=6;
                background.classList.add("speed" + gear);
                velocity = 118 + " mph";
            }else if (time <=80){
                background.classList.remove("speed" + gear);
                gear=7;
                background.classList.add("speed" + gear);
                velocity = 138 + " mph";
            }else if (time <=90){
                background.classList.remove("speed" + gear);
                gear=9;
                background.classList.add("speed" + gear);
                velocity = 159 + " mph";
            }else if (time == 100){
                /**takeoff 184 mph and land at 166mph  V1 speed is between 120 – 140 knots.*/
                background.classList.remove("speed" + gear);
                gear=10;
                background.classList.add("speed" + gear);
                velocity = 184 + " mph";
            }
        }
        
    }, 1000);
        
  }

  //to cruise altitute
function deccelerate(gear){
        background.classList.remove("speed" + gear);
        background.classList.add("speed" + (gear - 1));
        console.log("gear: " + gear);
        gear = gear - 1;
    }
   
});

