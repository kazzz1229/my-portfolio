//*** 時計 ***//
function showCurrentTime(){
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    let time = hour + '時' + min + '分' + sec + '秒';
    return time;
}

function clock(){
	document.getElementById('time').innerHTML = showCurrentTime();
}

setInterval("clock()", 500);  //0.5秒毎に clock()を実行
//*** 時計 ***//

//*** チャイム ***//
let chimeTime = document.getElementById('chime');

function getCurrentTime(){
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();

    let currentTime = hour + ':' + min 
    return currentTime;
}

let currentTime = setInterval("getCurrentTime()", 500);

function compareTime(){
    if(chimeTime.value == currentTime){
        let audioElem = new Audio('../audio/Japanese_School_Bell02-02(Slow-Mid).mp3');
        audioElem.play();
    }
}
setInterval("compareTime()", 500);

//*** チャイム ***//