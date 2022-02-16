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

function vishnuOptions(val) {
  // alert(val+' clicked!');
  var vishnuBox = document.getElementById(val);
  var vishCat = vishnuBox.getElementsByTagName("div")[0].textContent;
  var VishnuOptionB = document.createElement("div");

  if (vishnuBox.getElementsByTagName("div")[1].textContent == "+") {
    vishnuBox.getElementsByTagName("div")[1].textContent = "-";
    var obj = {
      Size: ["one-size", "XXS", "XS", "S", "M", "L"],
      Type: ["Bodycon", "A Line", "Fit and Flare", "Fitted", "Tunic", "Smock"],
      Style: ["Elegant", "Boho", "Glamorous", "Sexy", "Casual", "Romantic"],
      Length: ["Midi", "Long", "Short", "Knee Length", "Maxi", "Mini"],
      "Pattern Type": [
        "Camo",
        "Leopard",
        "Heart",
        "Polka Dot",
        "Plain",
        "Random Print",
      ],
      "Sleeve Length": [
        "Long Sleeve",
        "Three Quarter Length Sleeve",
        "Short Sleeve",
        "Half Sleeve",
        "Sleeveless",
        "Cap Sleeve",
      ],
      Color: ["#3678BD", "#D22426", "#FF8FBA", "#398351", "#A75430", "#AB67D7"],
      Material: [
        "Recycle Polyester",
        "Cotton Blends",
        "Viscose",
        "Chiffon",
        "Polyester",
        "Cotton",
      ],
      Neckline: [
        "Boat Neck",
        "Keyhole Neckline",
        "Sweetheart",
        "Asymmetrical Neck",
        "V Neck",
        "Scoop Neck",
      ],
    };
    console.log(vishCat);
    var i = 0;

    if (vishCat == "Size") {
      VishnuOptionB.style.display = "grid";
      VishnuOptionB.style.gridTemplateColumns = "40% 40%";
      VishnuOptionB.style.gridGap = "10px";
      VishnuOptionB.style.justifyContent = "center";
    } else if (vishCat == "Color") {
      VishnuOptionB.style.display = "grid";
      VishnuOptionB.style.gridTemplateColumns = "10% 10% 10%";
      VishnuOptionB.style.gridGap = "1px";
      VishnuOptionB.style.justifyContent = "center";
    } else {
      VishnuOptionB.style.display = "block";
    }

    //create elmts to add to vishnuBox
    var el1 = document.createElement("div");
    // el1.style.border='1px solid brown'

    //input box and text as children

    var el1Input = document.createElement("input");
    el1Input.type = "checkbox";
    el1Input.style.width = "9px";
    var el1Text = document.createElement("div");
    el1Text.style.display = "inline-block";
    el1Text.style.fontSize = "8px";
    el1Text.style.fontWeight = "400";
    if (vishCat != "Color") {
      el1Text.textContent = obj[vishCat][i++];
      el1.append(el1Input, el1Text);
    } else {
      let j = i;
      var vishnuCc = document.createElement("a");
      vishnuCc.style.display = "inline-block";
      vishnuCc.style.height = "9px";
      vishnuCc.style.width = "9px";
      vishnuCc.style.borderRadius = "7px";
      vishnuCc.style.backgroundColor = obj[vishCat][i];
      // vishnuCc.style.margin='30%';

      vishnuCc.onmouseover = function (event) {
        event.target.style.border = "1px solid black";
        event.target.style.padding = "1px";
      };
      vishnuCc.onmouseleave = function (event) {
        event.target.style.border = "";
        event.target.style.padding = "";
        // console.log(j,obj[vishCat][j])
        event.target.style.backgroundColor = obj[vishCat][j];
      };
      i++;
      el1.append(vishnuCc);
    }
    ///////////////////////////////

    var el2 = document.createElement("div");
    // el2.style.border='1px solid brown'
    //input box and text as children
    var el2Input = document.createElement("input");
    el2Input.type = "checkbox";
    el2Input.style.width = "9px";
    var el2Text = document.createElement("div");
    el2Text.style.display = "inline-block";
    el2Text.style.fontSize = "8px";
    el2Text.style.fontWeight = "400";
    if (vishCat != "Color") {
      el2Text.textContent = obj[vishCat][i++];
      el2.append(el2Input, el2Text);
    } else {
      var vishnuCc = document.createElement("a");
      vishnuCc.style.display = "inline-block";
      vishnuCc.style.height = "9px";
      vishnuCc.style.width = "9px";
      vishnuCc.style.borderRadius = "7px";
      vishnuCc.style.backgroundColor = obj[vishCat][i];
      // vishnuCc.style.margin='30%';

      let j = i;
      vishnuCc.onmouseover = function (event) {
        event.target.style.border = "1px solid black";
        event.target.style.padding = "1px";
      };
      vishnuCc.onmouseleave = function (event) {
        event.target.style.border = "";
        event.target.style.padding = "";
        // console.log(j,obj[vishCat][j])
        event.target.style.backgroundColor = obj[vishCat][j];
      };
      i++;
      el2.append(vishnuCc);
    }

    ///////////////////////////////

    var el3 = document.createElement("div");
    // el3.style.border='1px solid brown'
    //input box and text as children
    var el3Input = document.createElement("input");
    el3Input.type = "checkbox";
    el3Input.style.width = "9px";
    var el3Text = document.createElement("div");
    el3Text.style.display = "inline-block";
    el3Text.style.fontSize = "8px";
    el3Text.style.fontWeight = "400";

    if (vishCat != "Color") {
      el3Text.textContent = obj[vishCat][i++];
      el3.append(el3Input, el3Text);
    } else {
      var vishnuCc = document.createElement("a");
      vishnuCc.style.display = "inline-block";
      vishnuCc.style.height = "9px";
      vishnuCc.style.width = "9px";
      vishnuCc.style.borderRadius = "7px";
      vishnuCc.style.backgroundColor = obj[vishCat][i];
      // vishnuCc.style.margin='30%';
      let j = i;
      vishnuCc.onmouseover = function (event) {
        event.target.style.border = "1px solid black";
        event.target.style.padding = "1px";
      };
      vishnuCc.onmouseleave = function (event) {
        event.target.style.border = "";
        event.target.style.padding = "";
        // console.log(j,obj[vishCat][j])
        event.target.style.backgroundColor = obj[vishCat][j];
      };
      i++;
      el3.append(vishnuCc);
    }
    ///////////////////////////////

    var el4 = document.createElement("div");
    // el4.style.border='1px solid brown'
    //input box and text as children
    var el4Input = document.createElement("input");
    el4Input.type = "checkbox";
    el4Input.style.width = "9px";
    var el4Text = document.createElement("div");
    el4Text.style.display = "inline-block";
    el4Text.style.fontSize = "8px";
    el4Text.style.fontWeight = "400";

    if (vishCat != "Color") {
      el4Text.textContent = obj[vishCat][i++];
      el4.append(el4Input, el4Text);
    } else {
      var vishnuCc = document.createElement("a");
      vishnuCc.style.display = "inline-block";
      vishnuCc.style.height = "9px";
      vishnuCc.style.width = "9px";
      vishnuCc.style.borderRadius = "7px";
      vishnuCc.style.backgroundColor = obj[vishCat][i];
      // vishnuCc.style.margin='30%';
      let j = i;
      vishnuCc.onmouseover = function (event) {
        event.target.style.border = "1px solid black";
        event.target.style.padding = "1px";
      };
      vishnuCc.onmouseleave = function (event) {
        event.target.style.border = "";
        event.target.style.padding = "";
        // console.log(j,obj[vishCat][j])
        event.target.style.backgroundColor = obj[vishCat][j];
      };
      i++;
      el4.append(vishnuCc);
    }
    ///////////////////////////////

    var el5 = document.createElement("div");
    // el5.style.border='1px solid brown'
    //input box and text as children
    var el5Input = document.createElement("input");
    el5Input.type = "checkbox";
    el5Input.style.width = "9px";
    var el5Text = document.createElement("div");
    el5Text.style.display = "inline-block";
    el5Text.style.fontSize = "8px";
    el5Text.style.fontWeight = "400";
    if (vishCat != "Color") {
      el5Text.textContent = obj[vishCat][i++];
      el5.append(el5Input, el5Text);
    } else {
      var vishnuCc = document.createElement("a");
      vishnuCc.style.display = "inline-block";
      vishnuCc.style.height = "9px";
      vishnuCc.style.width = "9px";
      vishnuCc.style.borderRadius = "7px";
      vishnuCc.style.backgroundColor = obj[vishCat][i];
      // vishnuCc.style.margin='30%';
      let j = i;
      vishnuCc.onmouseover = function (event) {
        event.target.style.border = "1px solid black";
        event.target.style.padding = "1px";
      };
      vishnuCc.onmouseleave = function (event) {
        event.target.style.border = "";
        event.target.style.padding = "";
        // console.log(j,obj[vishCat][j])
        event.target.style.backgroundColor = obj[vishCat][j];
      };
      i++;
      el5.append(vishnuCc);
    }
    ///////////////////////////////

    var el6 = document.createElement("div");
    // el6.style.border='1px solid brown'
    //input box and text as children
    var el6Input = document.createElement("input");
    el6Input.type = "checkbox";
    el6Input.style.width = "9px";
    var el6Text = document.createElement("div");
    el6Text.style.display = "inline-block";
    el6Text.style.fontSize = "8px";
    el6Text.style.fontWeight = "400";
    if (vishCat != "Color") {
      el6Text.textContent = obj[vishCat][i++];
      el6.append(el6Input, el6Text);
    } else {
      var vishnuCc = document.createElement("a");
      vishnuCc.style.display = "inline-block";
      vishnuCc.style.height = "9px";
      vishnuCc.style.width = "9px";
      vishnuCc.style.borderRadius = "7px";
      vishnuCc.style.backgroundColor = obj[vishCat][i];
      // vishnuCc.style.margin='30%';
      let j = i;
      vishnuCc.onmouseover = function (event) {
        event.target.style.border = "1px solid black";
        event.target.style.padding = "1px";
      };
      vishnuCc.onmouseleave = function (event) {
        event.target.style.border = "";
        event.target.style.padding = "";
        // console.log(j,obj[vishCat][j])
        event.target.style.backgroundColor = obj[vishCat][j];
      };
      i++;
      el6.append(vishnuCc);
    }
    ///////////////////////////////

    VishnuOptionB.append(el1, el2, el3, el4, el5, el6);
    //////////////////////////////////
    // VishnuOptionB.innerHTML=null;

    vishnuBox.after(VishnuOptionB);
  } else {
    // alert('Here');
    vishnuBox.nextSibling.remove();
    vishnuBox.getElementsByTagName("div")[1].textContent = "+";
  }
}

