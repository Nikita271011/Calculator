const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");
let currentVallue = "";
let operator = "";
let firstValue = "";

buttons.forEach(button =>  {
       button.addEventListener ("click", (e) => { 
         const value = e.target.textContent;

         if (value >= "0" && value <= "9") {
            currentVallue += value;
            display.value = currentVallue;
         } else if (value === "C") {
            currentVallue = "";
            firstValue = "";
            operator = "";
            display.value = "";
         } else if (value === "=") {
            if (firstValue && operator && currentVallue) {
               display.value = eval(`${firstValue} ${operator} ${currentVallue}`);
               currentVallue = display.value;
               operator = "";
               firstValue = "";
            }
         } else {
            operator = value;
            firstValue = currentVallue;
            currentVallue = "";
         }
  })   
})