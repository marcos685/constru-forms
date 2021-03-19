function onInputChange(e) {
  var brDate = e.target.value.toString().split("-").reverse().join("/");
  document.getElementById("00N5Y00000LJwn7").value = brDate;
}
