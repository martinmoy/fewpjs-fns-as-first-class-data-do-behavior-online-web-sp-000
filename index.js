/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(timeString) {
  let timevalue = timeString.split(":");
  let times = timevalue[0];

  if (times[0] < 12) {
    return "Good Morning";} 
    else if (times[0] > 11 && times[0] < 17) {
    return "Good Afternoon";} 
    else {
    return "Good Evening";}
}
