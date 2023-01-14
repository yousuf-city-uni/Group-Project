//functions to change the page visible
function to_timer() {
  window.location = '../HTML/timer.html';
};

function to_time_tracker() {
  window.location = '../HTML/time_tracker.html';
};

var count = 0;

//function to change the study tip every 2500ms
setInterval( function rotate_tip() {
  const tip = document.getElementById('Study_Tip');
  if (count == 0){
    tip.innerHTML = 'Pick a place and time';
  };
  if (count == 1){
    tip.innerHTML = 'Study every day';
  };
  if (count == 2){
    tip.innerHTML = 'Plan your time';
  };
  if (count == 3){
    tip.innerHTML = 'Discover your learning style';
  };
  if (count == 4){
    tip.innerHTML = 'Review and revise';
  };
  if (count == 5){
    tip.innerHTML = 'Take breaks';
  };
  if (count == 6){
    tip.innerHTML = 'Ask for help';
  };
  if (count == 7){
    tip.innerHTML = 'Stay motivated';
  };
  count ++;
  if (count == 8){
    count = 0;
  };
} ,2500)
