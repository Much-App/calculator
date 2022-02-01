const display = document.querySelector('#display');

const multiplybtn = document.querySelector('#multiply');
const dividebtn = document.querySelector('#divide');
const addbtn = document.querySelector('#add');
const subtractbtn = document.querySelector('#subtract');
const exponentbtn = document.querySelector('#exponent');
const clearbtn = document.querySelector('#clear');
const equalbtn = document.querySelector('#equal');

const button = document.querySelectorAll(button);
/*  */

button.forEach(btn=>btn.addEventListener('click', buttonPress))


  
let input = [];
let result = ''

function buttonPress() {
  if (input.length == 0) {
    if (this.id == 'number') {
      return input[0] = this.textContent} else {return 'error'}
    }


  if (this.id == 'number') {
    input[input.length-1] += this.textContent
  } else {
    input[input.length] = `${this.id}`   

  }
  
  check(input)

}

function pressEqual () {
  let inputInNums = test.map(turnToNumber)
  result = calculate (inputInNums)

}


function turnToNumber (str) {
  if (str == '^'||str == '*'||str == '/'||str == '+'||str == '-') {return str}
  return Number(str)
}
function calculate (arr) {

  for (let i = 0; i < arr.length; i++){
      if (arr[i]=== '^') {
        let exp = Math.pow(arr[i-1],arr[i+1]);
        arr.splice(i-1,3,exp);
        i--;
      }
    } 
  
  for (let i = 0; i < arr.length; i++){
    if (arr[i]=== '*' ||arr[i]=== '/' ) {
        if (arr[i]=== '*') {
            let product = arr[i-1] * arr[i+1];
            arr.splice(i-1,3,product);
            i--;

        }
        if (arr[i]=== '/' ){
            let quotient = arr[i-1] / arr[i+1];
            arr.splice(i-1,3,quotient);
            i--;
        }
      }
    }
  for (let i = 0; i < arr.length; i++){
      if (arr[i]=== '+' ||arr[i]=== '-' ) {
          if (arr[i]=== '+') {
            let sum = arr[i-1] + arr[i+1];
          arr.splice(i-1,3,sum); 
          i--;
          check(arr);

          } 
          if (arr[i]=== '-' ){
          let difference = arr[i-1] - arr[i+1];
          arr.splice(i-1,3,difference); 
          i--;
          check(arr);
          }
        }
      }
  return arr[0]
}

function check (a) {
  console.log(a)}








/* button sounds */ 
let sound = true
const btn = Array.from(document.querySelectorAll(".btn"));
btn.forEach(btn=> btn.addEventListener('click', playSound));

  function playSound() {
    if (this.id == 'equal') {
        const calc = document.querySelector("#calculating");
        calc.play();
    } else {
      const beep = document.querySelector("#beep");
      const boop = document.querySelector("#boop");
      if (sound == true) {
          beep.currentTime = 0;
          beep.play();
          return sound = false
      } else if (sound == false) {
          boop.currentTime = 0;
          boop.play(); 
          return sound = true
    }
    }
  }
