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
//現在時刻を inputタグと同じ形式で取得
function getCurrentTime(){
    let now = new Date();
    let hour = now.getHours().toString().padStart(2, '0');  //例） 1を01にする
    let min = now.getMinutes().toString().padStart(2, '0');  //例） 1を01にする

    let currentTime = hour + ':' + min 
    return currentTime;
}
//setInterval("getCurrentTime()", 100);

//設定時刻と現在時刻が一致したらチャイムを鳴らす
function compareTime(chimeTime, chimeID){
    if(chimeTime == getCurrentTime()){
        let audioElem = new Audio('audio/Japanese_School_Bell02-02(Slow-Mid).mp3');  //このJSを読み込んでいるHTMLから見たパス
        audioElem.play();
        clearInterval(chimeID);
    }
}

let chime1 = document.getElementById('chime1');
let chimeID1 = setInterval("compareTime(chime1.value, chimeID1)", 100);

let chime2 = document.getElementById('chime2');
let chimeID2 = setInterval("compareTime(chime2.value, chimeID2)", 100);

let chime3 = document.getElementById('chime3');
let chimeID3 = setInterval("compareTime(chime3.value, chimeID3)", 100);

let chime4 = document.getElementById('chime4');
let chimeID4 = setInterval("compareTime(chime4.value, chimeID4)", 100);

let chime5 = document.getElementById('chime5');
let chimeID5 = setInterval("compareTime(chime5.value, chimeID5)", 100);

let chime6 = document.getElementById('chime6');
let chimeID6 = setInterval("compareTime(chime6.value, chimeID6)", 100);

let chime7 = document.getElementById('chime7');
let chimeID7 = setInterval("compareTime(chime7.value, chimeID7)", 100);

let chime8 = document.getElementById('chime8');
let chimeID8 = setInterval("compareTime(chime8.value, chimeID8)", 100);

let chime9 = document.getElementById('chime9');
let chimeID9 = setInterval("compareTime(chime9.value, chimeID9)", 100);

let chime10 = document.getElementById('chime10');
let chimeID10 = setInterval("compareTime(chime10.value, chimeID10)", 100);

let chime11 = document.getElementById('chime11');
let chimeID11 = setInterval("compareTime(chime11.value, chimeID11)", 100);

let chime12 = document.getElementById('chime12');
let chimeID12 = setInterval("compareTime(chime12.value, chimeID12)", 100);
//***** チャイム *****//