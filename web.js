const daysEl=document.getElementById('days')
const hoursEl=document.getElementById('hours')
const minutesEl=document.getElementById('minutes')
const secondsEl=document.getElementById('seconds')
const newYears='31 Dec 2021';
function countdown(){
const currentDate= new Date();
const newYearsDate= new Date(newYears)
Totalseconds=(newYearsDate-currentDate)/1000
seconds=Math.floor(Totalseconds%60)
minutes=Math.floor(Totalseconds/60)%60
hours=Math.floor(Totalseconds/3600)%24
days=Math.floor(Totalseconds/3600/24)
if(seconds<10) {
    seconds="0"+seconds
}else{seconds;
}
if(minutes<10){
    minutes="0"+minutes
}else{minutes;}
if(hours<10){
    hours="0"+hours
}else{hours;}


    daysEl.innerText=days;
    hoursEl.innerText=hours;
    minutesEl.innerText=minutes;
    secondsEl.innerText=seconds;
    
}
setInterval( countdown,1000)
//console.log(days,hours,minutes,seconds)