// color siders
var red_slider = document.getElementById("red_slider");
var green_slider = document.getElementById("green_slider");
var blue_slider = document.getElementById("blue_slider");
var box_model = document.getElementById("boxModel");

var color_sliders = document.getElementsByClassName("color_slider");
// assign event listener to each slider to change color of box model
for (var i = 0; i < color_sliders.length; i++) {
    color_sliders[i].oninput = changeColor;
}

// Change color of box model when clicked
function changeColor(){
    boxModel.style.backgroundColor = "rgb(" + red_slider.value + "," 
        + green_slider.value + "," + blue_slider.value + ")";
    
    // Convert RGB to HEX
    document.getElementById("hexValue").innerHTML = convertRGBToHex();
    changeTextColor();
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
