function onInputChange(e) {
  var brDate = e.target.value.toString().split("-").reverse().join("/");
  document.getElementById("00N5Y00000LJwn7").value = brDate;
}

function setView(view, button) {
  const elementArr = ["individual", "family", "business"];
  const btnArr = ["individual-plan", "family-plan", "business-plan"];
  var element = document.getElementById(`${view}`);
  var btn = document.getElementById(`${button}`);
  elementArr.forEach((data) => {
    if (data !== view) {
      document.getElementById(`${data}`).classList.remove("selected");
    } else {
      document.getElementById(`${data}`).classList.add("selected");
    }
  });
  btnArr.forEach((data) => {
    if (data !== button) {
      document.getElementById(`${data}`).classList.remove("selected");
    } else {
      document.getElementById(`${data}`).classList.add("selected");
    }
  });
}
