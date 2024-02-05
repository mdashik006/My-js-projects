


function clock()
{

    let hour = document.getElementById('hour');
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');

    hour = new Date().getHours();
    min = new Date().getMinutes();
    sec = new Date().getSeconds();
    
    if(hour>12)
    {
        hour= hour-12
        document.getElementById('ampm').innerHTML = "PM"
    }
    
    hour = hour<10?"0"+hour:hour
    sec = sec<10?"0"+sec:sec
    min = min<10?"0"+min:sec

    document.getElementById('hour').innerHTML =hour;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;  
}

setInterval(clock,1)
