var play = 0;
const record = document.getElementById("record");

record.addEventListener("click", () => {
    if(play == 0) {
        play = 1;
        record.style.width = "30px"
        record.style.height = "30px"
        record.style.outlineOffset = "20px"
    }
    else {
        play = 0;
        record.style.width = "60px"
        record.style.height = "60px"
        record.style.outlineOffset = "5px"
    }
});