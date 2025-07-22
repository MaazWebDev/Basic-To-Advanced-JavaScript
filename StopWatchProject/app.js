let min_html = document.getElementById('min');
let sec_html = document.getElementById('seconds');
let milli_html = document.getElementById('milliseconds');

let watchInterval ;

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
function start(){
    watchInterval = setInterval(function(){
          milliseconds++
           if(milliseconds >= 99){
            seconds++
            milliseconds = 0
           }
           if(seconds >= 59){
            minutes++
            seconds = 0
           }
          milli_html.innerText = milliseconds
          sec_html.innerText = seconds < 10 ? '0' + seconds : seconds
          min_html.innerText = minutes < 10 ? '0' + minutes : minutes
    }, 10);
}
function stop(){
    clearInterval(watchInterval)
}
function reset(){
    clearInterval(watchInterval)
    minutes = 0 ;
    seconds = 0 ;
    milliseconds = 0 ;

    milli_html.innerText = milliseconds
    sec_html.innerText = seconds
    min_html.innerText = minutes
}