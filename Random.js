function test() {
  if (document.querySelector(`.btn1`).textContent == "View More") {
    document.querySelector(`.btn1`).textContent = "View Less";
    document.querySelector(`.bio2`).classList.remove(`hidden`);
  } else {
    document.querySelector(`.btn1`).textContent = "View More";
    document.querySelector(`.bio2`).classList.add(`hidden`);
  }
}
function test1() {
  if (document.querySelector(`.btn2`).textContent == "View More") {
    document.querySelector(`.btn2`).textContent = "View Less";
    document.querySelector(`.bio3`).classList.remove(`hidden`);
  } else {
    document.querySelector(`.btn2`).textContent = "View More";
    document.querySelector(`.bio3`).classList.add(`hidden`);
  }
}
function test2() {
  if (document.querySelector(`.btn3`).textContent == "View More") {
    document.querySelector(`.btn3`).textContent = "View Less";
    document.querySelector(`.bio4`).classList.remove(`hidden`);
  } else {
    document.querySelector(`.btn3`).textContent = "View More";
    document.querySelector(`.bio4`).classList.add(`hidden`);
  }
}
function test3() {
  if (document.querySelector(`.btn4`).textContent == "View More") {
    document.querySelector(`.btn4`).textContent = "View Less";
    document.querySelector(`.bio5`).classList.remove(`hidden`);
  } else {
    document.querySelector(`.btn4`).textContent = "View More";
    document.querySelector(`.bio5`).classList.add(`hidden`);
  }
}
function test5() {
  if (document.querySelector(`.btn6`).textContent == "View More") {
    document.querySelector(`.btn6`).textContent = " View Less";
    document.querySelector(`.bio7`).classList.remove(`hidden`);
  } else {
    document.querySelector(`.btn6`).textContent = "View More";
    document.querySelector(`.bio7`).classList.add(`hidden`);
  }
}
function test4() {
  if (document.querySelector(`.btn5`).textContent == "View More") {
    document.querySelector(`.btn5`).textContent = "View Less";
    document.querySelector(`.bio6`).classList.remove(`hidden`);
  } else {
    document.querySelector(`.btn5`).textContent = "View More";
    document.querySelector(`.bio6`).classList.add(`hidden`);
  }
}

function ValidateEmail(inputText) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (inputText.value.match(regex)) {
    document.querySelector(`.info-1`).classList.remove(`hidden`);
    document.querySelector(`.checkEmail`).style.display = "none";
  } else {
    alert(`Invaild email`);
  }
}
