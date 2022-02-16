var C1vishnuCartTot = {};
// var Cart = [
//     {
//         name: "All Over Print Shirred Waist Dress",
//         price: "US$19.00",
//         price1:"1",
//         image: "https://img.ltwebstatic.com/images3_pi/2021/08/23/1629717321390678bb38ed4a7054e5d8f29620d778_thumbnail_900x.webp"
//     },

//     {
//         name: "Color-block Button Up Shirt Dress",
//         price: "US$20.00",
//         price1:"1",
//         image: "https://img.ltwebstatic.com/images3_pi/2021/08/25/1629885561fff9220e2510fee7567d1ec5b6409a28_thumbnail_405x552.webp"
//     },
//     {
//         name: "Button Front Houndstooth Bodycon Dress",
//         price: "US$17.00",
//         price1:"1",
//         image: "https://img.ltwebstatic.com/images3_pi/2021/07/23/16270068375ce6ce4697da9b0bdc717c5ffa6bf4d6_thumbnail_405x552.webp"
//     },
//     {
//         name: "SHEIN High Neck Houndstooth Prints",
//         price: "US$13.00",
//         price1:"1",
//         image: "https://img.ltwebstatic.com/images3_pi/2021/07/21/1626835214434f413f5e00557057aa3d222af09802_thumbnail_405x552.webp"
//     },
//     {
//         name: "Shirred Waist Tiered Hem A-line Dress",
//         price: "US$20.00",
//         price1:"1",
//         image: "https://img.ltwebstatic.com/images3_pi/2021/08/23/1629683942a122a924c9af877b1bb289f84b297301_thumbnail_405x552.webp"
//     }]

// localStorage.setItem('cart',JSON.stringify(Cart));
var C1vishnuCartArr = JSON.parse(localStorage.getItem("Cart"));
// console.log(vishnuCartArr);
// C1vishnuCartArr=[];

var C1FreeShip = document.getElementById("C1FreeShip");
var C1disc = document.getElementById("C1disc");
console.log(C1FreeShip.textContent);
var C1vishnuBottomBox = document.getElementById("C1vishnuBottomBox");
var C1vishnuTotalAmt = document.getElementById("C1vishnuTotalAmt");
C1vishnuTotalAmt.textContent = "US$0";
// console.log(vishnuTotalAmt.textContent)

