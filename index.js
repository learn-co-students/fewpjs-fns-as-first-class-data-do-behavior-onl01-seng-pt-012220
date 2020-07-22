/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  if (time.length == 5) {
    hour = time.slice(0,2);
  }else{
    hour = time.slice(0,1);
  }

  if (hour<12) {
    greeting = "Good Morning";
  } else if (hour<17) {
    greeting = "Good Afternoon";
  }else{
    greeting = "Good Evening";
  }
  
  return greeting;
}
/* Write your implementation of displayMessage() */
function displayMessage() {
  let b = document.getElementsByTagName('button');
  b[0].addEventListener('click', function () {
    let input = document.querySelector('input');
    let greeting = document.querySelector("#greeting");
    greeting.textContent = greet(input.value);
  });
}