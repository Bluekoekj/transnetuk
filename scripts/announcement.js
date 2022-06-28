var announcementText = "";

var button1link = "";
var button1text = "";

var button2link = "";
var button2text = "";

var button3link = "";
var button3text = "";

window.onload = function() {
    if(announcementText == "") {
        document.getElementsByClassName("announcement-box")[0].remove();
        return;
    }
    if(button1text == "") {
        document.getElementById("button1").remove();
    }
    if(button2text == "") {
        document.getElementById("button2").remove();
    }
    if(button3text == "") {
        document.getElementById("button3").remove();
    }
    document.getElementById("announcement-text").innerHTML = announcementText;

    document.getElementById("button1link").href = button1link;
    document.getElementById("button1").innerHTML = button1text;

    document.getElementById("button2link").href = button2link;
    document.getElementById("button2").innerHTML = button2text;

    document.getElementById("button3link").href = button3link;
    document.getElementById("button3").innerHTML = button3text;
}
