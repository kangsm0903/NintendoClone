const slideBox = document.querySelector(".slide_box");
const slideList = document.querySelector(".slide_list");
const slideContents = document.querySelectorAll(".slide_content"); // contents들 0~7개로 총 8개임
const slideBtnPrev = document.querySelector(".slide_button_prev");
const slideBtnNext = document.querySelector(".slide_button_next");
const slideWidth = window.screen.width; // 너비
const slideSpeed = 300; // 0.3초를 위한 시간
const slideLength = slideContents.length; // 8
const slideCount = document.querySelector(".slide_count");

slideList.style.width = slideWidth * (slideLength + 2) + "px";

let firstChild = slideList.firstElementChild;
let lastChild = slideList.lastElementChild;
let clonedFirst = firstChild.cloneNode(true);
let clonedLast = lastChild.cloneNode(true);

slideList.appendChild(clonedFirst);
slideList.insertBefore(clonedLast, slideList.firstElementChild);

slideList.style.transform = "translateX(-" + slideWidth + "px)";

const base = -slideWidth; //-1920
const last = slideWidth * -8; //*8
let total = base;
const value = slideWidth; //2000

function NextImg() {
  // 마지막 1번 슬라이드에 도달했을 때
  total -= value; // total = -15300
  if (total === slideWidth * -9) {
    //*9
    slideList.style.transition = slideSpeed + "ms";
    slideList.style.transform = "translateX(" + total + "px)"; // 일단 -15300의 슬라이드로 이동
    setTimeout(function () {
      slideList.style.transition = "0ms";
      total = base; // total = -1700
      slideList.style.transform = "translateX(" + total + "px)"; // 처음 1번 슬라이드로 이동
      slideCount.innerHTML = Math.abs(total) / slideWidth + "&nbsp";
    }, slideSpeed);
  } else {
    slideList.style.transition = slideSpeed + "ms";
    slideList.style.transform = "translateX(" + total + "px)";
    setTimeout(function () {
      slideCount.innerHTML = Math.abs(total) / slideWidth + "&nbsp";
    }, slideSpeed);
  }
}

// function NextImg() {
//   if (total === -3600) {
//     // 마지막 1번 슬라이드에 도달했을 때

//     setTimeout(function () {
//       slideList.style.transition = "0ms";
//       slideList.style.transform = "translateX(" + base + "px)";
//       total = base;
//     }, slideSpeed);
//   } else {
//     slideList.style.transition = slideSpeed + "ms";
//     total -= value;
//     slideList.style.transform = "translateX(" + total + "px)";
//   }
// }

function PrevImg() {
  // 맨 처음 8번 슬라이드에 도달했을 때
  total += value;
  if (total === 0) {
    slideList.style.transition = slideSpeed + "ms";
    slideList.style.transform = "translateX(" + total + "px)";
    setTimeout(function () {
      slideList.style.transition = "0ms";
      total = last;
      slideList.style.transform = "translateX(" + total + "px)";
      slideCount.innerHTML = Math.abs(total) / slideWidth + "&nbsp";
    }, slideSpeed);
  } else {
    slideList.style.transition = slideSpeed + "ms";
    slideList.style.transform = "translateX(" + total + "px)";
    setTimeout(function () {
      slideCount.innerHTML = Math.abs(total) / slideWidth + "&nbsp";
    }, slideSpeed);
  }
}

// function PrevImg() {
//   if (total === 0) {
//     // 맨 처음 8번 슬라이드에 도달했을 때
//     setTimeout(function () {
//       slideList.style.transition = "0ms";
//       slideList.style.transform = "translateX(" + last + "px)";
//       total = last;
//     }, slideSpeed);
//   } else {
//     slideList.style.transition = slideSpeed + "ms";
//     total += value;
//     slideList.style.transform = "translateX(" + total + "px)";
//   }
// }

function init() {
  slideBtnNext.addEventListener("click", NextImg);
  slideBtnPrev.addEventListener("click", PrevImg);
}

init();

//https://im-developer.tistory.com/97 참고
// 블로그에 올리고 count값이 맨 처음하고 마지막에 0하고 9가 되는 것좀 고치기
// 페이지 버튼 클릭할때 마우스 커서 모양 바꾸기.
