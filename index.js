var red_slider = document.getElementById("red_slider");
var green_slider = document.getElementById("green_slider");
var blue_slider = document.getElementById("blue_slider");

var color_sliders = document.getElementsByClassName("color_slider");
// assign event listener to each slider to change color of box model
for (var i = 0; i < color_sliders.length; i++) {
    color_sliders[i].addEventListener("click", changeColor);
}

// Change color of box model when clicked
function changeColor(){
    document.getElementById("boxModel").style.backgroundColor = "rgb(" + red_slider.value + "," 
        + green_slider.value + "," + blue_slider.value + ")";
    
    // Convert RGB to HEX
    document.getElementById("hexValue").innerHTML = convertRGBToHex();
}

// Convert RGB to HEX
function convertRGBToHex(){
    var hex = "#" + ((1 << 24) + (parseInt(red_slider.value) << 16) + 
        (parseInt(green_slider.value) << 8) + parseInt(blue_slider.value)).toString(16).slice(1);
    return hex
}