function vishnuDrop(val) {
  var vishnuSelect = document.getElementById("vishnuSelect");

  var vishnuDropSymbol = document.getElementById("vishnuDropSymbol");

  // console.log(vishnuSelect);
  if (
    val == 1 &&
    vishnuSelect.getElementsByTagName("div")[1].textContent == "\\/"
  ) {
    vishnuSelect.getElementsByTagName("div")[1].textContent = "/\\";
    // alert('asd')
    var vishnuDropDiv = document.createElement("div");
    vishnuDropDiv.style.width = "108px";
    vishnuDropDiv.style.height = "150px";
    // vishnuDropDiv.style.backgroundColor='pink'
    vishnuDropDiv.style.overflowY = "scroll";
    // vishnuDropDiv.style.marginLeft='6%';
    vishnuDropDiv.style.display = "block";
    // add the options to dropDownDiv
    // <div id="LowToHigh">Low To High</div>
    //         <div id="HighToLow">High To Low</div>
    //         <div id="MostPopular">Most Popular</div>
    //         <div id="NewArrivals">New Arrivals</div>
    //         <div id="TopReviewed">Top Reviewed</div>
    //         <div id="Recommend">Recommend</div>
    var LowToHigh = document.createElement("div");
    LowToHigh.textContent = "Low To High";
    LowToHigh.style.fontFamily = "font-family:Arial, Helvetica, sans-serif";
    LowToHigh.style.fontSize = "10px";
    LowToHigh.style.fontWeight = "400";
    // LowToHigh.style.border='1px solid red'
    LowToHigh.style.padding = "10px";
    LowToHigh.onmouseover = function () {
      LowToHigh.style.backgroundColor = "#F6F6F6";
    };
    LowToHigh.onmouseleave = function () {
      LowToHigh.style.backgroundColor = "white";
    };
    LowToHigh.onclick = function () {
      vishnuSelect.getElementsByTagName("div")[0].textContent = "Low To High";
      LH();
    };

    var HighToLow = document.createElement("div");
    HighToLow.textContent = "High To Low";
    HighToLow.style.fontFamily = "font-family:Arial, Helvetica, sans-serif";
    HighToLow.style.fontSize = "10px";
    HighToLow.style.fontWeight = "400";
    // HighToLow.style.border='1px solid red'
    HighToLow.style.padding = "10px";
    HighToLow.onmouseover = function () {
      HighToLow.style.backgroundColor = "#F6F6F6";
    };
    HighToLow.onmouseleave = function () {
      HighToLow.style.backgroundColor = "white";
    };
    HighToLow.onclick = function () {
      vishnuSelect.getElementsByTagName("div")[0].textContent = "High To Low";
      HL();
    };

    var MostPopular = document.createElement("div");
    MostPopular.textContent = "Most Popular";
    MostPopular.style.fontFamily = "font-family:Arial, Helvetica, sans-serif";
    MostPopular.style.fontSize = "10px";
    MostPopular.style.fontWeight = "400";
    // MostPopular.style.border='1px solid red'
    MostPopular.style.padding = "10px";
    MostPopular.onmouseover = function () {
      MostPopular.style.backgroundColor = "#F6F6F6";
    };
    MostPopular.onmouseleave = function () {
      MostPopular.style.backgroundColor = "white";
    };

    var NewArrivals = document.createElement("div");
    NewArrivals.textContent = "New Arrivals";
    NewArrivals.style.fontFamily = "font-family:Arial, Helvetica, sans-serif";
    NewArrivals.style.fontSize = "10px";
    NewArrivals.style.fontWeight = "400";
    // NewArrivals.style.border='1px solid red'
    NewArrivals.style.padding = "10px";
    NewArrivals.onmouseover = function () {
      NewArrivals.style.backgroundColor = "#F6F6F6";
    };
    NewArrivals.onmouseleave = function () {
      NewArrivals.style.backgroundColor = "white";
    };

    var TopReviewed = document.createElement("div");
    TopReviewed.textContent = "Top Reviewed";
    TopReviewed.style.fontFamily = "font-family:Arial, Helvetica, sans-serif";
    TopReviewed.style.fontSize = "10px";
    TopReviewed.style.fontWeight = "400";
    // TopReviewed.style.border='1px solid red'
    TopReviewed.style.padding = "10px";
    TopReviewed.onmouseover = function () {
      TopReviewed.style.backgroundColor = "#F6F6F6";
    };
    TopReviewed.onmouseleave = function () {
      TopReviewed.style.backgroundColor = "white";
    };

    var Recommend = document.createElement("div");
    Recommend.textContent = "Recommend";
    Recommend.style.fontFamily = "font-family:Arial, Helvetica, sans-serif";
    Recommend.style.fontSize = "10px";
    Recommend.style.fontWeight = "400";
    // Recommend.style.border='1px solid red'
    Recommend.style.padding = "10px";
    Recommend.onmouseover = function () {
      Recommend.style.backgroundColor = "#F6F6F6";
    };
    Recommend.onmouseleave = function () {
      Recommend.style.backgroundColor = "white";
    };

    vishnuDropDiv.append(
      LowToHigh,
      HighToLow,
      MostPopular,
      NewArrivals,
      TopReviewed,
      Recommend
    );
    /////////////////////////////////
    vishnuDropSymbol.after(vishnuDropDiv);
  } else {
    // console.log(val)
    if (
      val == 0 &&
      vishnuSelect.getElementsByTagName("div")[1].textContent == "/\\"
    ) {
      vishnuDropSymbol.nextSibling.remove();
      vishnuSelect.getElementsByTagName("div")[1].textContent = "\\/";
    }
  }
}

