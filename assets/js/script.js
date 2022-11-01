/*check that evrything is loaded before the game starts*/
document.addEventListener("DOMContentLoaded", function(){
    //the clock value. Used to synchronise all events
    var time = 0;

    var distance = -5.00;
    var readyForTaxi = false;

    var craft_rotation = 0;
    var velocity = 0;
    var left = 0;
    var altitude = 4.000;
    var time = 0;
    var gear = 0;

    //speed checkPoints used to control animation speed
    var speed0 = 20;
    var speed1 = 10;
    var speed2 = 5;
     
    var background = document.getElementById("background");
    var inst_time = document.getElementById("flighttime_val");
    var inst_velocity = document.getElementById("velocity_val");
    var marks = document.getElementsByClassName("middle_mark");

   

    var flight_screen = document.getElementById("flight-screen");
    var craft =  document.getElementById("craft");
    var tower = document.getElementById("tower");

document.addEventListener("keydown", function(e){
    /**rotate the plane for climb */
    if(e.key === "ArrowUp"){
        craft_rotation--;
        craft.style.rotate = craft_rotation + "deg";
        //craft.classList.add("climb_class");
    /**reduce thrust */    
    }else if (e.key == "ArrowLeft"){
        deccelerate(gear);
        gear = gear - 1;
    //start the timer and take off--
    }else if (e.key == "ArrowRight"){    
        
        //the clock /counter used to manipulate events
        if(time == 0){
        setInterval(function(){
            if (time <= 28){
                moveLinesTaxi(distance)
                distance = distance + 0.03;
            }
            else{
                readyForTaxi = true;
                clearInterval();
               // moveLines(time);
            }
        }, 10);
        setInterval(function(){
            time++;
            inst_time.innerHTML = time + ".0 sec";
        }, 1000);
    }
        full_thrust();
       
    }
    /**rotate the plane for cruise or landing */
    else if (e.key == "ArrowDown"){
        craft_rotation++;
        craft.style.rotate = craft_rotation + "deg";
        //craft.classList.add("descend_class");

    }else{
        console.log("Error: Unknown control ...");    
    }  
});

document.addEventListener("keydown", function(e){
    if ((e.key == "ArrowRight") && readyForTaxi){
        console.log(".....");
        setInterval(function(){
            moveLinesTaxi(distance);
            distance = distance + 0.03;

        }, 10);
        
    }
});

//move environment in preparation to taxi
function moveLinesTaxi(distance){
    tower.style.right = parseFloat(distance) + parseFloat(0.03) + "%"; 
    marks[0].style.right = parseFloat(distance) + parseFloat(0.03) + "%"; 
    marks[1].style.right = parseFloat(distance - 10.00) + parseFloat(0.03) + "%";
    marks[2].style.right = parseFloat(distance - 20.00) + parseFloat(0.03) + "%";
    marks[3].style.right = parseFloat(distance - 30.00) + parseFloat(0.03) + "%";
    marks[4].style.right = parseFloat(distance - 40.00) + parseFloat(0.03) + "%";
    marks[5].style.right = parseFloat(distance - 50.00) + parseFloat(0.03) + "%";
    marks[6].style.right = parseFloat(distance - 60.00) + parseFloat(0.03) + "%";
    marks[7].style.right = parseFloat(distance - 70.00) + parseFloat(0.03) + "%";
    marks[8].style.right = parseFloat(distance - 80.00) + parseFloat(0.03) + "%";
    marks[9].style.right = parseFloat(distance - 90.00) + parseFloat(0.03) + "%";
    marks[10].style.right = parseFloat(distance - 100.00) + parseFloat(0.03) + "%";
    marks[11].style.right = parseFloat(distance - 110.00) + parseFloat(0.03) + "%";
    marks[12].style.right = parseFloat(distance - 120.00) + parseFloat(0.03) + "%"; 
    marks[13].style.right = parseFloat(distance - 130.00) + parseFloat(0.03) + "%";
    marks[14].style.right = parseFloat(distance - 140.00) + parseFloat(0.03) + "%";
    marks[15].style.right = parseFloat(distance - 150.00) + parseFloat(0.03) + "%";
    marks[16].style.right = parseFloat(distance - 160.00) + parseFloat(0.03) + "%";
    marks[17].style.right = parseFloat(distance - 170.00) + parseFloat(0.03) + "%";
    marks[18].style.right = parseFloat(distance - 180.00) + parseFloat(0.03) + "%";
    marks[19].style.right = parseFloat(distance - 190.00) + parseFloat(0.03) + "%";
    marks[20].style.right = parseFloat(distance - 200.00) + parseFloat(0.03) + "%";
    marks[21].style.right = parseFloat(distance - 210.00) + parseFloat(0.03) + "%";
    marks[22].style.right = parseFloat(distance - 220.00) + parseFloat(0.03) + "%";
    marks[23].style.right = parseFloat(distance - 230.00) + parseFloat(0.03) + "%";
    marks[24].style.right = parseFloat(distance - 240.00) + parseFloat(0.03) + "%"; 
    marks[25].style.right = parseFloat(distance - 250.00) + parseFloat(0.03) + "%";
    marks[26].style.right = parseFloat(distance - 260.00) + parseFloat(0.03) + "%";
    marks[27].style.right = parseFloat(distance - 270.00) + parseFloat(0.03) + "%";
    marks[28].style.right = parseFloat(distance - 280.00) + parseFloat(0.03) + "%";
    marks[29].style.right = parseFloat(distance - 290.00) + parseFloat(0.03) + "%";
    marks[30].style.right = parseFloat(distance - 300.00) + parseFloat(0.03) + "%";
    marks[31].style.right = parseFloat(distance - 310.00) + parseFloat(0.03) + "%";
    marks[32].style.right = parseFloat(distance - 320.00) + parseFloat(0.03) + "%";
    marks[33].style.right = parseFloat(distance - 330.00) + parseFloat(0.03) + "%";
    marks[34].style.right = parseFloat(distance - 340.00) + parseFloat(0.03) + "%";
    marks[35].style.right = parseFloat(distance - 350.00) + parseFloat(0.03) + "%";
    marks[36].style.right = parseFloat(distance - 360.00) + parseFloat(0.03) + "%"; 
    marks[37].style.right = parseFloat(distance - 370.00) + parseFloat(0.03) + "%";
    marks[38].style.right = parseFloat(distance - 380.00) + parseFloat(0.03) + "%";
    marks[39].style.right = parseFloat(distance - 390.00) + parseFloat(0.03) + "%";
    marks[40].style.right = parseFloat(distance - 400.00) + parseFloat(0.03) + "%";
    marks[41].style.right = parseFloat(distance - 410.00) + parseFloat(0.03) + "%";
    marks[42].style.right = parseFloat(distance - 420.00) + parseFloat(0.03) + "%";
    marks[43].style.right = parseFloat(distance - 430.00) + parseFloat(0.03) + "%";
    marks[44].style.right = parseFloat(distance - 440.00) + parseFloat(0.03) + "%";
    marks[45].style.right = parseFloat(distance - 450.00) + parseFloat(0.03) + "%";
    marks[46].style.right = parseFloat(distance - 460.00) + parseFloat(0.03) + "%";
    marks[47].style.right = parseFloat(distance - 470.00) + parseFloat(0.03) + "%";
}

//Prepare for take-off
function prepareForTaxi(){
    tower.classList.add("tower_taxi");
    moveLinesTaxi(distance);
}



//move the background to show speed
function full_thrust(){
   //move the runway lines
    
    setInterval(function()
    {for(var i = 0; i< 1; i++)
        {
        

       
        inst_velocity.innerHTML = velocity;

            if(time <= 10){
                gear = 0;
                background.classList.add("speed" + gear);
                velocity = 10 + " mph";

            }else if (time <= 20){
                background.classList.remove("speed" + gear);
                gear = 1;
                background.classList.add("speed" + gear);
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
   

//Altitude controller based on attack angle

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

