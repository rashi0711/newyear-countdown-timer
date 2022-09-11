const countdown=document.getElementById('countdown');
const days=document.getElementById('days');
const hours=document.getElementById('hours');
const minutes=document.getElementById('minutes');
const seconds=document.getElementById('seconds');
const year=document.getElementById('year');
var curr=new Date().getFullYear();
var newcurr=new Date(`January 01 ${curr+1} 00:00:00`);


function getTime()
{
    var today=new Date();
    var diff=newcurr-today;
    var day=Math.floor(diff/1000/60/60/24);
    var hour=Math.floor(diff/1000/60/60)%24;
    var min=Math.floor(diff/1000/60)%60;
    var sec=Math.floor(diff/1000)%60;
    days.innerHTML=day<10?'0'+day:day;
    hours.innerHTML=hour<10?'0'+hour:hour;
    minutes.innerHTML=min<10?'0'+min:min;
    seconds.innerHTML=sec<10?'0'+sec:sec;
    year.innerHTML=curr;
}
setInterval(getTime,1000);