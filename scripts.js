let rocketimage = '';

    window.addEventListener("load", function() {
        rocketimage = document.getElementById("rocket");
        rocketimage.style.position = "absolute";
        rocketimage.style.bottom = "0px";
        rocketimage.style.left = "0px";
    console.log('window loaded');
    });


function takeOff () {
    let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (response) {
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
        document.getElementById("shuttleBackground").style.backgroundColor = "blue";
        document.getElementById("spaceShuttleHeight").innerHTML = "10,000"
    }
}

function land () {
    window.alert("The shuttle is landing.");
    document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
    document.getElementById("shuttleBackground").style.backgroundColor = "green";
    document.getElementById("spaceShuttleHeight").innerHTML = "0";
}

function missionAbort () {
    let response = window.confirm("Confirm that you want to abort the mission.");
    if (response) {
        document.getElementById("flightStatus").innerHTML = "Mission aborted.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = "0";
    }
}

function moveDown() {
    let old_pos = parseInt(rocketimage.style.bottom);
    rocketimage.style.bottom = old_pos - 10 + "px";
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    spaceShuttleHeight.innerHTML = (Number(spaceShuttleHeight.innerHTML) - 10000).toString();    
  }

function moveUp() {
    let old_pos = parseInt(rocketimage.style.bottom);
    rocketimage.style.bottom = old_pos + 10 + "px";
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    spaceShuttleHeight.innerHTML = (Number(spaceShuttleHeight.innerHTML) + 10000).toString();
}

function moveLeft() {
    let old_pos = parseInt(rocketimage.style.left);
    rocketimage.style.left = old_pos - 10 + "px";
}

function moveRight() {
    let old_pos = parseInt(rocketimage.style.left);
    rocketimage.style.left = old_pos + 10 + "px";
}



window.addEventListener("load", init);