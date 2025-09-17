let count = 5;

function countdown() {
  if (count > 0) {
   console.log(count)
   count--
   setTimeout(countdown,1000) // 1 second ke baad dobara call
  } else {
    console.log("Time's up!");
  }
}

// start timer
countdown();
