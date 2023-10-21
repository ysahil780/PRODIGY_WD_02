var hr=0;
var min=0;
var sec=0;
var cnt=0;

let music = new Audio("./stopwatch.mp3");

var timer = false;

function start(){
    timer=true;
    stopwatch();
    music.play();
}

function stop(){
    timer=false;
    music.pause();
}

function reset(){
    timer=false;
    music.pause();
    hr=0;
    min=0;
    sec=0;
    cnt=0;

    document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("count").innerHTML="00";
    
}

function stopwatch(){
    if(timer==true){
        cnt=cnt+1;
        
        if(cnt==100){
            sec=sec+1;
            cnt=0;
        }

        if(sec==60){
            min=min+1;
            sec=0;
            // cnt=0;
        }

        if(min==60){
            hr=hr+1;
            min=0;
            sec=0;
            // cnt=0;
        }

        var hrString=hr;
        var minString=min;
        var secString=sec;
        var cntString=cnt;


        if(cnt<10){
            cntString="0"+cnt;
        }

        if(sec<10){
            secString="0"+sec;
        }

        if(min<10){
            minString="0"+min;
        }

        if(hr<10){
            hrString="0"+hr;
        }
        
        setTimeout("stopwatch()" , 10);
        document.getElementById("count").innerHTML=cntString;
        document.getElementById("sec").innerHTML=secString;
        document.getElementById("min").innerHTML=minString;
        document.getElementById("hr").innerHTML=hrString;
        
    }
}