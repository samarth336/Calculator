function appendToDisplay(value) {
    document.getElementById("calculation").value+= value;
}

function clearDisplay() {
    document.getElementById("calculation").value = "";
    document.getElementById("answer").innerText="";
}
function deleteLast() {
const display = document.getElementById("calculation");
display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById("calculation");
    const answer = document.getElementById("answer");
    try {
      answer.innerText = eval(display.value);
    } catch {
      display.innerText = "Error";
    }
  }

let one=document.querySelector(".one");
one.addEventListener("click",()=>{
    appendToDisplay(1);
})
let two=document.querySelector(".two");
two.addEventListener("click",()=>{
    appendToDisplay("2");
})
let three=document.querySelector(".three");
three.addEventListener("click",()=>{
    appendToDisplay("3");
})
let four=document.querySelector(".four");
four.addEventListener("click",()=>{
    appendToDisplay("4");
})
let five=document.querySelector(".five");
five.addEventListener("click",()=>{
    appendToDisplay("5");
})
let six=document.querySelector(".six");
six.addEventListener("click",()=>{
    appendToDisplay("6");
})
let seven=document.querySelector(".seven");
seven.addEventListener("click",()=>{
    appendToDisplay("7");
})
let eight=document.querySelector(".eight");
eight.addEventListener("click",()=>{
    appendToDisplay("8");
})
let nine=document.querySelector(".nine");
nine.addEventListener("click",()=>{
   appendToDisplay("9");
})
let zero=document.querySelector(".zero");
zero.addEventListener("click",()=>{
    appendToDisplay("0");
})
let blank=document.querySelector(".blank");
blank.addEventListener("click",()=>{
    appendToDisplay("00");
})
let plus=document.querySelector(".plus");
plus.addEventListener("click",()=>{
    appendToDisplay("+");
})
let minus=document.querySelector(".minus");
minus.addEventListener("click",()=>{
    appendToDisplay("-");
})
let division=document.querySelector(".division");
division.addEventListener("click",()=>{
    appendToDisplay("/");
})
let multiply=document.querySelector(".multiply");
multiply.addEventListener("click",()=>{
    appendToDisplay("*");
})
let squareroot=document.querySelector(".squareroot");
squareroot.addEventListener("click",()=>{
    appendToDisplay("**(0.5)");
})
let equal=document.querySelector(".equal");
equal.addEventListener("click",()=>{
   calculateResult();
})
let dot=document.querySelector(".dot");
dot.addEventListener("click",()=>{
    appendToDisplay(".");
})
let ac=document.querySelector(".ac");
ac.addEventListener("click",()=>{
   clearDisplay();
})
let c=document.querySelector(".c");
c.addEventListener("click",()=>{
   deleteLast();
})

