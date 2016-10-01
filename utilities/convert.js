
var toHour=function(value){
	return toMinute(value)*60;
}
var toMinute=function(value){
	return toSecond(value)*60;
}
var toSecond=function(value){
	return value * 1000;
}

var convert={
    toHour:toHour,
    toMinute:toMinute,
    toSecond:toSecond
}

module.exports = convert;