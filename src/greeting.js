

function greeting () {
  let time = new Date().getHours();
  let result ='good day';
  if(time > 18) {
    result = 'good evening';
  } else if (time > 12) {
    result ='afternoon';
  } else {
    result = 'morning';
  }

  return result;
}  


module.exports = greeting();
// module.exports = greeting;

// module.exports = {
//   greet: greeting
// }