function LH() {
  //alert('Low to High called!')

  let arr = data.sort(function (a, b) {
    return a.price1 - b.price1;
  });
  //console.log("arr",arr);
  showProduct(arr);
  //Please write function to sort Low to High
}
function HL() {
  //alert('High to Low called!')
  let arr = data.sort(function (a, b) {
    return b.price1 - a.price1;
  });

  // console.log("arr",arr);
  showProduct(arr);
  //Please write function to sort High to Low
}

let data = [
  {
    name: "SHEIN Men Geo Print Shirt",
    price: "980",
    price1: "980",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/09/06/163089114277131b1e549b130619aae6eeeb15d2a8_thumbnail_900x.webp",
  },

  {
    name: "SHEIN Men Floral Embroidery Sheer Mesh Shirt",
    price: "120",
    price1: "980",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/09/06/16308912973c567d8b7babfde1237fddd635413c7f_thumbnail_900x.webp",
  },
  {
    name: "Men Plaid Slant Pocket PJ Set",
    price: "2000",
    price1: "980",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/08/09/1628478723aa39431759a7ca94d5e5b4dd84332937_thumbnail_900x.webp",
  },
  {
    name: "Men Contrast Panel Topstitching Shirt",
    price: "1250",
    price1: "980",
    image:
      "https://img.ltwebstatic.com/images3_pi/2019/09/27/1569571052b04cb2dd11ecd58f0c5f4d2ef4635f06_thumbnail_900x.webp",
  },
  {
    name: "SHEIN Men Geo Print Shirt",
    price: "980",
    price1: "980",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/08/17/16291855517a5b34a6476a3ffedd26c8c6569f2d8d_thumbnail_900x.webp",
  },

  {
    name: "SHEIN Men Striped Patched Detail Tee",
    price: "750",
    price1: "980",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/07/30/16276489837dd2c777613922bd9715dec5e45ee7b9_thumbnail_900x.webp",
  },
  {
    name: "Men Stand Neck Button Up Shirt",
    price: "1800",
    price1: "980",
    image:
      "https://img.ltwebstatic.com/images3_pi/2020/11/25/16062670368404cbe1beacd34657c120ed1afb2dfa_thumbnail_900x.webp",
  },
  {
    name: "Men Letter Patched Curved Hem Tee",
    price: "1000",
    image:
      "https://img.ltwebstatic.com/images3_pi/2020/06/08/15916029351338614af1845fc62b0dd129c3ebd0b1_thumbnail_900x.webp",
  },
  //
  {
    name: "SHEIN Men Collared Cord Shirt",
    price: "2000",
    image:
      "https://img.ltwebstatic.com/images3_pi/2020/10/30/160402629168a84cfd76df41573d275b390532a5f1_thumbnail_900x.webp",
  },

  {
    name: "SHEIN Men Pocket Patched Half Button Shirt",
    price: "1800",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/07/21/1626858003e173c20a699e99bb2d4c9c6fe8144a76_thumbnail_900x.webp",
  },

  {
    name: "Men Button Front Solid Shirt",
    price: "1500",

    image:
      "https://img.ltwebstatic.com/images3_pi/2021/04/02/1617331977353064593a2399f16dfab721c8808680_thumbnail_900x.webp",
  },

  {
    name: "Men Pocket Front Button Up Shirt",
    price: "1700",

    image:
      "https://img.ltwebstatic.com/images3_pi/2021/07/23/1627017135295e4e96062ea09caa53f4fff76e771b_thumbnail_900x.webp",
  },

  {
    name: "SHEIN Men Half Button Shirt",
    price: "2200",

    image:
      "https://img.ltwebstatic.com/images3_pi/2021/09/10/1631262613993793468ad2beedf8203455952cee5d_thumbnail_900x.webp",
  },

  {
    name: "Men Pocket Front Button Up Shirt",
    price: "2400",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/07/23/1627017135295e4e96062ea09caa53f4fff76e771b_thumbnail_900x.webp",
  },

  {
    name: "SHEIN Men Floral Print Button Front Shirt",
    price: "1500",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/09/26/163265086505656add61f8dbd20d8385f320973422_thumbnail_900x.webp",
  },

  {
    name: "Extended Sizes Men Striped Print Shirt",
    price: "1000",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/09/09/1631167018c44e6c6638884ebba6cb0b94202c3c44_thumbnail_900x.webp",
  },

  {
    name: "Extended Sizes Men Plaid Button Front Shirt",
    price: "1800",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/09/07/163098316910d04c36f9bbcbe8a0e218b833e9f463_thumbnail_900x.webp",
  },

  {
    name: "Extended Sizes Men Slogan & Striped Pocket Front Shirt",
    price: "2800",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/08/26/1629943602132bed4ebe9080c5153d9d1867ab566c_thumbnail_900x.webp",
  },

  {
    name: "Men Plaid Pocket Front Shirt",
    price: "1600",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/09/02/1630564913adb9148b704058adba9f98c7583cb70d_thumbnail_900x.webp",
  },

  {
    name: "Men Plaid Button Up Shirt",
    price: "1500",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/06/28/162488424465ee6d5f80c5e027d4e8f1b77bb79e34_thumbnail_900x.webp",
  },

  {
    name: "SHEIN BASICS Men Plaid Button Up Flannel Shirt",
    price: "1450",
    image:
      "https://img.ltwebstatic.com/images3_pi/2020/09/08/1599537000704a55dc991177ff70ec35ca4ca73ea5_thumbnail_900x.webp",
  },

  {
    name: "SHEIN Men Tartan Button Front Shirt",
    price: "1600",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/02/22/161398590679854fb4524d8c260ef440e762d8c4b6_thumbnail_900x.webp",
  },

  {
    name: "SHEIN Men Pocket Patched Drop Shoulder Denim Shirt",
    price: "2450",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/09/27/163270771903595fe5d9deee36ad44db3c18a515c1_thumbnail_900x.webp",
  },

  {
    name: "Men Flap Pocket Denim Shirt",
    price: "3200",
    image:
      "https://sheinsz.ltwebstatic.com/she_dist/images/bg-grey-ba96515e9b.png",
  },

  {
    name: "Men Solid Round Neck Tee",
    price: "2150",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/08/27/163005058919afae1fb23e36c5b1340f9bfdabadb9_thumbnail_900x.webp",
  },

  {
    name: "Men Letter & Graphic Print Tee",
    price: "1900",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/09/07/163098390729c0229e743b92a0aaee8fd6e3c7c10f_thumbnail_900x.webp",
  },

  {
    name: "Men Feather Print Tee",
    price: "1250",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/07/05/1625470059517c64244e2bb34d06aeee34c69fb607_thumbnail_900x.webp",
  },

  {
    name: "SHEIN Men Patch Pocket Solid Polo Shirt",
    price: "900",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/03/01/16145660062046d55633ef97467b778773a224b270_thumbnail_900x.webp",
  },

  {
    name: "Men Animal Print Polo Shirt",
    price: "1250",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/05/31/1622436883d76f9d136ed4bb7a6bcbbd2e562a7825_thumbnail_900x.webp",
  },

  {
    name: "Men Striped & Giraffe Print Polo Shirt",
    price: "1000",
    image:
      "https://img.ltwebstatic.com/images3_pi/2020/04/21/15874744100c21de3152f257181c00e0df15984db6_thumbnail_900x.webp",
  },
];

