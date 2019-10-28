function arrows() {
    var lbs = 0, length = 0, point = 0, spine = 0
    
    lbs = Number(document.getElementById("lbs").value)
    length = Number(document.getElementById("inches").value)
    point = Number(document.getElementById("point").value)

    if (point >= 50 && point <= 150 && lbs >= 17 && lbs <= 69 && length >= 21 && length <= 33){
        lbs = lbs + (point - 100) * 0.15;
        spine = -100 * length + 4000 - 100 * (lbs - 18.5) / 4;
        console.log(spine);
    }
    
    if (spine >= 340 && spine <= 1800) {
        document.getElementsByClassName('spine')[0].innerHTML = spine.toFixed(0);
        document.getElementsByClassName('message')[0].innerHTML = "";
    } else {
        document.getElementsByClassName('message')[0].innerHTML = "Out of range!";
        document.getElementsByClassName('spine')[0].innerHTML = "";
    }
}
