function arrows() {
    var lbs = 0, length = 0, point = 0, spine = 0

    lbs = Number(document.getElementById("lbs").value)
    length = Number(document.getElementById("inches").value)
    point = Number(document.getElementById("point").value)

    if (point >= 50 && point <= 150 && lbs >= 17 && lbs <= 69 && length >= 21 && length <= 33) {
        lbs = lbs + (point - 100) * 0.15;
        spine = -25 * lbs + 2362.5 - (length - 21) * 100;
        console.log(spine);
    }

    if (spine >= 300 && spine <= 2000) {
        document.getElementsByClassName('spine')[0].innerHTML = spine.toFixed(0);
        document.getElementsByClassName('message')[0].innerHTML = "";
    } else {
        document.getElementsByClassName('message')[0].innerHTML = "Out of range!";
        document.getElementsByClassName('spine')[0].innerHTML = "";
    }
}
