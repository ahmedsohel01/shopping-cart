"use strict";
/*
let phonePrice = 1219;
const minusBtn = document.querySelector(".fa-minus");
const plusBtn = document.querySelector(".fa-plus");
const inputValue = document.querySelector('input[type="text"]');
const priceValue = document.querySelector(".price");
const subtotal = document.querySelector(".subtotal");
const tax = document.querySelector(".tax");
const total = document.querySelector(".total");

plusBtn.addEventListener("click", function () {
  let inputValueNumber = Number(inputValue.value);
  let priceValueNumber = Number(priceValue.textContent);
  let subtotalNumber = Number(subtotal.textContent);
  let totalNumber = Number(total.textContent);
  inputValueNumber++;
  priceValueNumber = inputValueNumber * phonePrice;
  inputValue.value = inputValueNumber;
  priceValue.textContent = priceValueNumber;

  subtotalNumber += phonePrice;
  totalNumber += phonePrice;
  subtotal.textContent = subtotalNumber;
  total.textContent = totalNumber;
  console.log(priceValueNumber);
});
minusBtn.addEventListener("click", function () {
  let inputValueNumber = Number(inputValue.value);
  let priceValueNumber = Number(priceValue.textContent);
  let subtotalNumber = Number(subtotal.textContent);
  let totalNumber = Number(total.textContent);
  inputValueNumber--;
  priceValueNumber = inputValueNumber * phonePrice;
  inputValue.value = inputValueNumber;
  priceValue.textContent = priceValueNumber;

  subtotalNumber -= phonePrice;
  totalNumber -= phonePrice;
  subtotal.textContent = subtotalNumber;
  total.textContent = totalNumber;

  console.log(inputValueNumber);
});
*/
const phonePrice = 1219;
const phoneCasePrice = 59;
// Plus for first element
document.getElementById("plus1");
// Event
document.getElementById("plus1").addEventListener("click", function () {
  // input Feild
  // const input = document.getElementById("input1");
  // let inputQuantity = Number(input.value);
  // inputQuantity++;
  // input.value = inputQuantity;
  Increment("input1", "price1", phonePrice);

  // Price Increment
  // const price = document.getElementById("price1");
  // const finalPrice = phonePrice + Number(price.innerText);
  // price.innerText = finalPrice;

  // Price Added to Subtotal And Total
});

// secound item
document.getElementById("plus2").addEventListener("click", function () {
  Increment("input2", "price2", phoneCasePrice);
});
// Minus for first elemnt

// Event
document.getElementById("minus1").addEventListener("click", function () {
  // input Feild
  // const input = document.getElementById("input1");
  // let inputQuantity = Number(input.value);
  // inputQuantity--;
  // input.value = inputQuantity;
  decrement("input1", "price1", phonePrice);

  // Price Increment
  // const price = document.getElementById("price1");
  // const finalPrice = Number(price.innerText) - phonePrice;
  // price.innerText = finalPrice;
});
// Secount Item
document.getElementById("minus2").addEventListener("click", function () {
  decrement("input2", "price2", phoneCasePrice);
});

// Increment Function
const Increment = function (count, item, price) {
  const input = document.getElementById(count);
  if (input.value >= 10) {
    alert("You can't buy more than 10.");
  } else {
    input.value++;
    // Price Increment
    const showPrice = document.getElementById(item);
    const finalPrice = price + Number(showPrice.innerText);
    showPrice.innerText = finalPrice;

    const subTotal = document.getElementById("subtotal");
    const subTotalPrice = price + Number(subTotal.innerHTML);
    subTotal.innerHTML = subTotalPrice;
    const total = document.getElementById("total");
    const tax = document.getElementById("tax");
    total.innerHTML = subTotalPrice - Number(tax.innerHTML);
  }
};
// Decrement Function
const decrement = function (count, item, price) {
  const input = document.getElementById(count);
  if (input.value <= 0) {
    alert("Item quantity can't be less than 0.");
  } else {
    input.value--;
    // Price Decrement
    const showPrice = document.getElementById(item);
    const finalPrice = Number(showPrice.innerText) - price;
    showPrice.innerText = finalPrice;

    const subTotal = document.getElementById("subtotal");
    const subTotalPrice = Number(subTotal.innerHTML) - price;
    subTotal.innerHTML = subTotalPrice;
    const total = document.getElementById("total");
    const tax = document.getElementById("tax");
    total.innerHTML = subTotalPrice - Number(tax.innerHTML);
  }
};

// const removeItem = document.getElementsByClassName("remove-item");

// for (let i = 0; i < removeItem.length; i++) {
//   let element = removeItem[i];
//   element.addEventListener("click", function () {
//     element.parentNode.parentNode.parentNode.remove();
//   });
// }
