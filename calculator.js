const display = document.querySelector('#display');



const button = document.querySelectorAll('button');
/*   backspace   */

button.forEach(btn=>btn.addEventListener('click', buttonPress))

let input = [];
let result = 0;
let dotStatus = false;


function buttonPress() {
  if (input.length == 0) { /* if first input */
    if (this.id == 'number') {
      input[0] = this.textContent
      return updateDisplay()
    } else if (this.id == 'pi') {addPi(); return updateDisplay()
    } else if (this.id == 'operand') {return}
  }
  if (this.id === 'pi') {
    addPi()
  }
  if (this.id == 'dot') {
    if (dotStatus === false) {
      if (checkLastInput() === 'operand') {
        input[input.length] = '0.';
      }else {
      input[input.length-1] += '.';
      }
    } 
  }
  if (this.id == 'number') {
    if (checkLastInput() === 'operand') {
      input[input.length] = this.textContent;
    } else {
        input[input.length-1] += this.textContent ;
      } 
  }
  if (this.id == 'operand'){
    if (checkLastInput() === 'operand') {input.splice(input.length-1)};
    if (this.textContent == '^') {input[input.length] = '^'};
    if (this.textContent == '*') {input[input.length] = '*'};
    if (this.textContent == '/') {input[input.length] = '/'};
    if (this.textContent == '+') {input[input.length] = '+'};
    if (this.textContent == '-') {input[input.length] = '-'};
    }
  if (this.id == 'equal') {
    return pressEqual();
  }
  if (this.id == 'soundbtn') {
    if (soundStatus == 'on') {
      return soundStatus = 'off'
    } else if (soundStatus == 'off'){return soundStatus = 'on'}
  }
  if (this.id == 'clear') {
    return clear()
  }
  if (this.id == 'backspace') {
    backspace()
  }
  if (checkLastInput() == 'number')  {checkDotStatus()}
updateDisplay()
}
function pressEqual () {
  let inputInNums = input.map(turnToNumber)
  result = calculate(inputInNums)
  clear()
  result = Math.round(result * 100)/100
  if (result == Infinity) {
    clear()
    return alert('You cannot divide by zero, fool!')}
  display.textContent = result
  if (display.textContent === 'NaN') {return errorMsg()}
  input[0] = result.toString()

}
function updateDisplay() {
  if (input[input.length-1] == '') {input.splice(input.length-1)}
  if (input.length == 0) {return display.textContent = ''}
  let displayText = input.reduce((a,b)=>a + b)
  display.textContent = displayText
}
function checkLastInput (){

  if (input[input.length-1] == '^' || input[input.length-1] == '*' ||input[input.length-1] == '/'||input[input.length-1] == '-'||input[input.length-1] == '+' ) {
    return 'operand'
  } else {return 'number'}
  
}
function clear () {
  input.splice(0)
  display.textContent = ""
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
          } 
          if (arr[i]=== '-' ){
          let difference = arr[i-1] - arr[i+1];
          arr.splice(i-1,3,difference); 
          i--;  
          }
        }
      }
  return arr[0]
}
function errorMsg(){
  clear()
  display.textContent = "ERROR"
}
function addPi () {
  if (checkLastInput() === 'operand' || input.length == 0) {
    input[input.length] = 3.141592
  } else {
      input[input.length] = '*';
      input[input.length] = '3.141592'
    } 
}
function checkDotStatus () {
  let regex = /\./
  let lastStr = input[input.length-1]
  return dotStatus = regex.test(lastStr)
  
}
function backspace (){
  if (checkLastInput() == 'operand') {
    input.splice(input.length-1) }
    else if (checkLastInput() == 'number') {
      let lastElement = input[input.length-1]
      let newLastElem = lastElement.slice(0,lastElement.length-1)
      input[input.length-1] = newLastElem
  }
}
function cl (a) {console.log(a)}








/* button sounds */ 
let sound = true
let soundStatus = 'on'
const btn = Array.from(document.querySelectorAll(".btn"));
btn.forEach(btn=> btn.addEventListener('click', playSound));

function playSound() {
    if (soundStatus == 'on')  {
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
  }
