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

var data = [
  {
    name: "All Over Print Shirred Waist Dress",
    price: "US$19.00",
    price1: "20",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/08/23/1629717321390678bb38ed4a7054e5d8f29620d778_thumbnail_900x.webp",
  },
  {
    name: "Color-block Button Up Shirt Dress",
    price: "US$20.00",
    price1: "24",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/08/25/1629885561fff9220e2510fee7567d1ec5b6409a28_thumbnail_405x552.webp",
  },
  {
    name: "Button Front Houndstooth Bodycon Dress",
    price: "US$17.00",
    price1: "17",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/07/23/16270068375ce6ce4697da9b0bdc717c5ffa6bf4d6_thumbnail_405x552.webp",
  },
  {
    name: "SHEIN High Neck Houndstooth Prints",
    price: "US$13.00",
    price1: "13",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/07/21/1626835214434f413f5e00557057aa3d222af09802_thumbnail_405x552.webp",
  },
  {
    name: "Shirred Waist Tiered Hem A-line Dress",
    price: "US$20.00",
    price1: "20",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/08/23/1629683942a122a924c9af877b1bb289f84b297301_thumbnail_405x552.webp",
  },

  {
    name: "All Over Print Shirred Waist Dress",
    price: "US$19.00",
    price1: "10",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/08/16/16290853451ce5f5172f79c14b054025c30db8165f_thumbnail_405x552.webp",
  },
  {
    name: "Color-block Button Up Shirt Dress",
    price: "US$20.00",
    price1: "20",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/09/26/163263473553bf905407bdce3d8323e1ee6dfa4b0b_thumbnail_405x552.webp",
  },
  {
    name: "Button Front Houndstooth Bodycon Dress",
    price: "US$17.00",
    price1: "17",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/06/08/1623118468bc8b52f9b803cbb9d5dbb48117429e19_thumbnail_405x552.webp",
  },
  {
    name: "SHEIN High Neck Houndstooth Prints",
    price: "US$13.00",
    price1: "13",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/08/31/16303759420df702cd1dab8b08ac5cb18b07de12c0_thumbnail_405x552.webp",
  },
  {
    name: "Shirred Waist Tiered Hem A-line Dress",
    price: "US$20.00",
    price1: "20",
    image:
      "https://img.ltwebstatic.com/images3_pi/2020/08/12/159721380130f940fcc248588a571eb1f2932366a5_thumbnail_405x552.webp",
  },

  {
    name: "All Over Print Shirred Waist Dress",
    price: "US$19.00",
    price1: "19",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/02/06/16125859939db34708ce349238da89727e3e306cac_thumbnail_405x552.webp",
  },
  {
    name: "Color-block Button Up Shirt Dress",
    price: "US$20.00",
    price1: "20",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/09/08/1631100796dad011e3ee5598ded681bb3aa6f23255_thumbnail_405x552.webp",
  },
  {
    name: "Button Front Houndstooth Bodycon Dress",
    price: "US$17.00",
    price1: "17",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/09/13/1631515696d722369c9798c1c8d3501e543f52dddb_thumbnail_405x552.webp",
  },
  {
    name: "SHEIN High Neck Houndstooth Prints",
    price: "US$13.00",
    price1: "13",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/06/29/1624932473a81fd493904c65fc11acbb798ee572e4_thumbnail_405x552.webp",
  },
  {
    name: "Shirred Waist Tiered Hem A-line Dress",
    price: "US$20.00",
    price1: "20",

    image:
      "https://img.ltwebstatic.com/images3_pi/2021/08/18/1629267751ae7b155d1711c482c4722d4d8cd444b9_thumbnail_405x552.webp",
  },

  {
    name: "All Over Print Shirred Waist Dress",
    price: "US$19.00",
    price1: "19",

    image:
      "https://img.ltwebstatic.com/images3_pi/2021/02/05/16125017899d08d0215cdf1c45f7eb7cc0e281c932_thumbnail_405x552.webp",
  },
  {
    name: "Color-block Button Up Shirt Dress",
    price: "US$20.00",
    price1: "20",

    image:
      "https://img.ltwebstatic.com/images3_pi/2021/07/30/1627608568b5d37ea14d9acbf8101a5e40b1c976ca_thumbnail_405x552.webp",
  },
  {
    name: "Button Front Houndstooth Bodycon Dress",
    price: "US$17.00",
    price1: "17",

    image:
      "https://img.ltwebstatic.com/images3_pi/2021/04/12/16182320177a6d14628c31d362da0020d6dbec6032_thumbnail_405x552.webp",
  },
  {
    name: "SHEIN High Neck Houndstooth Prints",
    price: "US$13.00",
    price1: "13",

    image:
      "https://img.ltwebstatic.com/images3_pi/2021/08/31/1630378501d8849eb82bd54da9ddc4c20b9366a086_thumbnail_405x552.webp",
  },
  {
    name: "Shirred Waist Tiered Hem A-line Dress",
    price: "US$20.00",
    price1: "20",

    image:
      "https://img.ltwebstatic.com/images3_pi/2021/01/18/1610959949f374b478b1b845968b8b8c4023769d43_thumbnail_405x552.webp",
  },

  {
    name: "All Over Print Shirred Waist Dress",
    price: "US$19.00",
    price1: "19",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/06/29/1624931383cc8b30d80325e38d619ac65698f92d78_thumbnail_405x552.webp",
  },
  {
    name: "Color-block Button Up Shirt Dress",
    price: "US$20.00",
    price1: "20",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/08/18/1629256357e22c0a185978c2c6c73a10ec50b90a22_thumbnail_405x552.webp",
  },
  {
    name: "Button Front Houndstooth Bodycon Dress",
    price: "US$17.00",
    price1: "17",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/06/04/1622792425ab76a2aef7c9d675564310490559014d_thumbnail_405x552.webp",
  },
  {
    name: "SHEIN High Neck Houndstooth Prints",
    price: "US$13.00",
    price1: "13",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/03/12/1615513946ab41d4d1c5608fddefe48798ab67c16f_thumbnail_405x552.webp",
  },
  {
    name: "Shirred Waist Tiered Hem A-line Dress",
    price: "US$20.00",
    price1: "20",
    image:
      "https://img.ltwebstatic.com/images3_pi/2020/11/23/160611853302df2119ac9800d15d363a38114930e2_thumbnail_405x552.webp",
  },

  {
    name: "All Over Print Shirred Waist Dress",
    price: "US$19.00",
    price1: "19",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/08/03/162797307107fad38a41875cfecbb5bf768a58ec59_thumbnail_405x552.webp",
  },
  {
    name: "Color-block Button Up Shirt Dress",
    price: "US$20.00",
    price1: "20",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/07/23/1627027549a1a45ba551483731073e80f4c19135cb_thumbnail_405x552.webp",
  },
  {
    name: "Button Front Houndstooth Bodycon Dress",
    price: "US$17.00",
    price1: "50",
    image:
      "https://img.ltwebstatic.com/images3_pi/2019/12/03/1575356015f36977311b0d32e519bc0ab001b45bba_thumbnail_405x552.webp",
  },
  {
    name: "SHEIN High Neck Houndstooth Prints",
    price: "US$13.00",
    price1: "13",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/07/09/162582586515e857a5e00d6bd8d07f9e71f1de9ef6_thumbnail_405x552.webp",
  },
  {
    name: "Shirred Waist Tiered Hem A-line Dress",
    price: "US$20.00",
    price1: "30",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/08/27/1630034082a6792183bfa8a01beb12eae00f934e0f_thumbnail_405x552.webp",
  },

  {
    name: "All Over Print Shirred Waist Dress",
    price: "US$19.00",
    price1: "19",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/02/01/1612159000bcfc98ca2d02449b5d2ff822a8f52cb2_thumbnail_405x552.webp",
  },
  {
    name: "Color-block Button Up Shirt Dress",
    price: "US$20.00",
    price1: "20",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/09/13/1631499851bc7baeeb6831078f71a1485fbb6e5286_thumbnail_405x552.webp",
  },
  {
    name: "Button Front Houndstooth Bodycon Dress",
    price: "US$17.00",
    price1: "17",
    image:
      "https://img.ltwebstatic.com/images3_pi/2020/12/29/160922233763c636005f35e6f2a26ea4d61cc1eab4_thumbnail_405x552.webp",
  },
  {
    name: "SHEIN High Neck Houndstooth Prints",
    price: "US$13.00",
    price1: "26",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/04/07/16177940234c3630b78e8262adea0d13e3d5c0f21d_thumbnail_405x552.webp",
  },
  {
    name: "Shirred Waist Tiered Hem A-line Dress",
    price: "US$20.00",
    price1: "20",

    image:
      "https://img.ltwebstatic.com/images3_pi/2021/08/30/1630289240efb7f0e1597182a0de132c2890a6240a_thumbnail_405x552.webp",
  },

  {
    name: "All Over Print Shirred Waist Dress",
    price: "US$19.00",
    price1: "24",

    image:
      "https://img.ltwebstatic.com/images3_pi/2021/01/07/16099982505b28c25272d890e81b645d4dcf443b8e_thumbnail_405x552.webp",
  },
  {
    name: "Color-block Button Up Shirt Dress",
    price: "US$20.00",
    price1: "20",

    image:
      "https://img.ltwebstatic.com/images3_pi/2019/10/24/15719065759462fe71e6baab529b18ba197b457d01_thumbnail_405x552.webp",
  },
  {
    name: "Button Front Houndstooth Bodycon Dress",
    price: "US$17.00",
    price1: "19",

    image:
      "https://img.ltwebstatic.com/images3_pi/2021/04/29/161969316010ea296d7373045ff19067909fd4a167_thumbnail_405x552.webp",
  },
  {
    name: "SHEIN High Neck Houndstooth Prints",
    price: "US$13.00",
    price1: "29",

    image:
      "http://img.ltwebstatic.com/images3_pi/2021/08/27/1630041519a8758bb9d6123b6394d5cdf3076bc25b.png",
  },
  {
    name: "Shirred Waist Tiered Hem A-line Dress",
    price: "US$20.00",
    price1: "21",

    image:
      "https://img.ltwebstatic.com/images3_pi/2021/01/28/161179758498563c65feebfe17c753a042c6410c3c_thumbnail_405x552.webp",
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
    let price1 = document.createElement("h4");
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
    price1.textContent = product.price;

    div1.append(img, button_cart, name1, price1);
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
