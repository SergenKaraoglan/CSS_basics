// color sliders
var red_slider = document.getElementById("red_slider");
var green_slider = document.getElementById("green_slider");
var blue_slider = document.getElementById("blue_slider");
var alpha_slider = document.getElementById("alpha_slider");

var color_sliders = document.getElementsByClassName("color_slider");
// assign event listener to each slider to change color of box model
for (var i = 0; i < color_sliders.length; i++) {
    color_sliders[i].oninput = changeColor;
}

// box model
var boxModel = document.getElementById("boxModel");

// assign border functions
document.getElementById("borderRadiusSlider").oninput = changeBorderRadius;
document.getElementById("borderWidthSlider").oninput = changeBorderWidth;
document.getElementById("borderStyles").oninput = changeBorderStyle;

// assign box functions
document.getElementById("boxWidthSlider").oninput = changeWidth;
document.getElementById("boxHeightSlider").oninput = changeHeight;

// assign text functions
document.getElementById("textSizeSlider").oninput = changeTextSize;
document.getElementById("textAlign").oninput = changeTextAlignment;
document.getElementById("fontStyles").oninput = changeFontStyle;


// Change color of box model when clicked
function changeColor(){
    boxModel.style.backgroundColor = "rgb(" + red_slider.value + "," 
        + green_slider.value + "," + blue_slider.value + "," 
        + alpha_slider.value + ")";
    
    // update RGB values
    updateRGBValues();

    // Convert RGB to HEX
    document.getElementById("hexValue").innerHTML = convertRGBToHex();
    changeTextColor();
}

// update RGBA values
function updateRGBValues(){
    document.getElementById("redValue").innerHTML = red_slider.value;
    document.getElementById("greenValue").innerHTML = green_slider.value;
    document.getElementById("blueValue").innerHTML = blue_slider.value;
    document.getElementById("alphaValue").innerHTML = alpha_slider.value;
}

// Convert RGB to HEX
function convertRGBToHex(){
    var hex = "#" + ((1 << 24) + (parseInt(red_slider.value) << 16) + 
        (parseInt(green_slider.value) << 8) + parseInt(blue_slider.value)).toString(16).slice(1);
    return hex
}

// Change text color based on background color
function changeTextColor(){
    var red = parseInt(red_slider.value);
    var green = parseInt(green_slider.value);
    var blue = parseInt(blue_slider.value);
    if (green > 200 && blue > 50 || green > 200 && red > 50 || green > 230) {
        boxModel.style.color = "black";
    } else {
        boxModel.style.color = "white";
    }
}

// Change border radius of box model
function changeBorderRadius(){
    var borderRadius = document.getElementById("borderRadiusSlider").value;
    boxModel.style.borderRadius = borderRadius + "px";
    document.getElementById("borderRadiusValue").innerHTML = borderRadius;
}

// Change border width of box model
function changeBorderWidth(){
    var borderWidth = document.getElementById("borderWidthSlider").value;
    boxModel.style.borderWidth = borderWidth + "px";
    document.getElementById("borderWidthValue").innerHTML = borderWidth;
}

// Change boxModel width
function changeWidth(){
    var width = document.getElementById("boxWidthSlider").value;
    boxModel.style.width = width + "px";
    document.getElementById("boxWidthValue").innerHTML = width;
}

// Change boxModel height
function changeHeight(){
    var height = document.getElementById("boxHeightSlider").value;
    boxModel.style.height = height + "px";
    document.getElementById("boxHeightValue").innerHTML = height;
}

// Change text size
function changeTextSize(){
    var textSize = document.getElementById("textSizeSlider").value;
    boxModel.style.fontSize = textSize + "px";
    document.getElementById("textSizeValue").innerHTML = textSize;
}

// Change border style
function changeBorderStyle(){
    var borderStyle = document.getElementById("borderStyles").value;
    boxModel.style.borderStyle = borderStyle;
}

// Change text alignment
function changeTextAlignment(){
    var textAlign = document.getElementById("textAlign").value;
    boxModel.style.textAlign = textAlign;
}

// Change font style
function changeFontStyle(){
    var fontStyle = document.getElementById("fontStyles").value;
    boxModel.style.fontFamily = fontStyle;
}