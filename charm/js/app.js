//***** 時計 *****//
function getDateTime(){
    let today = new Date();
    let clockTime = today.toLocaleString();
    return clockTime;
}

function showClock(){
	document.getElementById('clock').innerHTML = getDateTime();
}

setInterval("showClock()", 100);  //0.1秒毎に showClock()を実行
//***** 時計 *****//

//***** チャイム *****//
function getCurrentTime(){
    let now = new Date();
    let hour = now.getHours().toString().padStart(2, '0');
    let min = now.getMinutes().toString().padStart(2, '0');

    let currentTime = hour + ':' + min 
    return currentTime;
}
setInterval("getCurrentTime()", 100);

function compareTime(){
    let chime = document.getElementById('chime');

    if(chime.value == getCurrentTime()){
        let audioElem = new Audio('audio/Japanese_School_Bell02-02(Slow-Mid).mp3');  //このJSを読み込んでいるHTMLから見たパス
        audioElem.play();
        clearInterval(chimeID);
    }
}
let chimeID = setInterval("compareTime()", 100);
//***** チャイム *****//