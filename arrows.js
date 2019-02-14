//http://www.winandwinblack.com/pdf/arrows-selection-guide.pdf
var lbs, length, point, spine
lbs = 27
length = 28
point = 80
lbs = lbs + (point - 100) * 0.15

//lbs += 2.5; //GMX25 + long32#@27 + 22@14 string

spine = -100 * length + 4000 - 100 * (lbs - 18.5) / 4;
console.log(spine)