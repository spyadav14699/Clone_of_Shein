///////ranjan script /////////
let images3 = [
  "https://img.ltwebstatic.com/images3_ach/2021/09/18/16319626171fd0640806c24b1b410c55b938d0745a.jpg",
  "https://img.ltwebstatic.com/images3_ach/2021/09/20/1632108178977403ee61ecaf3da969d052f12f7b51.jpg",
  "https://img.ltwebstatic.com/images3_ach/2021/09/18/1631962909806ff5f3e60c4cd2512be03e03fbaf56.jpg",
  "https://img.ltwebstatic.com/images3_ach/2021/09/18/1631962681a6eff30483f477b8fd2634669e08bebd.jpg",
  "https://img.ltwebstatic.com/images3_ach/2021/09/13/163151111911424a447e4e5be85ebc550a2cf96961.jpg",
  "https://img.ltwebstatic.com/images3_ach/2021/09/27/163272272588eee02e1c6eeafc67d10a96b45ef053.jpg",
  "https://img.ltwebstatic.com/images3_ach/2021/09/27/16327226053e1c7467c19bdb89a2bf15f579858e8b.jpg",
  "https://img.ltwebstatic.com/images3_ach/2021/09/27/16327228610326076f8e17420422d353d69d5de1d7.jpg",
  "https://img.ltwebstatic.com/images3_ach/2021/09/26/16326540362431451a66bfe20da71a13a702bc3bd5.jpg",
  "https://img.ltwebstatic.com/images3_ach/2021/09/27/1632720230e08d10a08025adabce9b62256bbc2766.jpg",
  "https://img.ltwebstatic.com/images3_ach/2021/09/27/1632711063f1aaa2b03136478f5b78ea3172bf5dac.jpg",
];

let container3 = document.getElementById("ranslide3");
let count3 = 0;

function slideshow_3(d) {
  let interval_3 = setInterval(function () {
    container3.innerHTML = null;
    if (count3 === images3.length) {
      count3 = 0;
    }
    let img = document.createElement("img");
    img.src = images3[count3];
    container3.append(img);
    count3++;
  }, 2000);
}

slideshow_3(images3);

let images1 = [
  "https://img.ltwebstatic.com/images3_ach/2021/09/27/16327203254e8eab2b3d056839226bf15b184be978.jpg",
  "https://img.ltwebstatic.com/images3_ach/2021/09/10/16312808957b83c71c53d4d4941a21d68954e320a0.jpg",
];

let container1 = document.getElementById("ranslide1");

let count1 = 0;

function slideshow_1() {
  let interval = setInterval(function () {
    container1.innerHTML = null;

    if (count1 === images1.length) {
      count1 = 0;
    }
    let img = document.createElement("img");
    img.src = images1[count1];
    container1.append(img);
    count1++;
  }, 2000);
}

slideshow_1();

let images2 = [
  "https://img.ltwebstatic.com/images3_ach/2021/09/13/163151185905493ad06c961ba5c736f538af33e877.jpg",
  "https://img.ltwebstatic.com/images3_ach/2021/09/18/1631966338d1b3888d62d972229004308f8d20debb.jpg",
  "https://img.ltwebstatic.com/images3_ach/2021/09/27/16327211211d8d338f1619d3599b8797209b107087.jpg",
  "https://img.ltwebstatic.com/images3_ach/2021/09/18/163196338264634c4827421375a398e67ed4c669d2.gif",
  "https://img.ltwebstatic.com/images3_ach/2021/09/26/163263615248607c791f5e95e230ed8d31f98ed381.jpg",
  "https://img.ltwebstatic.com/images3_ach/2021/09/27/1632721151036f8197fe7918e72ad9b822170576aa.jpg",
  "https://img.ltwebstatic.com/images3_ach/2021/08/23/16296875344237b58c5859a2683a56bdadd6470d9e.jpg",
  "https://img.ltwebstatic.com/images3_ach/2021/09/27/1632721161035fef4b084e70147e7ec94eab518b0c.jpg",
];

let container2 = document.getElementById("ranslide2");
let count2 = 0;

function slideshow_2(d) {
  let interval_2 = setInterval(function () {
    container2.innerHTML = null;
    if (count2 === images2.length) {
      count2 = 0;
    }

    let img = document.createElement("img");
    img.src = images2[count2];
    container2.append(img);

    count2++;
  }, 2000);
}

slideshow_2(images2);

////// ranjan /////

