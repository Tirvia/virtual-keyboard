document.body.onload = addElement;
  function addElement() {
    var newDiv = document.createElement("textarea");
    first_div = document.getElementById("none");
    document.body.insertBefore(newDiv, first_div);

    var keyboardLine = document.createElement("div");
    keyboardLine.className = "keyboard-line";
    document.body.append(keyboardLine);  
    for (let i = 0; i<=63; i++){
        var key = document.createElement("div");
        key.className = "key";
        key.id = i;
        keyboardLine.prepend(key);
    }     
    let keyF = document.getElementById("0");
    keyF.innerHTML = "`";
    for (let i = 1; i<=9; i++){
        let keyN = document.getElementById(i);
        keyN.innerHTML = i;
    }
    let key0 = document.getElementById("10");
    key0.innerHTML = "0";
    let keyM = document.getElementById("11");
    keyM.innerHTML = "-";
    let keyP = document.getElementById("12");
    keyP.innerHTML = "\+";
    let keyS = document.getElementById("13");
    keyS.innerHTML = "\\";
    let keyDel = document.getElementById("14");
    keyDel.innerHTML = "Backspase";

    let key15 = document.getElementById("15");
    key15.innerHTML = "Tab";
    key15.style.width = "40px";
    let key16 = document.getElementById("16");
    key16.innerHTML = "Q";
    let key17 = document.getElementById("17");
    key17.innerHTML = "W";
    let key18 = document.getElementById("18");
    key18.innerHTML = "R";
    let key19 = document.getElementById("19");
    key19.innerHTML = "T";
    let key20 = document.getElementById("20");
    key20.innerHTML = "Y";
    let key21 = document.getElementById("21");
    key21.innerHTML = "U";
    let key22 = document.getElementById("22");
    key22.innerHTML = "I";
    let key23 = document.getElementById("23");
    key23.innerHTML = "O";
    let key24 = document.getElementById("24");
    key24.innerHTML = "P";
    let key25 = document.getElementById("25");
    key25.innerHTML = "[";
    let key26 = document.getElementById("26");
    key26.innerHTML = "]";
    let key27 = document.getElementById("27");
    key27.innerHTML = "Del";
    key27.style.width = "60px";

    let key28 = document.getElementById("28");
    key28.innerHTML = "Caps Lock";
    let key29 = document.getElementById("29");
    key29.innerHTML = "A";
    let key30 = document.getElementById("30");
    key30.innerHTML = "S"; 
    let key31 = document.getElementById("31");
    key31.innerHTML = "D";
    let key32 = document.getElementById("32");
    key32.innerHTML = "F";
    let key33 = document.getElementById("33");
    key33.innerHTML = "G";
    let key34 = document.getElementById("34");
    key34.innerHTML = "H";
    let key35 = document.getElementById("35");
    key35.innerHTML = "J";
    let key36 = document.getElementById("36");
    key36.innerHTML = "K";
    let key37 = document.getElementById("37");
    key37.innerHTML = "L";
    let key38 = document.getElementById("38");
    key38.innerHTML = ";";
    let key39 = document.getElementById("39");
    key39.innerHTML = "\''";
    let key40 = document.getElementById("40");
    key40.innerHTML = "Enter";
    key40.style.width = "60px";

    let key41 = document.getElementById("41");
    key41.innerHTML = "Shift";
    key41.style.width = "48px";
    let key42 = document.getElementById("42");
    key42.innerHTML = "Z";
    let key43 = document.getElementById("43");
    key43.innerHTML = "X";
    let key44 = document.getElementById("44");
    key44.innerHTML = "C";
    let key45 = document.getElementById("45");
    key45.innerHTML = "V"; 
    let key46 = document.getElementById("46");
    key46.innerHTML = "B";
    let key47 = document.getElementById("47");
    key47.innerHTML = "N";
    let key48 = document.getElementById("48");
    key48.innerHTML = "M";
    let key49 = document.getElementById("49");
    key49.innerHTML = ","; 
    let key50 = document.getElementById("50");
    key50.innerHTML = ".";
    let key51 = document.getElementById("51");
    key51.innerHTML = "/";
    let key52 = document.getElementById("52");
    key52.innerHTML = "\&#8657;"; 
    let key53 = document.getElementById("53");
    key53.innerHTML = "Shift"; 
    key53.style.width = "83px";


    let key54 = document.getElementById("54");
    key54.innerHTML = "Ctrl";
    let key55 = document.getElementById("55");
    key55.innerHTML = "Win";
    let key56 = document.getElementById("56");
    key56.innerHTML = "Alt";
    let key57 = document.getElementById("57");
    key57.innerHTML = "Spase";
    key57.style.width = "263px";
    let key58 = document.getElementById("58");
    key58.innerHTML = "Alt";
    let key59 = document.getElementById("59");
    key59.innerHTML = "Win";
    let key60 = document.getElementById("60");
    key60.innerHTML = "&#8656;";
    let key61 = document.getElementById("61");
    key61.innerHTML = "&#8659;";
    let key62 = document.getElementById("62");
    key62.innerHTML = "&#8658;";
    let key63 = document.getElementById("63");
    key63.innerHTML = "Ctrl";
}


