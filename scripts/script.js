document.body.onload = addElement;
  function addElement() {
    var newDiv = document.createElement("textarea");
    first_div = document.getElementById("none");
    document.body.insertBefore(newDiv, first_div);

    var keyboardLineFirst = document.createElement("div");
    keyboardLineFirst.className = "keyboard-line";
    document.body.append(keyboardLineFirst);  
    for (let i = 0; i<=14; i++){
        var key = document.createElement("div");
        key.className = "key";
        keyboardLineFirst.prepend(key);
    }     

    var keyboardLineSecond = document.createElement("div");
    keyboardLineSecond.className = "keyboard-line";
    document.body.append(keyboardLineSecond);    
    for (let i = 15; i<=31; i++){
        var key = document.createElement("div");
        key.className = "key";
        keyboardLineSecond.prepend(key);
    }  
    
    var keyboardLineThird = document.createElement("div");
    keyboardLineThird.className = "keyboard-line";
    document.body.append(keyboardLineThird);    
    for (let i = 0; i<14; i++){
        var key = document.createElement("div");
        key.className = "key";
        keyboardLineThird.prepend(key);
    }  
    
    var keyboardLineFourth = document.createElement("div");
    keyboardLineFourth.className = "keyboard-line";
    document.body.append(keyboardLineFourth);   
    for (let i = 0; i<14; i++){
        var key = document.createElement("div");
        key.className = "key";
        keyboardLineFourth.prepend(key);
    }  

    var keyboardLineFifth = document.createElement("div");
    keyboardLineFifth.className = "keyboard-line";
    document.body.append(keyboardLineFifth);    
    for (let i = 0; i<10; i++){
        var key = document.createElement("div");
        key.className = "key";
        keyboardLineFifth.prepend(key);
    }  
}


