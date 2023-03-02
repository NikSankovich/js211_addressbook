let input = '';


const userInput = document.getElementById('userInput');
const button = document.getElementById('button')
const reset = document.getElementById('reset')
const textOutput = document.getElementById('textOutput')
console.log(button)


userInput.addEventListener('keyup', (event) => {
    input = event.target.value
    console.log(input)
})

button.addEventListener('click', () => {
  textOutput.innerText = numOfRampsBelow(userInput.value)
})

reset.addEventListener('click', () => {
  userInput.value = '';
  textOutput.innerText = '';
  input = '';
})

// this function allows for single digit numbers to considered ramp numbers
// --------------------------------------------------------------------
function rampNumber(num) {
    let currentNum = num.toString().split("").map(Number);
    
    for (let i = 0; i < currentNum.length; i++) {               
      if (currentNum[i] < currentNum[i-1]) {
        return false;
      }
    }
    return true;
  }
  
  // this function does NOT consider single digit numbers as ramp numbers
  // --------------------------------------------------------------------
  // function rampNumber(num) {
  //   let currentNum = num.toString().split("").map(Number);
    
  //   for (let i = 0; i < currentNum.length; i++) {               
  //     if (currentNum.length < 2) {
  //       return false;
  //     } else if (currentNum.length >= 2 && currentNum[i] < currentNum[i-1]) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }
  
  // console.log(rampNumber(99999))
  
  // working function!
  // --------------------------------------------------------------------
  
  
  function numOfRampsBelow(num) {
    if (num < 0 || num > 99999) {
      return "Invalid number!";
    }
    
    // let numArr = num                 //Array.from(Array(num).keys());
    let counter = 0;
  
    for (let i = 0; i<num ; i++) {
      console.log(num)
      //numArr.length
      if (rampNumber(i+1)) {
        console.log(i)
        counter++
      }
    }
    // return `${counter} total ramp numbers are less than ${num}.`;
    return `${counter} total ramp numbers are less than ${num}.`
  }
  // console.log(numOfRampsBelow(99999))
  // console.log(rampNumber(12342))
  
  
  
  
  // "push yourself further" - this function prints out the found ramp numbers
  // -------------------------------------------------------------------------
  // function numOfRampsBelow(num) {
  //   num = Number(num)
  //   if (num < 0 || num > 99999) {
  //     return "Invalid number!";
  //   }
    
   
  //   let numArr = Array.from(Array(num).keys());
  //   let counter = 0;
    
  //   let rampNums = [];
  
  //   for (let i = 0; i < numArr.length; i++) {
  //     if (rampNumber(numArr[i])) {
  //       rampNums.push(numArr[i])
  //       counter++
  //     }
  //   }
    
    
  //   return `${counter} total ramp numbers are less than ${num}.` //The ramp numbers are: ${rampNums}
  // }