var T3vishnu_input1 = document.getElementById("T3vishnu_input1");
var T3vishnu_placeAray = [
  "Skirt",
  "#SHEINXRockTheRun",
  "bra new in",
  "#SHEINX",
  "GLOWMODE",
  "CUCCOO",
  "Multicolor Women Blouses",
  "Polyester Women Blouses",
  "Medium Wash Woman Jeans",
  "Natural Women Jeans",
  "Shoes",
  "Dress",
  "Earrings",
  "Crop Top",
  "Blazer",
];
var z = 0;
T3vishnu_input1.placeholder = T3vishnu_placeAray[z++];
setInterval(function () {
  T3vishnu_input1.placeholder =
    T3vishnu_placeAray[z++ % T3vishnu_placeAray.length];
}, 4000);

var T3vishnu_moveLeft = document.getElementById("T3vishnu_moveLeft");
var T3vishnu_moveRight = document.getElementById("T3vishnu_moveRight");
var T3vishnu_thirdBar1 = document.getElementById("T3vishnu_thirdBar1");

T3vishnu_moveLeft.style.color = "#ece6e6";
T3vishnu_moveLeft.onclick = "";
var T3vishnu_leftElements = "";
function T3vishnu_Moveleft() {
  // alert('Left!')
  T3vishnu_thirdBar1.innerHTML = null;
  T3vishnu_thirdBar1.innerHTML = T3vishnu_leftElements;

  T3vishnu_moveLeft.style.color = "#ece6e6";
  T3vishnu_moveLeft.onclick = "";
  T3vishnu_moveRight.style.color = "black";
  T3vishnu_moveRight.onclick = function () {
    T3vishnu_MoveRight();
  };
}

function T3vishnu_MoveRight() {
  // alert('Right!');
  T3vishnu_leftElements = T3vishnu_thirdBar1.innerHTML;
  T3vishnu_thirdBar1.innerHTML = null;
  // console.log(vishnu_leftElements)

  var T3vishnu_el0 = document.createElement("a");
  T3vishnu_el0.className = "T3vishnuText";
  T3vishnu_el0.textContent = "ACTIVEWEAR";
  T3vishnu_el0.href = "http://127.0.0.1:5500/ThreeBars.html";

  var T3vishnu_el1 = document.createElement("a");
  T3vishnu_el1.className = "T3vishnuText";
  T3vishnu_el1.textContent = "SHOES & ACCS";
  T3vishnu_el1.href = "http://127.0.0.1:5500/ThreeBars.html";

  var T3vishnu_el2 = document.createElement("a");
  T3vishnu_el2.className = "T3vishnuText";
  T3vishnu_el2.textContent = "SALE";
  T3vishnu_el2.href = "http://127.0.0.1:5500/ThreeBars.html";

  var T3vishnu_el3 = document.createElement("a");
  T3vishnu_el3.className = "T3vishnuText";
  T3vishnu_el3.textContent = "EXPLORE";
  T3vishnu_el3.href = "http://127.0.0.1:5500/ThreeBars.html";

  T3vishnu_thirdBar1.append(
    T3vishnu_el0,
    T3vishnu_el1,
    T3vishnu_el2,
    T3vishnu_el3
  );
  T3vishnu_moveRight.style.color = "#ece6e6";
  T3vishnu_moveRight.onclick = "";

  T3vishnu_moveLeft.style.color = "black";
  T3vishnu_moveLeft.onclick = function () {
    T3vishnu_Moveleft();
  };
}

function T3searchIt(T3vishnu_input1) {
  var T3vishnu_input1 = document.getElementById(T3vishnu_input1);
  if (T3vishnu_input1.value == "") {
    alert("Please enter the search term!!💖");
  } else
    alert(
      'Fetching details for "' +
        T3vishnu_input1.value +
        '".Please chill for a moment!!💖'
    );
}
// // // alert('sdf')
var vishnu_text = document.getElementById("vishnu_codeText");
var vishnu_code = document.getElementById("vishnu_codeOfTheDay");
var vishnu_timer = document.getElementById("vishnu_timer");

//Coupon Code information
vishnu_text.textContent = "10% OFF ON ORDERS OF $29+";
vishnu_code.textContent = "CODE: RUNAWAY21";

////////CODEDiscount///////////
vishnu_code.style.paddingTop = "5px";
vishnu_code.style.textAlign = "center";
vishnu_code.style.minWidth = "200px";
vishnu_code.style.fontFamily = "sans-serif";
vishnu_code.style.color = "#010101";
vishnu_code.style.fontSize = "15px";

//////////////text///////////////////
vishnu_text.style.marginLeft = "300px";
vishnu_text.style.fontFamily = "sans-serif";
vishnu_text.style.fontSize = "20px";
vishnu_text.style.minWidth = "300px";
vishnu_text.style.textAlign = "right";

// //timer code
// //create 4 div boxes 02 H 00 M 00 S    start from 2 hour
var vishnu_H = document.createElement("div");
vishnu_H.style.color = "red";
vishnu_H.style.fontWeight = "700";
vishnu_H.style.fontSize = "23px";

