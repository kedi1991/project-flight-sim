/*check that evrything is loaded before the game starts*/
document.addEventListener("DOMContentLoaded", function () {

    //the clock value. Used to synchronise all events
    var time = 0;
    //distance moved by the plane
    var distance = -5.00;
    //plane engines on, OK from control tower
    var readyForTaxi = false;
    //angle of the plan nose
    var craft_rotation = 0.00;
    var left = 0;
    //height of the plane above ground
    var altitude = 4.000;

    //speed of the plane, this is equivalent to the time interval
    var acceleration = 10;

    //speed checkPoints used to control animation speed
    var background = document.getElementById("background");
    var marks = document.getElementsByClassName("middle_mark");
    var exit_mountains = document.getElementById("exit_mountains");
    var white_cloud = document.getElementById("white-cloud");
    var craft = document.getElementById("craft");
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
    var inst_velocity = instruments[4];
    var craft_status = "GROUNDED";
    var prepare_taxi = document.getElementById("prepare_takeoff");
    var takeoff = document.getElementById("takeoff");
    var ambience = document.getElementById("ambience");

    var movtUnit = 0.03;

    //Button for mobile view
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var up = document.getElementById("up");
    var down = document.getElementById("down");

    function play_prepare_taxi() {
        prepare_taxi.play();
    }
    function play_taxi() {
        takeoff.play();
    }
    function play_ambience() {
        ambience.play();
    }
    //mobile view listener
    right.addEventListener("mousedown", function () {
        if (!playedPrepTaxi) {
            accelerateBeforeTaxi();
        }
        if (readyForTaxi) {
            accelerateDuringTaxi();
        }
    });
    left.addEventListener("mousedown", deccelerate);
    up.addEventListener("mousedown", liftOff);
    down.addEventListener("mousedown", descend);
    //desktop view listener
    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowUp" && craft_status !== "GROUNDED") {
            liftOff();
        } else if (e.key == "ArrowLeft" && craft_status !== "GROUNDED") {
            deccelerate();
        } else if (e.key == "ArrowRight" && !playedPrepTaxi) {
            accelerateBeforeTaxi();
        } else if (e.key == "ArrowDown" && craft_status !== "GROUNDED") {
            descend();
        }
    });
    document.addEventListener("keydown", function (e) {
        if ((e.key == "ArrowRight") && readyForTaxi) {
            accelerateDuringTaxi();
        }
    });
    //accelerate rapidly during taxi
    function accelerateDuringTaxi() {
        craft_status = "TAXI_STARTED";
        forwardInterval = setInterval(function () {
            moveLinesTaxi(distance);
            distance = distance + movtUnit;
        }, 10);
        inst_dist.innerHTML = "Dist: " + Math.trunc(distance);
    }
    //lift off
    function liftOff() {
        craft_rotation = craft_rotation - 0.1;
        craft.style.rotate = craft_rotation + "deg";
        inst_rotation.innerHTML = "Rot: " + Math.trunc(craft_rotation) + " deg";
        play_ambience();
        moveClouds();
    }
    //Prepare for taxi
    function accelerateBeforeTaxi() {
        //the clock /counter used to manipulate events
        if (time == 0) {
            inst_velocity.innerHTML = "Speed: " + movtUnit * 1000;
            play_prepare_taxi();
            playedPrepTaxi = true;
            forwardInterval = setInterval(function () {
                if (time <= 28) {
                    moveLinesTaxi(distance);
                    distance = distance + 0.03;
                } else {
                    //Fail if the pilot takes extra 10 seconds without thrust
                    if (time == 40 && craft_status === "GROUNDED") {
                        location.href = "failed.html";
                    }
                    readyForTaxi = true;
                    if (!playedTaxi) {
                        play_taxi();
                    }
                    playedTaxi = true;
                }
            }, 10);
            setInterval(function () {
                time++;
                inst_time.innerHTML = "Time: " + time + ".0 s";
                if (time == 90) {
                    craft_status = "START_DESCEND_HIGH";
                }
                if (time == 120) {
                    craft_status = "START_DESCEND_LOW";
                    // create the lines for the destination runway
                    distance = -500.00;
                    moveLinesLand(distance);
                }
                if (time >= 120 && time <= 140) {
                    craft_status = "END_DESCEND";
                }
                //check for successful landing
                if (time >= 140 && distance >= 500 && altitude < 6) {
                    location.href = "passed.html";
                }
                if (time >= 170) {
                    location.href = "failed.html";
                }
                if (craft_status == "END_DESCEND" && ((movtUnit * 1000) > 15)) {
                    location.href = "failed.html";
                }
            }, 1000);
        }
    }
    //descend the plane
    function descend() {
        craft_rotation = craft_rotation + 0.1;
        craft.style.rotate = craft_rotation + "deg";
        inst_rotation.innerHTML = "Rot: " + Math.trunc(craft_rotation) + " deg";
    }
    //decrease the speed of the plane
    function deccelerate() {
        acceleration = acceleration + 10;
        movtUnit = movtUnit - 0.001;
        inst_velocity.innerHTML = "Speed: " + Math.trunc(movtUnit * 1000);
        if (movtUnit <= 0) {
            movtUnit = 0.00;
            playedPrepTaxi = false;
        }
     reverseInterval = setInterval(function () {
            distance = distance + movtUnit;
            moveLinesTaxi(distance);
        }, 10);
    }
    //move the craft forward
    function moveLinesTaxi(distance) {
        inst_dist.innerHTML = "Dist: " + Math.trunc(distance);
        tower.style.right = parseFloat(distance) + "%";
        //create 88 middle lines on middle of the runway
        for (var x = 0; x < 88; x++) {
            marks[x].style.right = parseFloat(distance - (x * 10.00)) + "%";
        }
        exit_mountains.style.right = parseFloat(distance - 1100.00) + "%";
        background.style.right = parseFloat(distance - 1200.00) + "%";
    }
    //create lines for the landing
    function moveLinesLand(distance) {
        inst_dist.innerHTML = "Dist: " + Math.trunc(distance);
        tower.style.right = parseFloat(distance) + "%";

        //create 88 middle lines on middle of the runway
        for (var x = 0; x < 88; x++) {
            marks[x].style.right = parseFloat(distance - (x * 10.00)) + "%";
        }

        background.style.right = parseFloat(distance - 1200.00) + "%";

    }

    function moveClouds() {
        white_cloud.classList.add("white_cloud_animation");
    }

    setInterval(function () {
        if (craft_rotation <= -16) {
            craft_rotation = -15;
        } else if (craft_rotation >= 6) {
            craft_rotation = 5
        } else if (craft_rotation == 0) {
            craft.classList.add("cruise_class");
            craft.classList.remove("climb_class");
            craft.classList.remove("descend_class");
        } else {
            //display the altitude on instrument

            inst_alt.innerHTML = "Alt: " + Math.trunc(altitude);
            //manipulate the descend and ascend (valid value -15 to 5)
            if ((craft_rotation >= -16) && (craft_rotation <= -12)) {
                altitude = altitude + 0.05;
                craft.style.bottom = parseFloat(altitude) + parseFloat(0.05) + "%";
            } else if ((craft_rotation > -12) && (craft_rotation <= -8)) {
                altitude = altitude + 0.03;
                craft.style.bottom = parseFloat(altitude) + parseFloat(0.03) + "%";
            } else if ((craft_rotation > -8) && (craft_rotation <= -1)) {
                altitude = altitude + 0.01;
                craft.style.bottom = parseFloat(altitude) + parseFloat(0.01) + "%";
            } else if ((craft_rotation > 0) && (craft_rotation <= 2)) {
                altitude = altitude - 0.01;
                craft.style.bottom = parseFloat(altitude) + parseFloat(0.01) + "%";
            } else if ((craft_rotation > 2) && (craft_rotation <= 4)) {
                altitude = altitude - 0.03;
                craft.style.bottom = parseFloat(altitude) + parseFloat(0.03) + "%";
            } else if ((craft_rotation > 4) && (craft_rotation <= 6)) {
                altitude = altitude - 0.05;
                craft.style.bottom = parseFloat(altitude) + parseFloat(0.05) + "%";
            }
        }
    }, 1);

    //set interval to chek the height
    setInterval(function () {
        if (altitude < 5.000) {
            altitude = 5.000;
            craft_rotation = 0;
        }
    }, 1);
});