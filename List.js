var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  function crossOut() {
    li.classList.toggle("done");
  }

  li.addEventListener("click", crossOut);

  var dBtn = document.createElement("button");
  dBtn.appendChild(document.createTextNode("X"));
  li.appendChild(dBtn);
  dBtn.addEventListener("click", deleteListItem);

  function deleteListItem() {
    li.classList.add("delete");
  }
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.which === 13) {
    createListElement();
  }
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
/*********/
const title = document.querySelector("h2");
title.style.position = "absolute";
let topPos = 0;
let dir = -1;

function HB() {
  if (topPos == 500) {
    dir = 1;
  } else if (topPos == 10) {
    dir = -1;
  }
  topPos += -2 * dir;
  title.style.top = `${topPos}px`;
  requestAnimationFrame(HB);
}
requestAnimationFrame(HB);
