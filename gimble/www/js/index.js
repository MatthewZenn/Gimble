var play = 0;
const record = document.getElementById("record");
var fps = document.getElementById("fps");

var alphax = 0;
var betay = 0;
var gammaz = 0;

var x = 0;
var y = 0;
var z = 0;

let intervalID;
let insIl;

function refresh() {
    document.getElementById("span").style.backgroundColor = "rgb("+ Math.random()*255+","+ Math.random()*255+","+ Math.random()*255+")";
}

setInterval(() => {
    refresh();
}, 1);

record.addEventListener("click", () => {
    if(play == 0) {
        play = 1;
        record.style.width = "30px";
        record.style.height = "30px";
        record.style.outlineOffset = "20px";
        record.style.backgroundColor = "rgb(255, 46, 91)";
        window.addEventListener("deviceorientation", handleOrientation, true);

        x = Math.floor(alphax);
        y = Math.floor(betay);
        z = Math.floor(gammaz);
        
        intervalID = setInterval(() => {
            updater();
        }, 1000/fps.value);
    }
    else {
        play = 0;
        record.style.width = "60px";
        record.style.height = "60px";
        record.style.outlineOffset = "5px";
        record.style.backgroundColor = "white";
        window.removeEventListener("deviceorientation", handleOrientation, true);
        clearInterval(intervalID);
    }
});

function handleOrientation(event) {
    alphax = event.alpha;
    betay = event.beta;
    gammaz = event.gamma;
}

function updater() {
    document.getElementById("x-deg").innerHTML = "X:" + (Math.floor(alphax)-x);
    document.getElementById("y-deg").innerHTML = "Y:" + (Math.floor(betay)-y);
    document.getElementById("z-deg").innerHTML = "Z:" + (Math.floor(gammaz)-z);
}