var vishnu_div2 = document.createElement("div");
vishnu_div2.textContent = "H";
vishnu_div2.style.color = "white";
vishnu_div2.style.fontWeight = 700;
vishnu_div2.style.fontSize = "23px";

var vishnu_M = document.createElement("div");
vishnu_M.style.color = "red";
vishnu_M.style.fontWeight = 700;
vishnu_M.style.fontSize = "23px";

var vishnu_div4 = document.createElement("div");
vishnu_div4.textContent = "M";
vishnu_div4.style.color = "white";
vishnu_div4.style.fontWeight = 700;
vishnu_div4.style.fontSize = "23px";

var vishnu_S = document.createElement("div");
vishnu_S.style.color = "red";
vishnu_S.style.fontWeight = 700;
vishnu_S.style.fontSize = "23px";

var vishnu_div6 = document.createElement("div");
vishnu_div6.textContent = "S";
vishnu_div6.style.color = "white";
vishnu_div6.style.fontWeight = 700;
vishnu_div6.style.fontSize = "23px";

vishnu_timer.append(
  vishnu_H,
  vishnu_div2,
  vishnu_M,
  vishnu_div4,
  vishnu_S,
  vishnu_div6
);

// //every one second,decrement seconds count

var vishnu_limH = 1;
// limH=1 runs for 2 hours
var vishnu_limM = 59;
var vishnu_limS = 60;
// 1 hour=60 mins
var vishnu_h = vishnu_limH,
  vishnu_m = vishnu_limM,
  vishnu_s = vishnu_limS;

var vishnu_id = setInterval(function () {
  if (vishnu_s > 0) {
    vishnu_s--;
    // console.log(vishnu_h,vishnu_m,vishnu_s);
    vishnu_H.textContent = Math.floor(vishnu_h / 10) + "" + (vishnu_h % 10);
    vishnu_M.textContent = Math.floor(vishnu_m / 10) + "" + (vishnu_m % 10);
    vishnu_S.textContent = Math.floor(vishnu_s / 10) + "" + (vishnu_s % 10);
  } else {
    vishnu_s = vishnu_limS;
    if (vishnu_m > 0) vishnu_m--;
    else {
      vishnu_m = vishnu_limM;
      if (vishnu_h > 0) vishnu_h--;
      else {
        // console.log('in here'+h,m,s)
        // clearInterval(id)
        (vishnu_h = vishnu_limH),
          (vishnu_m = vishnu_limM),
          (vishnu_s = vishnu_limS);
      }
    }
  }
}, 1000);

// alert('ASD')
var vishnu_1 = document.getElementsByClassName("vishnu_1");
var vishnu_leftBtn = document.getElementById("vishnu_leftButton");
var vishnu_rightBtn = document.getElementById("vishnu_rightButton");
var first = vishnu_1[0].textContent;
var firstLink = vishnu_1[0].href;
vishnu_rightBtn.style.visibility = "hidden";
function vishnu_left() {
  for (var i = 1; i < vishnu_1.length; i++) {
    vishnu_1[i - 1].textContent = vishnu_1[i].textContent;
    vishnu_1[i - 1].href = vishnu_1[i].href;
  }
  vishnu_1[vishnu_1.length - 1].textContent = "";
  vishnu_1[vishnu_1.length - 1].href = "";
  vishnu_leftBtn.style.visibility = "hidden";
  vishnu_rightBtn.style.visibility = "visible";
}
function vishnu_right() {
  // console.log(first,last)
  for (var i = vishnu_1.length - 2; i >= 0; i--) {
    vishnu_1[i + 1].textContent = vishnu_1[i].textContent;
    vishnu_1[i + 1].href = vishnu_1[i].href;
  }
  vishnu_1[0].textContent = first;
  vishnu_1[0].href = firstLink;
  vishnu_leftBtn.style.visibility = "visible";
  vishnu_rightBtn.style.visibility = "hidden";
}

var vishnu_3 = document.getElementById("vishnu_three");
// console.log(vishnu_3)
var vishnu_arr = [
  "Free Standard Shipping on orders over US$49.00",
  "Extra 10% OFF YOUR FIRST ORDER",
  "Free Returns in the U.S.",
];
var i = 0;
vishnu_3.textContent = vishnu_arr[i++ % vishnu_arr.length];

setInterval(function () {
  vishnu_3.textContent = vishnu_arr[i++ % vishnu_arr.length];
}, 3000);

