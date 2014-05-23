/* Primer algoritmo en javaScript */

var d, hh, mm, time, message;

d = new Date();

hh = d.getHours();
mm = d.getMinutes();

//console.log("Horas " + d.getHours());
//console.log("Minutos " + d.getMinutes());


if (hh < 10){
	hh = "0" + hh; 
}else{
	hh = hh.toString();
}


if (mm < 10 ){
	mm = "0" + mm;
}else{
	mm = mm.toString();
}

console.log(typeof(hh));
console.log(typeof(mm));

time = Number(hh + mm);

console.log(hh + mm);

if (time >= 0000 && time <= 1200){
	console.log("Buenos Dias");
}else if (time >= 1200 && time <= 1700){
	console.log("Buenos Tardes");
}else if (time >= 1700 && time <= 2359){
	console.log("Buenos Noches");
}
