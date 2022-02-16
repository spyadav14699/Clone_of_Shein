var btn1 = document.getElementById("buttwo");

var btn = document.getElementById("otpbutton");

var num = [];

function random(number) {
  return Math.floor(Math.random() * number);
}

function randomnumber() {
  var rndnum = random(9586);

  document.getElementById("otp").textContent =
    "This is your OTP " + rndnum + " Please Enter";

  num.push(rndnum);
}

btn.onclick = randomnumber;

function payamount() {
  let card = document.getElementById("cardnum").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;
  let security = document.getElementById("code").value;
  let number = document.getElementById("mobile").value;
  let otp = document.getElementById("otpfill").value;

  let numotp = num[num.length - 1];

  if (card.length < 16 || card.length > 16) {
    document.getElementById("cardnum").style.borderColor = "red";
    document.getElementById("cardnum1").textContent =
      "Please Enter Your 16 digit card number";
  }

  if (security.length > 3 || security.length < 3) {
    document.getElementById("code").style.borderColor = "red";
    document.getElementById("code1").textContent =
      "Please Enter Your 3 digit code number";
  }
  if (number.length > 10 || security.length < 10) {
    document.getElementById("mobile").style.borderColor = "red";
    document.getElementById("mobile1").textContent =
      "Please Enter Your 10 digit mobile number";
  }
  if (number.length > 10 || security.length < 10) {
    document.getElementById("mobile").style.borderColor = "red";
    document.getElementById("mobile1").textContent =
      "Please Enter Your 10 digit mobile number";
  }

  if (otp != numotp) {
    document.getElementById("otpfill").style.borderColor = "red";
    document.getElementById("otpfill1").textContent =
      "Please Enter Correct OTP";
  }

  if (
    card.length == 16 &&
    security.length == 3 &&
    number.length == 10 &&
    otp == numotp
  ) {
    window.location.href = "success.html";
  } else {
    document.getElementById("valid").textContent = "Please Enter valid Details";
  }
}
btn1.onclick = payamount;
