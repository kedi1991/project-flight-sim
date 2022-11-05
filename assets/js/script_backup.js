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
    var cloud_small = document.getElementsByClassName("cloud_small");

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
    
    }else if (e.key == "ArrowRight" && !playedPrepTaxi){    
       
        //the clock /counter used to manipulate events
        if(time == 0){
            
            play_prepare_taxi();
            playedPrepTaxi = true;
            test1 = setInterval(function(){
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
        moveClouds();
       // acceleration = acceleration - 10;
        console.log(".....");
        setInterval(function(){
            moveLinesTaxi(distance);
            distance = distance + 0.03;
        }, 10);
        inst_dist = acceleration;
        
    }
});

//move the craft forward
function moveLinesTaxi(distance){
    inst_dist.innerHTML = acceleration;
    tower.style.right = parseFloat(distance) + 0.0 + "%";

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
    marks[48].style.right = parseFloat(distance - 480.00) + parseFloat(0.03) + "%";
    marks[49].style.right = parseFloat(distance - 490.00) + parseFloat(0.03) + "%";
    marks[50].style.right = parseFloat(distance - 500.00) + parseFloat(0.03) + "%";
    marks[51].style.right = parseFloat(distance - 510.00) + parseFloat(0.03) + "%";
    marks[52].style.right = parseFloat(distance - 520.00) + parseFloat(0.03) + "%";
    marks[53].style.right = parseFloat(distance - 530.00) + parseFloat(0.03) + "%";
    marks[54].style.right = parseFloat(distance - 540.00) + parseFloat(0.03) + "%";
    marks[55].style.right = parseFloat(distance - 550.00) + parseFloat(0.03) + "%";
    marks[56].style.right = parseFloat(distance - 560.00) + parseFloat(0.03) + "%";
    marks[57].style.right = parseFloat(distance - 570.00) + parseFloat(0.03) + "%";
    marks[58].style.right = parseFloat(distance - 580.00) + parseFloat(0.03) + "%";
    marks[59].style.right = parseFloat(distance - 590.00) + parseFloat(0.03) + "%";
    marks[60].style.right = parseFloat(distance - 600.00) + parseFloat(0.03) + "%";
    marks[61].style.right = parseFloat(distance - 610.00) + parseFloat(0.03) + "%";
    marks[62].style.right = parseFloat(distance - 620.00) + parseFloat(0.03) + "%";
    marks[63].style.right = parseFloat(distance - 630.00) + parseFloat(0.03) + "%";
    marks[64].style.right = parseFloat(distance - 640.00) + parseFloat(0.03) + "%";
    marks[65].style.right = parseFloat(distance - 650.00) + parseFloat(0.03) + "%";
    marks[66].style.right = parseFloat(distance - 660.00) + parseFloat(0.03) + "%";
    marks[67].style.right = parseFloat(distance - 670.00) + parseFloat(0.03) + "%";
    marks[68].style.right = parseFloat(distance - 680.00) + parseFloat(0.03) + "%";
    marks[69].style.right = parseFloat(distance - 690.00) + parseFloat(0.03) + "%";
    marks[70].style.right = parseFloat(distance - 700.00) + parseFloat(0.03) + "%";
    marks[71].style.right = parseFloat(distance - 710.00) + parseFloat(0.03) + "%";
    marks[72].style.right = parseFloat(distance - 720.00) + parseFloat(0.03) + "%";
    marks[73].style.right = parseFloat(distance - 730.00) + parseFloat(0.03) + "%";
    marks[74].style.right = parseFloat(distance - 740.00) + parseFloat(0.03) + "%";
    marks[75].style.right = parseFloat(distance - 750.00) + parseFloat(0.03) + "%";
    marks[76].style.right = parseFloat(distance - 760.00) + parseFloat(0.03) + "%";
    marks[77].style.right = parseFloat(distance - 770.00) + parseFloat(0.03) + "%";
    marks[78].style.right = parseFloat(distance - 780.00) + parseFloat(0.03) + "%";
    marks[79].style.right = parseFloat(distance - 790.00) + parseFloat(0.03) + "%";
    marks[80].style.right = parseFloat(distance - 800.00) + parseFloat(0.03) + "%";
    marks[81].style.right = parseFloat(distance - 810.00) + parseFloat(0.03) + "%";
    marks[82].style.right = parseFloat(distance - 820.00) + parseFloat(0.03) + "%";
    marks[83].style.right = parseFloat(distance - 830.00) + parseFloat(0.03) + "%";
    marks[84].style.right = parseFloat(distance - 840.00) + parseFloat(0.03) + "%";
    marks[85].style.right = parseFloat(distance - 850.00) + parseFloat(0.03) + "%";
    marks[86].style.right = parseFloat(distance - 860.00) + parseFloat(0.03) + "%";
    marks[87].style.right = parseFloat(distance - 870.00) + parseFloat(0.03) + "%";

    exit_mountains.style.right = parseFloat(distance - 1100.00) + parseFloat(0.03) + "%";

  
        background.style.right = parseFloat(distance - 1200.00) + parseFloat(0.03) + "%";
    
}

function moveClouds(){
    cloud_small[0].classList.add("cloud_small");
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