var vishnu_input1 = document.getElementById("vishnu_input1");
var vishnu_placeAray = [
  "Skirt",
  "#SHEINXRockTheRun",
  "bra new in",
  "#SHEINX",
  "GLOWMODE",
  "CUCCOO",
  "Multicolor Women Blouses",
  "Polyester Women Blouses",
  "Medium Wash Woman Jeans",
  "Natural Women Jeans",
  "Shoes",
  "Dress",
  "Earrings",
  "Crop Top",
  "Blazer",
];
var i = 0;
vishnu_input1.placeholder = vishnu_placeAray[i++];
setInterval(function () {
  vishnu_input1.placeholder = vishnu_placeAray[i++ % vishnu_placeAray.length];
}, 3000);

var vishnu_moveLeft = document.getElementById("vishnu_moveLeft");
var vishnu_moveRight = document.getElementById("vishnu_moveRight");
var vishnu_thirdBar1 = document.getElementById("vishnu_thirdBar1");

vishnu_moveLeft.style.color = "grey";
vishnu_moveLeft.onclick = "";
var vishnu_leftElements = "";
function vishnu_Moveleft() {
  // alert('Left!')
  vishnu_thirdBar1.innerHTML = null;
  vishnu_thirdBar1.innerHTML = vishnu_leftElements;

  vishnu_moveLeft.style.color = "grey";
  vishnu_moveLeft.onclick = "";
  vishnu_moveRight.style.color = "black";
  vishnu_moveRight.onclick = function () {
    vishnu_MoveRight();
  };
}

function vishnu_MoveRight() {
  // alert('Right!');
  vishnu_leftElements = vishnu_thirdBar1.innerHTML;
  vishnu_thirdBar1.innerHTML = null;
  // console.log(vishnu_leftElements)

  var vishnu_el0 = document.createElement("a");
  vishnu_el0.className = "vishnuText";
  vishnu_el0.textContent = "ACTIVEWEAR";

  var vishnu_el1 = document.createElement("a");
  vishnu_el1.className = "vishnuText";
  vishnu_el1.textContent = "SHOWS AND ACCS";

  var vishnu_el2 = document.createElement("a");
  vishnu_el2.className = "vishnuText";
  vishnu_el2.textContent = "SALE";

  var vishnu_el3 = document.createElement("a");
  vishnu_el3.className = "vishnuText";
  vishnu_el3.textContent = "EXPLORE";

  vishnu_thirdBar1.append(vishnu_el0, vishnu_el1, vishnu_el2, vishnu_el3);
  vishnu_moveRight.style.color = "grey";
  vishnu_moveRight.onclick = "";

  vishnu_moveLeft.style.color = "black";
  vishnu_moveLeft.onclick = function () {
    vishnu_Moveleft();
  };
}

// console.log('Hi')
var vishnuTimerBottom = document.getElementById("vishnuTimerBottom");
var vishnu_TimerArr = vishnuTimerBottom.getElementsByClassName("valid");
// console.log(vishnuTimerBottom)
// console.log(vishnu_TimerArr)
// console.log(vishnu_TimerArr[0],vishnu_TimerArr[1],vishnu_TimerArr[2],vishnu_TimerArr[3],vishnu_TimerArr[4],vishnu_TimerArr[5]);

var vishnu_limH2 = 15;
// limH2=1 runs for 2 hours
var vishnu_limM2 = 59;
var vishnu_limS2 = 60;
// 1 hour=60 mins
var vishnu_h2 = vishnu_limH2,
  vishnu_m2 = vishnu_limM2,
  vishnu_s2 = vishnu_limS2;

var vishnu_id2 = setInterval(function () {
  if (vishnu_s2 > 0) {
    vishnu_s2--;
    // console.log(vishnu_h,vishnu_m,vishnu_s);
    vishnu_TimerArr[0].textContent = Math.floor(vishnu_h2 / 10);
    vishnu_TimerArr[1].textContent = vishnu_h2 % 10;
    vishnu_TimerArr[2].textContent = Math.floor(vishnu_m2 / 10);
    vishnu_TimerArr[3].textContent = vishnu_m2 % 10;
    vishnu_TimerArr[4].textContent = Math.floor(vishnu_s2 / 10);
    vishnu_TimerArr[5].textContent = vishnu_s2 % 10;
  } else {
    vishnu_s2 = vishnu_limS2;
    if (vishnu_m2 > 0) vishnu_m2--;
    else {
      vishnu_m2 = vishnu_limM2;
      if (vishnu_h2 > 0) vishnu_h2--;
      else {
        // console.log('in here'+h,m,s)
        // clearInterval(id)
        (vishnu_h2 = vishnu_limH2),
          (vishnu_m2 = vishnu_limM2),
          (vishnu_s2 = vishnu_limS2);
      }
    }
  }
}, 1000);

// <a class="vishnuTextR">SHOWS AND ACCS</a>
// <a class="vishnuTextR">SALE</a>
// <a class="vishnuTextR">EXPLORE</a>
