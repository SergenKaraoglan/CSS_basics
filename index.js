var color_sliders = document.getElementsByClassName("color_slider");
for (var i = 0; i < color_sliders.length; i++) {
    color_sliders[i].addEventListener("click", changeColor);
}

// Change color of box model when clicked
function changeColor(){
    document.getElementById("boxModel").style.backgroundColor = "rgb(" + document.getElementById("red_slider").value + "," 
        + document.getElementById("green_slider").value + "," + document.getElementById("blue_slider").value + ")";
    
    console.log(document.getElementById("red_slider").value);
    // Convert RGB to HEX
    //convertRGBToHex();

}

// Convert RGB to HEX
function convertRGBToHex(){
    var hex = "#" + ((1 << 24) + (parseInt(document.getElementById("red_slider").value) << 16) + (parseInt(document.getElementById("green_slider").value) << 8) + parseInt(document.getElementById("blue_slider").value)).toString(16).slice(1);
    document.getElementById("hexValue").innerHTML = hex;
}
