/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(time) {
  let hour = time.split(':');
  if ( parseInt(hour[0]) < 12 ){
    return "Good Morning";
  } else if (parseInt(hour[0]) > 12 && parseInt(hour[0]) < 17) {
    return "Good Afternoon";
  } else if (parseInt(hour[0]) > 17) {
    return "Good Evening";
  }
};
function displayMessage(msg){
  document.getElementById("greeting").innerText = msg;
}



/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
