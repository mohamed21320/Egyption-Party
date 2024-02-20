/// <reference types="../@types/jquery" />

$('.half i').on('click',function(){
$('.hov').animate({width:"toggle"},500)
})


$('.icon').on('click',function(){
$('.hov').animate({width:"toggle"},500)
})



$('h3').on('click',function(){
    $(this).next().animate({height:"toggle"},500);
})


const d = new Date();
console.log(d);

let hour = d.getHours();
document.getElementById("hours").innerHTML=hour;
let minutes = d.getMinutes();
document.getElementById("minuts").innerHTML=minutes;
let seconds = d.getSeconds();
document.getElementById("sec").innerHTML=seconds;
console.log(d);

let idSec= setInterval(function(){
    document.getElementById("sec").innerHTML=seconds;
    if(seconds==0){
        seconds=59
clearInterval(idSec)

    }
    seconds--;
},1000)


let idMin= setInterval(function(){
    document.getElementById("minuts").innerHTML=minutes;
    if(minutes==0){
minutes=59;

clearInterval(idMin)
    }
    minutes--;
},60000)


let idHour= setInterval(function(){
    document.getElementById("hours").innerHTML=hour;
    if(hour==24){
        hour=0;
clearInterval(idHour);

    }
    hour--;
},3600000)







let max =100;

$('textarea').on('keydown',function(e){
    // let inputval=$('textarea').val().length;
    let inputVal= $(e.target).val().length;
let counter=max-inputVal;
$('.count').text(counter);    
if(counter<=0){
    $('.count').text('Please Enter 100 Character')
}

})








