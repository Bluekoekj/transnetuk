var blurSlider = document.getElementById("blurSlider");
var blurValueText = document.getElementById("blurValueText");
var blurCodeChrome = "";

var hueSlider = document.getElementById("hueSlider");
var hueValueText = document.getElementById("hueValueText");
var hueCodeChrome = "";

var brightnessSlider = document.getElementById("brightnessSlider");
var brightnessValueText = document.getElementById("brightnessValueText");
var brightnessCodeChrome = "";

var grayscaleSlider = document.getElementById("grayscaleSlider");
var grayscaleblurValueText = document.getElementById("grayscaleValueText");
var grayscaleCodeChrome = "";

var saturationSlider = document.getElementById("saturationSlider");
var saturationValueText = document.getElementById("saturationValueText");
var saturationCodeChrome = "";

var contrastSlider = document.getElementById("contrastSlider");
var contrastValueText = document.getElementById("contrastValueText");
var contrastCodeChrome = "";

var invertSlider = document.getElementById("invertSlider");
var invertValueText = document.getElementById("invertValueText");
var invertCodeChrome = "";

var imageOutput = document.getElementById("image-output");

var imageUpload = document.getElementById("upload");
var urlUpload = document.getElementById("urlInput")



// Blur Slider
blurSlider.oninput = function() {
    blurValueText.value = this.value;
    if(this.value != 0) {
        blurCodeChrome = "blur(" + this.value + "px) ";
    }
    else {
        blurCodeChrome = ""
    }
    UpdateImage();
    UpdateCode();
}
blurValueText.oninput = function() {
    var actualValue = this.value;
    if(this.value == "") {
        actualValue = 0;
    }
    blurSlider.value = actualValue;
    if(blurSlider.value != 0) {
        blurCodeChrome = "blur(" + this.value + "px) ";
    }
    else {
        blurCodeChrome = ""
    }
    UpdateImage();
    UpdateCode();
}

// Hue Rotate Slider
hueSlider.oninput = function() {
    hueValueText.value = this.value;
    if(this.value != 0) {
        hueCodeChrome = "hue-rotate(" + this.value + "deg) ";
    }
    else {
        hueCodeChrome = ""
    }
    UpdateImage();
    UpdateCode();
}
hueValueText.oninput = function() {
    var actualValue = this.value;
    if(this.value == "") {
        actualValue = 0;
    }
    hueSlider.value = actualValue;
    if(this.value != 0) {
        hueCodeChrome = "hue-rotate(" + this.value + "deg) ";
    }
    else {
        hueCodeChrome = ""
    }
    UpdateImage();
    UpdateCode();
}

// Brightness Slider
brightnessSlider.oninput = function() {
    brightnessValueText.value = this.value;
    if(this.value != 0) {
        brightnessCodeChrome = "brightness(" + this.value + ") ";
    }
    else {
        brightnessCodeChrome = ""
    }
    UpdateImage();
    UpdateCode();
}
brightnessValueText.oninput = function() {
    var actualValue = this.value;
    if(this.value == "") {
        actualValue = 0;
    }
    brightnessSlider.value = actualValue;
    if(this.value != 0) {
        brightnessCodeChrome = "brightness(" + this.value + ") ";
    }
    else {
        brightnessCodeChrome = ""
    }
    UpdateImage();
    UpdateCode();
}

// Grayscale Slider
grayscaleSlider.oninput = function() {
    grayscaleValueText.value = this.value;
    if(this.value != 0) {
        grayscaleCodeChrome = "grayscale(" + this.value + ") ";
    }
    else {
        grayscaleCodeChrome = ""
    }
    UpdateImage();
    UpdateCode();
}
grayscaleValueText.oninput = function() {
    var actualValue = this.value;
    if(this.value == "") {
        actualValue = 0;
    }
    grayscaleSlider.value = actualValue;
    if(this.value != 0) {
        grayscaleCodeChrome = "grayscale(" + this.value + ") ";
    }
    else {
        grayscaleCodeChrome = ""
    }
    UpdateImage();
    UpdateCode();
}

// Saturation Slider
saturationSlider.oninput = function() {
    saturationValueText.value = this.value;
    if(this.value != 0) {
        saturationCodeChrome = "saturate(" + this.value + ") ";
    }
    else {
        saturationCodeChrome = ""
    }
    UpdateImage();
    UpdateCode();
}
saturationValueText.oninput = function() {
    var actualValue = this.value;
    if(this.value == "") {
        actualValue = 0;
    }
    saturationSlider.value = actualValue;
    if(this.value != 0) {
        saturationCodeChrome = "saturate(" + this.value + ") ";
    }
    else {
        saturationCodeChrome = ""
    }
    UpdateImage();
    UpdateCode();
}

// Contrast Slider
contrastSlider.oninput = function() {
    contrastValueText.value = this.value;
    if(this.value != 0) {
        contrastCodeChrome = "contrast(" + this.value + ") ";
    }
    else {
        contrastCodeChrome = ""
    }
    UpdateImage();
    UpdateCode();
}
contrastValueText.oninput = function() {
    var actualValue = this.value;
    if(this.value == "") {
        actualValue = 0;
    }
    contrastSlider.value = actualValue;
    if(this.value != 0) {
        contrastCodeChrome = "contrast(" + this.value + ") ";
    }
    else {
        contrastCodeChrome = ""
    }
    UpdateImage();
    UpdateCode();
}

// Invert Slider
invertSlider.oninput = function() {
    invertValueText.value = this.value;
    if(this.value != 0) {
        invertCodeChrome = "invert(" + this.value + ") ";
    }
    else {
        invertCodeChrome = ""
    }
    UpdateImage();
    UpdateCode();
}
invertValueText.oninput = function() {
    var actualValue = this.value;
    if(this.value == "") {
        actualValue = 0;
    }
    invertSlider.value = actualValue;
    if(this.value != 0) {
        invertCodeChrome = "invert(" + this.value + ") ";
    }
    else {
        invertCodeChrome = ""
    }
    UpdateImage();
    UpdateCode();
}

function UpdateImage() {
    imageOutput.style.filter = blurCodeChrome + hueCodeChrome + brightnessCodeChrome + grayscaleCodeChrome + saturationCodeChrome + contrastCodeChrome + invertCodeChrome;
}
function UpdateCode() {
    var chromecode = document.getElementById("chromeCode");
    var safaricode = document.getElementById("safariCode");
    var firefoxcode = document.getElementById("firefoxCode");
    chromecode.innerHTML = "filter(" + blurCodeChrome + hueCodeChrome + brightnessCodeChrome + grayscaleCodeChrome + saturationCodeChrome + contrastCodeChrome + invertCodeChrome + ");";
    safaricode.innerHTML = "-webkit-filter(" + blurCodeChrome + hueCodeChrome + brightnessCodeChrome + grayscaleCodeChrome + saturationCodeChrome + contrastCodeChrome + invertCodeChrome + ");";
    firefoxcode.innerHTML = "-moz-filter(" + blurCodeChrome + hueCodeChrome + brightnessCodeChrome + grayscaleCodeChrome + saturationCodeChrome + contrastCodeChrome + invertCodeChrome + ");";
}

urlUpload.oninput = function() {
    if(urlUpload.value) {
        imageOutput.src = urlUpload.value;
    }
    else {
        imageOutput.src = "/images/me.png"
    }
}