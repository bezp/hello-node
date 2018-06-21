

// var aa = require('./two.js');

// console.log(aa.greet);

// console.log(aa.test);

// (function xone() {
//   var paraResponse;
//   var userInput;
//   var submitButton;
//   xtwo();


// var submitButton = document.querySelector('button[type=button]');
// // import submitButton from 'two';
// submitButton.addEventListener('click', () => {
//   var inputValue = userInput.value;
//   var longestLength = 0;
//   var longestWord = '';
//   var inputList = inputValue.replace(/\./g,'').split(' ');
//   for (var xx = 0; xx < inputList.length; xx++) {
//     if (inputList[xx].length > longestLength){
//       longestLength = inputList[xx].length;
//       longestWord = inputList[xx];
//     }
//   }
//   paraResponse.style.color = 'red';
//   paraResponse.innerHTML = longestWord;
//   userInput.value = '';

// })


// }())


// var foo = function(){
//   // bar();
//   var paraResponse, userInput, submitButton = bar();
//   console.log('er');
//   // console.log(xxx);
//   console.log(paraResponse);
//   console.log(userInput);
//   console.log(submitButton);
// };

// var para = document.querySelector('button[type=button]');
// para.addEventListener('click', foo);




// var xxfun = xfun();
// console.log()


var submitButton = document.querySelector('button[type=button]');
submitButton.addEventListener('click', () => {
  userInput = userInput.value;
  // console.log(userInput);
  var xput = userInput.split('').reverse().join('');
  paraResponse.innerHTML = xput;

})


// how do i link multiple js so that behavior in one can be used in the other
var xs = xs();
console.log(xs);
