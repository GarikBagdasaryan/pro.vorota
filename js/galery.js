//Что бы в начале был фокус на раздел все
window.onload = function () {
  filterSelection("all");
  const all = document.querySelector(".vis");
  all.classList.add("focus_all");
};

//При изменении экрана запускать функцию для отображения элементов до показать еще
window.addEventListener("resize", event => {
  if (event.target.window.innerWidth > 660) response1();
  if (event.target.window.innerWidth <= 659) response3();
});

//При нажатии на кнопку "показать еще", скрыть её и отобразить кнопку "скрыть"
function openCatalog() {
  const btn = document.querySelector(".gallery_button_1");
  const btn2 = document.querySelector(".invis");
  const cards = Array.from(document.querySelectorAll(".show"));
  btn.addEventListener("click", () => {
    cards.forEach(item => item.classList.remove("hidden"));
    btn.classList.add("hidden");
    btn2.classList.remove("hidden");
  });
}

//Функция для кнопки скрыть для планшетов и компьютеров
function openCatalog2() {
  const btn = document.querySelector(".gallery_button_1");
  const btn2 = document.querySelector(".invis");
  const cards = Array.from(document.querySelectorAll(".show"));
  btn2.addEventListener("click", () => {
    cards.forEach((item, index) => {
      item.classList.add("hidden");
      if (index <= 3) {
        item.classList.remove("hidden");
      } else if (index > 3) {
        btn.classList.remove("hidden");
      }
    });
    btn.classList.remove("hidden");
    btn2.classList.add("hidden");
  });
}

//Функция для кнопки скрыть для телефонов
function openCatalog3() {
  const btn = document.querySelector(".gallery_button_1");
  const btn2 = document.querySelector(".invis");
  const cards = Array.from(document.querySelectorAll(".show"));
  btn2.addEventListener("click", () => {
    cards.forEach((item, index) => {
      item.classList.add("hidden");
      if (index <= 1) {
        item.classList.remove("hidden");
      } else if (index > 1) {
        btn.classList.remove("hidden");
      }
    });
    btn.classList.remove("hidden");
    btn2.classList.add("hidden");
  });
}

//Функция для кнопки показать еще для планшетов и компьютеров
function response1() {
  const btn = document.querySelector(".gallery_button_1");
  const cards = Array.from(document.querySelectorAll(".show"));
  const btn2 = document.querySelector(".invis");
  btn.classList.add("hidden");
  btn2.classList.add("hidden");
  cards.forEach((item, index) => {
    item.classList.add("hidden");
    if (index <= 3) {
      item.classList.remove("hidden");
    } else if (index > 3) {
      btn.classList.remove("hidden");
    }
    openCatalog();
    openCatalog2();
  });
}

//Функция для кнопки показать еще для телефонов
function response3() {
  const btn = document.querySelector(".gallery_button_1");
  const cards = Array.from(document.querySelectorAll(".show"));
  const btn2 = document.querySelector(".invis");
  btn2.classList.add("hidden");
  btn.classList.add("hidden");
  if (window.innerWidth <= 659) {
    cards.forEach((item, index) => {
      item.classList.add("hidden");
      if (index <= 1) {
        item.classList.remove("hidden");
      } else if (index > 1) {
        btn.classList.remove("hidden");
      }
      openCatalog();
      openCatalog3();
    });
  }
}

//Функция для отображения элементов в зависимости от выбора раздела
filterSelection("all");
function filterSelection(c) {
  const all = document.querySelector(".vis");
  const otkat = document.querySelector("#otkat");
  const section = document.querySelector("#section");
  const raspash = document.querySelector("#raspash");
  const rolst = document.querySelector("#rolst");
  const shlag = document.querySelector("#shlag");
  const automatic = document.querySelector("#automatic");
  const kalit = document.querySelector("#kalit");
  all.classList.remove("focus_all");
  otkat.classList.remove("focus_all");
  section.classList.remove("focus_all");
  raspash.classList.remove("focus_all");
  shlag.classList.remove("focus_all");
  rolst.classList.remove("focus_all");
  automatic.classList.remove("focus_all");
  kalit.classList.remove("focus_all");
  const btn = document.querySelector(".gallery_button_1");
  const btn2 = document.querySelector(".invis");
  const cards = Array.from(document.querySelectorAll(".show"));
  var x, i;
  btn2.classList.add("hidden");
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") {
    c = "";
    all.classList.add("focus_all");
  }
  if (c == "otkat") {
    otkat.classList.add("focus_all");
  }
  if (c == "section") {
    section.classList.add("focus_all");
  }
  if (c == "raspash") {
    raspash.classList.add("focus_all");
  }
  if (c == "rolst") {
    rolst.classList.add("focus_all");
  }
  if (c == "shlag") {
    shlag.classList.add("focus_all");
  }
  if (c == "automatic") {
    automatic.classList.add("focus_all");
  }
  if (c == "kalit") {
    kalit.classList.add("focus_all");
  }
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
  response1();
}

// Показ элементов
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Их скрытие
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("work-btn");
