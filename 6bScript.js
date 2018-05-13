var divNum = 3;

function changecolorDiv1(){
    var colorSelected=document.getElementById("div1colors").value;
    if(colorSelected=="other"){
        document.getElementById("othertext").disabled=false;
    }
    else {
        document.getElementById("othertext").disabled = true;
        document.getElementById("othertext").value = "Insert color";
    }
    document.getElementById("div1").style.background=colorSelected;
}

function otherDiv1() {
    document.getElementById("div1").style.background = "";
    var color = prompt("Please enter the background color","");
    document.getElementById("div1").style.background = color;
    if(document.getElementById("div1").style.background == "") {
        document.getElementById("div1").style.background = "black";

        document.getElementById("othertext").value = "Insert color";
        alert("Insert a valid color!");
    }
    else {
        document.getElementById("othertext").value = color;
        acquireColors();
    }

}

function white(){
    document.getElementById("div1").style.background="";
}

function acquireColors() {
    var divBackColor = document.getElementsByTagName("div");
    document.getElementById("colortitleselect").innerHTML="";
    var color;
    for (var i = 0; i < divBackColor.length; i++) {
        if(divBackColor[i].style.backgroundColor=="")
            color = "white";
        else
            color = divBackColor[i].style.backgroundColor;
        var newColor = new Option(color,color)
        document.getElementById("colortitleselect").options.add(newColor);
    }
}

function changeTitle(){
    var h = document.getElementsByTagName("h1");
    var d = document.getElementsByTagName("div");
    var colorSelected=document.getElementById("colortitleselect").value;
    for (var i = 0; i < h.length; i++) {
        if(d[i].style.background!=colorSelected&&d[i].style.background!="")
            h[i].style.color=colorSelected;
        else if (d[i].style.background==colorSelected&&d[i].style.background!="black")
            h[i].style.color="white";
        else
            h[i].style.color="black";

    }
}

function createDiv() {
    var divCol = document.getElementById("newDivColor").value;
    var divPos = document.getElementById("newDivPos").value;
    var c = document.getElementsByTagName("div");

    //alert(c.length);

    var div = document.createElement('div');
    div.innerHTML = "<h1>Division "+divNum+"</h1>";
    div.style.background=divCol;
    divNum++;
    if(divPos<c.length)
        document.body.insertBefore(div,c[divPos-1]);
    else
        document.body.insertBefore(div,c[c.length-1]);
}