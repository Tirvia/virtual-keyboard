document.body.onload = addElement;
  function addElement() {
    var textArea = document.createElement("textarea");
    first_div = document.getElementById("none");
    document.body.insertBefore(textArea, first_div);
}
