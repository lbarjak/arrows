function arrows() {
    var lbs = 0, length = 0, point = 0, spine = 0
    
    lbs = Number(document.getElementById("lbs").value)
    length = Number(document.getElementById("inches").value)
    point = Number(document.getElementById("point").value)

    if(point < 50 || point > 150) {
        document.getElementsByClassName('point')[0].innerHTML = 'point: out of range, it will be 100 gn'
        point = 100;
    } else {
        document.getElementsByClassName('point')[0].innerHTML = 'point: ' + point.toFixed(0)
    }

    lbs = lbs + (point - 100) * 0.15

    //lbs += 2.5; //GMX25 + long32#@27 + 22@14 string

    spine = -100 * length + 4000 - 100 * (lbs - 18.5) / 4
    if(spine >= 280 && spine <= 2000) {
        document.getElementsByClassName('spine')[0].innerHTML = 'spine: ' + spine.toFixed(0)
    } else {
        document.getElementsByClassName('spine')[0].innerHTML = 'spine: out of range'
    }
    
    console.log(spine)
}