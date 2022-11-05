/*check that evrything is loaded before the game starts*/
document.addEventListener("DOMContentLoaded", function(){
    //the clock value. Used to synchronise all events
    var time = 0;
    //distance moved by the plane
    var distance = -5.00;
    //plane engines on, OK from control tower
    var readyForTaxi = false;
    //angle of the plan nose
    var craft_rotation = 0.00;
    var velocity = 0;
    var left = 0;
    //height of the plane above ground
    var altitude = 4.000;
    
    //speed of the plane, this is equivalent to the time interval
    var acceleration = 10;

    //speed checkPoints used to control animation speed
    
    var background = document.getElementById("background");
  

    var marks = document.getElementsByClassName("middle_mark");

    var exit_mountains = document.getElementById("exit_mountains");
    var cloud_small = document.getElementById("cloud_small");

    var flight_screen = document.getElementById("flight-screen");
    var craft =  document.getElementById("craft");
    var tower = document.getElementById("tower");


    // Audio values
    var playedTaxi = false;
    var playedPrepTaxi = false;

    //instruments
    var instruments = document.getElementsByClassName("instruments");
    var inst_time = instruments[0];
    var inst_alt = instruments[2];
    var inst_dist = instruments[3];
    var inst_rotation = instruments[1];

    var prepare_taxi = document.getElementById("prepare_takeoff");
    var takeoff = document.getElementById("takeoff");
    var ambience = document.getElementById("ambience");

    var movtUnit = 0.03;
    var forwardInterval;
    var reverseInterval;

    var test1;
    var test2;
    var reducedSpeed;
    
    function play_prepare_taxi() {
        //prepare_taxi.play();
      }
      function play_taxi() {
       // takeoff.play();
      }
      function play_ambience() {
       // ambience.play();
      }

document.addEventListener("keydown", function(e){
    /**rotate the plane for climb */
    if(e.key === "ArrowUp"){
        craft_rotation = craft_rotation - 0.1;
        craft.style.rotate = craft_rotation + "deg";
        inst_rotation.innerHTML = craft_rotation + " deg";
        play_ambience();
    }else if (e.key == "ArrowLeft"){
           acceleration = acceleration + 10;
           movtUnit = movtUnit - 0.001;
           if (movtUnit <= 0){
            movtUnit = 0.00;
            playedPrepTaxi = false;
           }
           
           reverseInterval = setInterval(function(){
            
            distance = distance + movtUnit;
            moveLinesTaxi(distance);
        }, 10);
    
    }else if (e.key == "ArrowRight" && !playedPrepTaxi){    
       
        //the clock /counter used to manipulate events
        if(time == 0){
            
            play_prepare_taxi();
            playedPrepTaxi = true;
            forwardInterval = setInterval(function(){
            if (time <= 28){
                moveLinesTaxi(distance)
                distance = distance + 0.03;
            }
            else{
                readyForTaxi = true;
                if(!playedTaxi){
                    play_taxi();
                }
                playedTaxi = true;
                
            }
        }, 10);
        setInterval(function(){
            time++;
            inst_time.innerHTML = time + ".0 sec";

            if (time == 240){
                alert("start to descend!!!");
            }

        }, 1000);
    }
       
    }
    /**rotate the plane for cruise or landing */
    else if (e.key == "ArrowDown"){
        craft_rotation = craft_rotation + 0.1;
        craft.style.rotate = craft_rotation + "deg";
        inst_rotation.innerHTML = craft_rotation + " deg";

        //craft.classList.add("descend_class");

    }else{
        console.log("Error: Unknown control ...");    
    }  
});

document.addEventListener("keydown", function(e){
    if ((e.key == "ArrowRight") && readyForTaxi){
        moveClouds();       // acceleration = acceleration - 10;
        console.log(".....");
        forwardInterval = setInterval(function(){
            moveLinesTaxi(distance);
            distance = distance + movtUnit;
        }, 10);
        inst_dist.innerHTML = distance;
        
    }
});

//move the craft forward
function moveLinesTaxi(distance){
    inst_dist.innerHTML = distance;
    tower.style.right = parseFloat(distance)+ "%";

    //create 88 middle lines on middle of the runway
    for(var x = 0; x < 88; x++){
        marks[x].style.right = parseFloat(distance - (x * 10.00)) + "%";
    }

    exit_mountains.style.right = parseFloat(distance - 1100.00) + "%";
    background.style.right = parseFloat(distance - 1200.00) + "%";
    
}

function moveClouds(){
   // cloud_small.classList.add("cloud_small");
   cloud_small.classList.add("cloud_small_animation");
}

/***
 * For every 1 deg, increase
 * 
 */
setInterval(function(){
    if (craft_rotation <= -16){
        console.log("plane stall warning");
        craft_rotation = -15;
    }
    else if(craft_rotation >= 6){
        console.log("plane stall warning");
        craft_rotation = 5
    }
    else if(craft_rotation == 0){
        console.log("plane cruise level");
        craft.classList.add("cruise_class");
        craft.classList.remove("climb_class");
        craft.classList.remove("descend_class");

    }
    else{
        //display the altitude on instrument
        inst_alt.innerHTML = altitude;
        //manipulate the descend and ascend (valid value -15 to 5)
        if ((craft_rotation >= -16) && (craft_rotation <= -12)){
            altitude = altitude + 0.05;
            craft.style.bottom = parseFloat(altitude) + parseFloat(0.05) + "%"; 
        }
        else if ((craft_rotation > -12) && (craft_rotation <= -8)){
            altitude = altitude + 0.03;
            craft.style.bottom = parseFloat(altitude) + parseFloat(0.03) + "%"; 
        }else if((craft_rotation > -8) && (craft_rotation <= -1)){
            altitude = altitude + 0.01;
            craft.style.bottom = parseFloat(altitude) + parseFloat(0.01) + "%"; 
        }else if((craft_rotation > 0) && (craft_rotation <= 2)){
            altitude = altitude - 0.01;
            craft.style.bottom = parseFloat(altitude) + parseFloat(0.01) + "%"; 
        }else if((craft_rotation > 2) && (craft_rotation <= 4)){
            altitude = altitude - 0.03;
            craft.style.bottom = parseFloat(altitude) + parseFloat(0.03) + "%"; 
        }else if((craft_rotation > 4) && (craft_rotation <= 6)){
            altitude = altitude - 0.05;
            craft.style.bottom = parseFloat(altitude) + parseFloat(0.05) + "%"; 
        }

    }
}, 1);

});

