/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let t = parseInt(time);
  let greeting = "";
  if (t<12) {
    greeting = "Good Morning";
  } else if (t<17) {
    greeting = "Good Afternoon";
  }else{
    greeting = "Good Evening";
  }
  return greeting;
}
/* Write your implementation of displayMessage() */
function displayMessage(text) {
    let g = document.querySelector('#greeting');
    g.innerText = text;
}