C1vishnuCartArr.forEach(function (p) {
  var C1sampleProd = document.createElement("div");
  C1sampleProd.style.width = "100%";
  C1sampleProd.style.height = "100%";
  // sampleProd.style.border='1px solid blue';
  C1sampleProd.style.display = "flex";

  var C1firstDiv = document.createElement("div");
  var C1secondDiv = document.createElement("div");
  C1firstDiv.style.width = "20%";
  C1firstDiv.style.height = "80%";
  // C1firstDiv.style.border='1px solid brown';
  var C1prodImage = document.createElement("img");
  C1prodImage.style.height = "100%";
  C1prodImage.style.width = "100%";
  C1prodImage.src = p.image;
  C1firstDiv.append(C1prodImage);

  C1secondDiv.style.width = "80%";
  C1secondDiv.style.height = "80%";
  // C1secondDiv.style.border='1px solid brown';
  var C1secondTop = document.createElement("div");
  C1secondTop.textContent = p.name;
  C1secondTop.style.marginTop = "8px";
  C1secondTop.style.marginLeft = "20px";

  C1secondTop.style.fontFamily = "Arial, Helvetica, sans-serif";
  C1secondTop.style.fontSize = "14px";
  C1secondTop.style.fontWeight = "500";

  C1secondTop.onmousehover = function () {
    C1secondTop.style.fontSize = "15px";
    C1secondTop.style.fontWeight = "700";
  };
  C1secondTop.onmouseleave = function () {
    C1secondTop.style.fontSize = "14px";
    C1secondTop.style.fontWeight = "500";
  };

  var C1secondMid = document.createElement("div");
  C1secondMid.style.display = "flex";
  C1secondMid.style.padding = "5px";
  C1secondMid.style.marginTop = "8px";
  C1secondMid.style.marginLeft = "8px";
  C1secondMid.style.justifyContent = "space-around";

  var C1secondMidPrice = document.createElement("div");
  // secondMidPrice.style.border='1px solid red'
  C1secondMidPrice.style.width = "20%";
  var C1price = p.price; /*<<Put Price here*/
  C1secondMidPrice.textContent = "US$" + C1price;
  C1secondMidPrice.style.fontFamily = "Arial, Helvetica, sans-serif";
  C1secondMidPrice.style.fontSize = "16px";
  C1secondMidPrice.style.fontWeight = "700";

  var C1secondMidQty = document.createElement("div");
  C1secondMidQty.style.border = "1px solid grey";
  C1secondMidQty.style.width = "20%";
  C1secondMidQty.style.display = "flex";
  C1secondMidQty.style.borderRadius = "6px";
  // secondMidQty.style.justifyContent='center'
  // secondMidQty.style.alignItems='center'

  var C1vishnuMinus = document.createElement("div");
  // vishnuMinus.style.border='1px solid red'
  C1vishnuMinus.style.width = "20%";
  C1vishnuMinus.style.textAlign = "center";
  C1vishnuMinus.textContent = "-";

  C1vishnuMinus.onclick = function () {
    if (C1vishnuValue.value > 1) {
      C1vishnuValue.value--;
      C1secondMidTotal.textContent = "US$" + C1price * C1vishnuValue.value;

      C1vishnuCartTot[p.name] = C1price * C1vishnuValue.value;
      // console.log( Object.values(vishnuCartTot));

      let C1temp = Object.values(C1vishnuCartTot).reduce(function (acc, el) {
        return acc + el;
      });
      C1vishnuTotalAmt.textContent = "US$" + C1temp;

      if (C1temp == 0) {
        C1FreeShip.textContent =
          "Buy US$49 more to enjoy FREE STANDARD SHIPPING!";
      } else if (C1temp < 49) {
        C1FreeShip.textContent =
          "Buy US$" + (49 - C1temp) + " more to enjoy FREE STANDARD SHIPPING!";
      } else {
        C1FreeShip.textContent =
          "Eligible for FREE STANDARD SHIPPING!🎉🎉🎉😍😍";
      }

      if (C1temp == 0) {
        C1disc.textContent =
          "Spend US$69 to be eligible for discounts, you currently need US$69 more to be eligible.";
      } else if (C1temp < 69) {
        C1disc.textContent =
          "Spend US$69 to be eligible for discounts, you currently need US$" +
          (69 - C1temp) +
          " more to be eligible.";
      } else {
        C1disc.textContent =
          "Your total amount qualifies for Discounts!!🎉🎉🎉😍😍";
      }
    }
  };

  var C1vishnuValue = document.createElement("input");
  C1vishnuValue.style.border = "1px solid grey";
  C1vishnuValue.style.width = "60%";
  C1vishnuValue.style.height = "80%";
  C1vishnuValue.style.textAlign = "center";

  C1vishnuValue.onchange = function () {
    // console.log('changed')
    if (C1vishnuValue.value < 1) {
      C1vishnuValue.value = 1;
    }
    C1secondMidTotal.textContent = "US$" + C1price * C1vishnuValue.value;
    C1vishnuCartTot[p.name] = C1price * C1vishnuValue.value;
    // console.log( Object.values(vishnuCartTot));

    let C1temp = Object.values(C1vishnuCartTot).reduce(function (acc, el) {
      return acc + el;
    });
    C1vishnuTotalAmt.textContent = "US$" + C1temp;

    if (C1temp == 0) {
      C1FreeShip.textContent =
        "Buy US$49 more to enjoy FREE STANDARD SHIPPING!";
    } else if (C1temp < 49) {
      C1FreeShip.textContent =
        "Buy US$" + (49 - C1temp) + " more to enjoy FREE STANDARD SHIPPING!";
    } else {
      C1FreeShip.textContent = "Eligible for FREE STANDARD SHIPPING!🎉🎉🎉😍😍";
    }

    if (C1temp == 0) {
      C1disc.textContent =
        "Spend US$69 to be eligible for discounts, you currently need US$69 more to be eligible.";
    } else if (C1temp < 69) {
      C1disc.textContent =
        "Spend US$69 to be eligible for discounts, you currently need US$" +
        (69 - C1temp) +
        " more to be eligible.";
    } else {
      C1disc.textContent =
        "Your total amount qualifies for Discounts!!🎉🎉🎉😍😍";
    }
  };
  C1vishnuValue.value = 1;
  var C1vishnuPlus = document.createElement("div");
  // vishnuPlus.style.border='1px solid red'
  C1vishnuPlus.style.width = "20%";
  C1vishnuPlus.style.textAlign = "center";
  C1vishnuPlus.textContent = "+";

  C1vishnuPlus.onclick = function () {
    C1vishnuValue.value++;
    C1secondMidTotal.textContent = "US$" + C1price * C1vishnuValue.value;
    C1vishnuCartTot[p.name] = C1price * C1vishnuValue.value;
    // console.log( Object.values(vishnuCartTot));

    let C1temp = Object.values(C1vishnuCartTot).reduce(function (acc, el) {
      return acc + el;
    });
    C1vishnuTotalAmt.textContent = "US$" + C1temp;

    if (C1temp == 0) {
      C1FreeShip.textContent =
        "Buy US$49 more to enjoy FREE STANDARD SHIPPING!";
    } else if (C1temp < 49) {
      C1FreeShip.textContent =
        "Buy US$" + (49 - C1temp) + " more to enjoy FREE STANDARD SHIPPING!";
    } else {
      C1FreeShip.textContent = "Eligible for FREE STANDARD SHIPPING!🎉🎉🎉😍😍";
    }

    if (C1temp == 0) {
      C1disc.textContent =
        "Spend US$69 to be eligible for discounts, you currently need US$69 more to be eligible.";
    } else if (C1temp < 69) {
      C1disc.textContent =
        "Spend US$69 to be eligible for discounts, you currently need US$" +
        (69 - C1temp) +
        " more to be eligible.";
    } else {
      C1disc.textContent =
        "Your total amount qualifies for Discounts!!🎉🎉🎉😍😍";
    }
  };

  C1secondMidQty.append(C1vishnuMinus, C1vishnuValue, C1vishnuPlus);

  var C1secondMidTotal = document.createElement("div");
  // secondMidTotal.style.border='1px solid red'
  C1secondMidTotal.style.width = "20%";
  C1secondMidTotal.textContent = "US$" + C1price * C1vishnuValue.value;
  C1vishnuCartTot[p.name] = C1price * C1vishnuValue.value;

  let C1temp = Object.values(C1vishnuCartTot).reduce(function (acc, el) {
    return acc + el;
  });
  C1vishnuTotalAmt.textContent = "US$" + C1temp;

  if (C1temp == 0) {
    C1FreeShip.textContent = "Buy US$49 more to enjoy FREE STANDARD SHIPPING!";
  } else if (C1temp < 49) {
    C1FreeShip.textContent =
      "Buy US$" + (49 - C1temp) + " more to enjoy FREE STANDARD SHIPPING!";
  } else {
    C1FreeShip.textContent = "Eligible for FREE STANDARD SHIPPING!🎉🎉🎉😍😍";
  }

  if (C1temp == 0) {
    C1disc.textContent =
      "Spend US$69 to be eligible for discounts, you currently need US$69 more to be eligible.";
  } else if (C1temp < 69) {
    C1disc.textContent =
      "Spend US$69 to be eligible for discounts, you currently need US$" +
      (69 - C1temp) +
      " more to be eligible.";
  } else {
    C1disc.textContent =
      "Your total amount qualifies for Discounts!!🎉🎉🎉😍😍";
  }

  C1secondMidTotal.style.textAlign = "center";
  C1secondMidTotal.style.fontFamily = "Arial, Helvetica, sans-serif";
  C1secondMidTotal.style.fontSize = "16px";
  C1secondMidTotal.style.fontWeight = "700";

  C1secondMid.append(C1secondMidPrice, C1secondMidQty, C1secondMidTotal);

  var C1secondBottom = document.createElement("div");
  C1secondBottom.style.display = "flex";
  C1secondBottom.style.marginTop = "120px";
  C1secondBottom.style.marginLeft = "20px";

  C1secondBottom.style.fontFamily = "Arial, Helvetica, sans-serif";
  C1secondBottom.style.fontSize = "14px";
  C1secondBottom.style.fontWeight = "500";

  var C1saveForLater = document.createElement("div");
  C1saveForLater.textContent = "Save for Later";
  // saveForLater.style.border='1px solid red'

  C1saveForLater.onmouseover = function () {
    C1saveForLater.style.fontSize = "15px";
    C1saveForLater.style.fontWeight = "700";
  };
  C1saveForLater.onmouseleave = function () {
    C1saveForLater.style.fontSize = "14px";
    C1saveForLater.style.fontWeight = "500";
  };

  var C1vishnuDelete = document.createElement("div");
  C1vishnuDelete.textContent = "Delete";
  // vishnuDelete.style.border='1px solid red'
  C1vishnuDelete.style.marginLeft = "30px";

  C1vishnuDelete.onmouseover = function () {
    C1vishnuDelete.style.fontSize = "15px";
    C1vishnuDelete.style.fontWeight = "700";
  };
  C1vishnuDelete.onmouseleave = function () {
    C1vishnuDelete.style.fontSize = "14px";
    C1vishnuDelete.style.fontWeight = "500";
  };

  C1secondBottom.append(C1saveForLater, C1vishnuDelete);

  C1secondDiv.append(C1secondTop, C1secondMid, C1secondBottom);
  C1sampleProd.append(C1firstDiv, C1secondDiv);

  C1vishnuBottomBox.append(C1sampleProd);
});

var C1vishnuH1 = document.getElementsByClassName("C1vishnuH1");
// console.log(vishnuH1[1].textContent)
// console.log(vishnuCartArr);
C1vishnuH1[1].textContent = "Item Summary(" + C1vishnuCartArr.length + ")";

function C1vishnuAddBtn(idVal, num) {
  var C1vishnuAdd2 = document.getElementById(idVal);
  if (num == 1) C1vishnuAdd2.style.backgroundColor = "grey";
  else C1vishnuAdd2.style.backgroundColor = "black";
}
