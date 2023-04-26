"use strict";
const onBtn = document.querySelector(".on");
const offBtn = document.querySelector(".off");
const toggleBtn = document.querySelector(".toggle");
const endBtn = document.querySelector(".end");
const main = document.querySelector("main");
let totalParagraph = document.querySelector(".total");
let coinTotalParagraph = document.querySelector(".coin-total");
const addCoin = document.querySelector(".addCoin");
const coins = document.querySelector(".coins");
const lightBulbColor = document.querySelector(".bulbStyle");
const allLightButtons = document.querySelectorAll(".light-btn");
let total = 0.0;
let coinTotal = 0;

// 1. & 3.----------------------------------------------------------------
main.addEventListener("click", (e)=>{
        // e.target is the thing we just clicked
    if(e.target.classList.contains("lime-cola")){
        total += 2.00;
        totalParagraph.textContent = `Total: $${total.toFixed(2)}`;
        console.log(total);
    } else if(e.target.classList.contains("salted-peanuts")){
        total += 3.00;
        totalParagraph.textContent = `Total: $${total.toFixed(2)}`;
        console.log(total);
    } else if(e.target.classList.contains("chocolate-bar")){
        total += 4.00;
        totalParagraph.textContent = `Total: $${total.toFixed(2)}`;
        console.log(total);
    }
    else if(e.target.classList.contains("fruit-gummies")){
        total += 6.00;
        totalParagraph.textContent = `Total: $${total.toFixed(2)}`; //.toFixed() allows you to add decimals and returns string 
        console.log(total);
    }
    else if(e.target.classList.contains("on")){
        lightBulbColor.classList.add("light-on");
    }
    else if(e.target.classList.contains("off")){
        lightBulbColor.classList.remove("light-on");
        lightBulbColor.style.color = "white";
        lightBulbColor.style.backgroundColor = "black";
    }
    else if(e.target.classList.contains("toggle")){
        // if(lightBulbColor.style.backgroundColor === "black" && lightBulbColor.style.color === "white"){
        //     lightBulbColor.style.backgroundColor = "yellow";
        //     lightBulbColor.style.color = "orange";
        // } else {
        //     lightBulbColor.style.backgroundColor = "black";
        //     lightBulbColor.style.color = "white";
        // }
        lightBulbColor.classList.toggle("light-on");
    }
    else if(e.target.classList.contains("end")){
        lightBulbColor.remove();
        // onBtn.disabled = true;
        // offBtn.disabled = true;
        // toggleBtn.disabled = true;
        // endBtn.disabled = true;
        allLightButtons.forEach((button)=>{
          button.disabled = true;
          // button.setAttribute("disabled", "true");
        })
    }
});

// 2. ---------------------------------------------------
addCoin.addEventListener("submit", (e) => {
  // only need e.preventDefault with form submit listener:
  e.preventDefault();
  const amount = document.querySelector("#amount");
  const coinType = document.querySelector("#coinType");
  // console.dir(coinType);
  let amountValue = amount.value;
  for (let i = 0; i < amountValue; i++) {
    let coinTypeValue = coinType.value;
    const newListItem = document.createElement("li");
    const coinParagraph = document.createElement("p");
    const optionElement = document.querySelector(`.${coinTypeValue}`);
    const valueOfCoin = optionElement.getAttribute("data-value");
    newListItem.setAttribute("data-coinValue", valueOfCoin);
    coinTotal += +valueOfCoin; 
    coinTotalParagraph.textContent = `Total: $${coinTotal.toFixed(2)}`;

    coinParagraph.textContent = coinTypeValue;
    newListItem.classList.add("coin", coinTypeValue);
    newListItem.style.display = "flex";
    newListItem.append(coinParagraph);
    coins.append(newListItem);
  }
});

coins.addEventListener("click", (e)=>{
    if (e.target.classList.contains("coin")) {
      e.target.remove();
      // ext challenge
      coinTotal -= +e.target.getAttribute("data-coinValue");
      coinTotalParagraph.textContent = `Total: $${coinTotal.toFixed(2)}`;
    }
});