/////////Element creation///////////////////////

///var jaiparent=document.getElementById("jaiparent");
var parent1 = document.getElementById("jaiparent1");
var left = document.getElementById("jaileft");
var right = document.getElementById("jairight");

function showProduct() {
  right.innerHTML = null;

  data.forEach(function (product) {
    let div1 = document.createElement("div");
    let img = document.createElement("img");
    let name1 = document.createElement("p");
    let price = document.createElement("h4");
    let button_cart = document.createElement("button");

    div1.style.maxHeight = "350px";
    div1.style.marginBottom = "80px";
    button_cart.textContent = "Add to Bag";
    img.onclick = function () {
      addToProduct(product);
      window.location.href = "ProductDetails.html";
    };

    button_cart.onclick = function () {
      addToCart(product);
    };

    ////source////////////////
    img.src = product.image;
    name1.textContent = product.name;
    price.textContent = product.price;

    div1.append(img, button_cart, name1, price);
    right.append(div1);
  });
}
showProduct();

////////////////////////localStorage//////////////////////////////////

if (localStorage.getItem("Cart") === null) {
  localStorage.setItem("Cart", JSON.stringify([]));
}

function addToCart(product) {
  var arr = JSON.parse(localStorage.getItem("Cart"));
  arr.push(product);
  localStorage.setItem("Cart", JSON.stringify(arr));
}

function addToProduct(product) {
  localStorage.setItem("element", JSON.stringify([]));
  var arr1 = JSON.parse(localStorage.getItem("element"));
  arr1.push(product);
  localStorage.setItem("element", JSON.stringify(arr1));
}
