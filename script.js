"use strict";
const limeColaBtn = document.querySelector(".lime-cola");
const saltedPeanutsBtn = document.querySelector(".salted-peanuts");
const chocolateBarBtn = document.querySelector(".chocolate-bar");
const fruitGummiesBtn = document.querySelector(".fruit-gummies");
const onBtn = document.querySelector(".on");
const offBtn = document.querySelector(".off");
const toggleBtn = document.querySelector(".toggle");
const endBtn = document.querySelector(".end");
const main = document.querySelector("main");
let totalParagraph = document.querySelector(".total");
const addCoin = document.querySelector(".addCoin");
const coins = document.querySelector(".coins");
const lightBulbColor = document.querySelector(".bulbStyle");
let total = 0.0;

// 1. & 3.----------------------------------------------------------------
// main.addEventListener("click", (e)=>{
//     e.preventDefault();
//     if(e.target.classList.contains("lime-cola")){
//         total += 2.00;
//         totalParagraph.textContent = `Total: $${total}`;
//         console.log(total);
//     } else if(e.target.classList.contains("salted-peanuts")){
//         total += 3.00;
//         totalParagraph.textContent = `Total: $${total}`;
//         console.log(total);
//     } else if(e.target.classList.contains("chocolate-bar")){
//         total += 4.00;
//         totalParagraph.textContent = `Total: $${total}`;
//         console.log(total);
//     }
//     else if(e.target.classList.contains("fruit-gummies")){
//         total += 6.00;
//         totalParagraph.textContent = `Total: $${total}`;
//         console.log(total);
//     }
//     else if(e.target.classList.contains("on")){
//         lightBulbColor.style.backgroundColor = "yellow";
//         lightBulbColor.style.color = "orange";
//     }
//     else if(e.target.classList.contains("off")){
//         lightBulbColor.style.backgroundColor = "black";
//         lightBulbColor.style.color = "white";
//     }
//     else if(e.target.classList.contains("toggle")){
//         if(lightBulbColor.style.backgroundColor === "black" && lightBulbColor.style.color === "white"){
//             lightBulbColor.style.backgroundColor = "yellow";
//             lightBulbColor.style.color = "orange";
//         } else {
//             lightBulbColor.style.backgroundColor = "black";
//             lightBulbColor.style.color = "white";
//         }
//     }
//     else if(e.target.classList.contains("end")){
//         lightBulbColor.remove();
//         onBtn.disabled = true;
//         offBtn.disabled = true;
//         toggleBtn.disabled = true;
//         endBtn.disabled = true;
//     }
// });

// 2. ---------------------------------------------------
addCoin.addEventListener("submit", (e) => {
  e.preventDefault();
  const amount = document.querySelector("#amount");
  const coinType = document.querySelector("#coinType");
  console.dir(coinType);
  let amountValue = amount.value;
  for (let i = 0; i < amountValue; i++) {
    let coinTypeValue = coinType.value;
    const newListItem = document.createElement("li");
    const coinParagraph = document.createElement("p");
    coinParagraph.textContent = coinTypeValue;
    newListItem.classList.add("coin");
    newListItem.style.backgroundColor = "gray";
    newListItem.style.display = "flex";
    newListItem.append(coinParagraph);
    newListItem.addEventListener("click", (e) => {
      if (e.target.classList.contains("coin")) {
        e.target.remove();
      }
    });
    coins.append(newListItem);
  }
});
