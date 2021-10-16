var i = 0;
function btn1Click() {
    if (i == 0) {
      document.getElementById("btn1").disabled = true;
    } else {
      document.getElementById("center").value = --i;
    }
}
function btn2Click() {
  document.getElementById("btn1").disabled = false;
  document.getElementById("center").value = ++i;
}

