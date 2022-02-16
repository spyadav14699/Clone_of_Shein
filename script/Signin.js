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

function signup(e) {
  e.preventDefault();

  var myForm = document.getElementById("Form");
  let email = myForm.email.value;
  let password = myForm.password.value;
  let cpassword = myForm.password1.value;
  console.log(email);

  if (email.length < 8 || email.length == 0) {
    document.getElementById("tone").textContent = "Please Enter Valid Email ID";
  } else if (password.length < 8 || password.length == 0) {
    document.getElementById("ttwo").textContent =
      "Please Enter Minimum 8 Digit Password";
  } else if (password != cpassword) {
    document.getElementById("tthree").textContent = "Password Did Not Matched";
  }

  if (localStorage.getItem("users") === null) {
    localStorage.setItem("users", JSON.stringify([]));
  }

  let user = {
    email,
    password,
    cpassword,
  };
  let arr = JSON.parse(localStorage.getItem("users"));

  arr.push(user); // added a new users;

  localStorage.setItem("users", JSON.stringify(arr));
}

function login(e) {
  e.preventDefault();

  let btn = document.getElementById("myForm");

  let email = myForm.email.value;

  let password = myForm.password.value;

  let userlog = JSON.parse(localStorage.getItem("users"));

  userlog.forEach(function (user) {
    if (email.length == 0) {
      document.getElementById("pone").textContent = "Please enter your email.";
    } else if (password.length == 0) {
      document.getElementById("ptwo").textContent =
        "Please Enter Your password";
    } else if (email === user.email && password === user.password) {
      window.location.href = "Placeorder.html";
    } else {
      document.getElementById("one").textContent =
        "Username or password is incorrect";
    }
  });
}
