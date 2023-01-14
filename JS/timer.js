const audio = new Audio('../Audio/timer.mp3'); //Sound File
//Initialising Variables
var started = false;
var paused = true;
//Default Time Variables
var minute_default = 10;
var second_default = 0;
//Time Variables That Will Be Edited
var minute = 10;
var second = 0;

//Timer Start Function
function start() {
  if ( started == false ) {
    started = true;
    paused = false;
  }
};


//Pause Timer Function
function pause() {
  const pause_button = document.getElementById('pause')
  if (started == true ) {
    paused = ! paused;
    if ( paused == false ) {
      pause_button.innerHTML = 'Pause';
    }
    else {
      pause_button.innerHTML = 'Resume';
    }
  }
};


//Reset Timer Function
function reset() {
  started = false;
  paused = true;
  minute = minute_default;
  second = second_default;
  document.getElementById('pause').innerHTML ='Pause';
  if ( minute.toString().length == 1 ) {
    minute = '0' + minute;
  };
  if ( second.toString().length == 1 ) {
    second = '0' + second;
  };
  document.getElementById('Counter').innerHTML = minute + ':' + second;
};

//Function To Change Timer Length
function set_time(){
  const length = document.getElementById('Timer_Length');
  started = false;
  paused = true;
  document.getElementById('pause').innerHTML ='Pause';
  if (length.value == '1_Minutes') {
    minute_default = 1;
    second_default = 0;
    minute = minute_default;
    second = second_default;
  };
  if (length.value == '5_Minutes') {
    minute_default = 5;
    second_default = 0;
    minute = minute_default;
    second = second_default;
  };
  if (length.value == '10_Minutes'){
    minute_default = 10;
    second_default = 0;
    minute = minute_default;
    second = second_default;
  };
  if (length.value == '15_Minutes'){
    minute_default = 15;
    second_default = 0;
    minute = minute_default;
    second = second_default;
  };
  if (length.value == '20_Minutes'){
    minute_default = 20;
    second_default = 0;
    minute = minute_default;
    second = second_default;
  };
  if (length.value == '25_Minutes'){
    minute_default = 25;
    second_default = 0;
    minute = minute_default;
    second = second_default;
  };
  if (length.value == '30_Minutes'){
    minute_default = 30;
    second_default = 0;
    minute = minute_default;
    second = second_default;
  };
  if ( minute.toString().length == 1 ) {
    minute = '0' + minute;
  }
  if ( second.toString().length == 1 ) {
    second = '0' + second;
  }
  document.getElementById('Counter').innerHTML = minute + ':' + second;
};

//Run The Timer Every Second Using built in function setInterval() at 1000ms intervals
setInterval( function timer() {
  if (paused != true) {
    if (minute == 0 && second == 1 ) {
      document.getElementById('Counter').innerHTML = '00:00';
      audio.play();
    }
    else {
      if ( second == 0 ) {
        minute --;
        second = 60;
        if ( minute == 0 ) {
          minute = minute;
        }
      }
      second --;
      if ( minute.toString().length == 1 ) {
        minute = '0' + minute;
      }
      if ( second.toString().length == 1 ) {
        second = '0' + second;
      }
      document.getElementById('Counter').innerHTML = minute + ':' + second;
    }
  }
}, 1000)
