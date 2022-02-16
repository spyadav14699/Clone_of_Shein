// let finalprice = JSON.parse(localStorage.getItem("price"));

// // let parent = document.getElementById("usd");
// // function priceofproduct() {

// // finalprice.forEach(function (usprice) {
// //  // console.log(product.name)

// //   var p = document.getElementById("total")

// //   var price1 = document.getElementById("usd")
// // price.textContent = usprice.productpriceof.value

// //   p.append(price1)

// //   parent.append(p)
// // })
// // }

// // priceofproduct();

var btn = document.getElementById("placeorder");

function adddetails(e) {
  e.preventDefault();

  var details = document.getElementById("details1");

  let firstname = details.firstname.value;

  let secondname = details.lastname.value;

  let mobilenumber = details.Mobile.value;

  let firstadd = details.Address.value;

  let secondadd = details.Address2.value;

  let state = details.state.value;

  let city = details.city.value;

  let zip = details.zip.value;

  if (
    firstname.length == 0 ||
    secondname.length == 0 ||
    mobilenumber.length == 0 ||
    firstadd.length == 0 ||
    secondadd.length == 0 ||
    state.length == 0 ||
    city.length == 0 ||
    zip.length == 0
  ) {
    document.getElementById("saveone").textContent =
      "Please Fill complete the form";
    n.push("Surya");
  } else {
    document.getElementById("saveone").textContent =
      "Hello " + firstname + " Your data is saved";

    window.location.href = "Payment.html";
  }

  if (localStorage.getItem("details") === null) {
    localStorage.setItem("details", JSON.stringify([]));
  }

  let detail = {
    firstname,
    secondname,
    mobilenumber,
    firstadd,
    secondadd,
    state,
    city,
    zip,
  };

  let arr = JSON.parse(localStorage.getItem("details"));

  arr.push(detail);

  localStorage.setItem("details", JSON.stringify(arr));

  var name = document.getElementById("firstname").value;
  sessionStorage.setItem("name", JSON.stringify(name));
}
