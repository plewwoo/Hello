function myStartFunction() {
  for(i=0; i<15; i++){
    if(i % 2 == 0){
      setTimeout(helloFunc, i * 2000);
    }
    else if(i % 2 != 0){
      setTimeout(blankFunc, i * 2000);
    }
  }
}

function helloFunc(){
  text.innerHTML = "Hello";
}

function blankFunc(){
  text.innerHTML = "...";
}

function timeStart(){
  var x = document.getElementById("text")
  var TIMER_TICK = 1000;
	var timer = null;
	var second = 30; 
  clock.innerHTML = second;
	//setting timer using setInterval function
	timer = setInterval(timeCount, TIMER_TICK);
  text.style.display = "inline-block";

  function timeCount(){
		second = second - 1;
    clock.innerHTML = second;
		
    if (second == 0) {
      clearInterval(timer);
			clock.innerHTML = "0";
      x.style.display = "none";
		}
  }
}