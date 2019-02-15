function arrows() {
    var lbs = 0, length = 0, point = 0, spine = 0
    
    lbs = Number(document.getElementById("lbs").value)
    length = Number(document.getElementById("inches").value)
    point = Number(document.getElementById("point").value)
    
    lbs = lbs + (point - 100) * 0.15;

    //lbs += 2.5; //GMX25 + long32#@27 + 22@14 string

    spine = -100 * length + 4000 - 100 * (lbs - 18.5) / 4;
    document.getElementsByClassName('spine')[0].innerHTML = 'spine: ' + spine
    console.log(spine)
}