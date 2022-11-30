// box models
var boxModels = document.getElementsByClassName("boxModel");

// hex values
var hexValues = document.getElementsByClassName("hexValue");

// color sliders
var red_slider = document.getElementById("redSlider");
var green_slider = document.getElementById("greenSlider");
var blue_slider = document.getElementById("blueSlider");
var alpha_slider = document.getElementById("alphaSlider");

var color_sliders = document.getElementsByClassName("colorSliders");
// assign event listener to each slider to change color of box model
for (var i = 0; i < color_sliders.length; i++) {
    color_sliders[i].oninput = changeColor;
}

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

// change box quantity
document.getElementById("boxQuantity").oninput = changeBoxQuantity;
var boxQuantity = 1;

// select box
document.getElementById("boxSelect").oninput = selectBox;
var curBox = 1;

// change style display
document.getElementById("styleToggle").oninput = toggleStyleDisplay;

// assign grid functions
document.getElementById("gridGap").oninput = changeGridGap;



// Change box quantity
function changeBoxQuantity(){
    var newBoxQuantity = document.getElementById("boxQuantity").value;
    var boxContainer = document.getElementById("boxContainer");
    if (newBoxQuantity > boxQuantity) {
        for (var i = boxQuantity; i < newBoxQuantity; i++){
            boxContainer.innerHTML += "<div class ='boxModel'><div class='hexValue'>#000000</div></div>";
        }
    }
    else{
        for (var i = boxQuantity; i > newBoxQuantity; i--){
            boxContainer.removeChild(boxContainer.lastChild);
        }
    }

    boxQuantity = newBoxQuantity;
    updateBoxClasses();
}

// update class values of each box
function updateBoxClasses(){
    hexValues = document.getElementsByClassName("hexValue");
    boxModels = document.getElementsByClassName("boxModel");
} 

// Select box
function selectBox(){
    curBox = document.getElementById("boxSelect").value;
}

// Toggle style display
function toggleStyleDisplay(){
    var styleDisplay = document.getElementById("styleToggle").value;
    gridDisplay = document.getElementById("gridStyles");
    boxDisplay = document.getElementById("boxStyles");

    if (styleDisplay == 'Grid'){
        gridDisplay.style.display = "block";
        boxDisplay.style.display = "none";
    }
    else{
        gridDisplay.style.display = "none";
        boxDisplay.style.display = "block";
    }
}

// Change color of box model when clicked
function changeColor(){
    boxModels[curBox-1].style.backgroundColor = "rgb(" + red_slider.value + "," 
        + green_slider.value + "," + blue_slider.value + "," 
        + alpha_slider.value + ")";
    
    // update RGB values
    updateRGBValues();

    // Convert RGB to HEX
    hexValues[curBox-1].innerHTML = convertRGBToHex();
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
    var alpha = parseFloat(alpha_slider.value);

    // calculate luminance
    if ((0.2126*red + 0.7152*green + 0.0722*blue) < 128 && alpha > 0.5) {
        boxModels[curBox-1].style.color = "white";
    } else {
        boxModels[curBox-1].style.color = "black";
    }
}

// Change border radius of box model
function changeBorderRadius(){
    var borderRadius = document.getElementById("borderRadiusSlider").value;
    boxModels[curBox-1].style.borderRadius = borderRadius + "px";
    document.getElementById("borderRadiusValue").innerHTML = borderRadius;
}

// Change border width of box model
function changeBorderWidth(){
    var borderWidth = document.getElementById("borderWidthSlider").value;
    boxModels[curBox-1].style.borderWidth = borderWidth + "px";
    document.getElementById("borderWidthValue").innerHTML = borderWidth;
}

// Change boxModels[curBox-1] width
function changeWidth(){
    var width = document.getElementById("boxWidthSlider").value;
    boxModels[curBox-1].style.width = width + "px";
    document.getElementById("boxWidthValue").innerHTML = width;
}

// Change boxModels[curBox-1] height
function changeHeight(){
    var height = document.getElementById("boxHeightSlider").value;
    boxModels[curBox-1].style.height = height + "px";
    document.getElementById("boxHeightValue").innerHTML = height;
}

// Change text size
function changeTextSize(){
    var textSize = document.getElementById("textSizeSlider").value;
    boxModels[curBox-1].style.fontSize = textSize + "px";
    document.getElementById("textSizeValue").innerHTML = textSize;
}

// Change border style
function changeBorderStyle(){
    var borderStyle = document.getElementById("borderStyles").value;
    boxModels[curBox-1].style.borderStyle = borderStyle;
}

// Change text alignment
function changeTextAlignment(){
    var textAlign = document.getElementById("textAlign").value;
    boxModels[curBox-1].style.textAlign = textAlign;
}

// Change font style
function changeFontStyle(){
    var fontStyle = document.getElementById("fontStyles").value;
    boxModels[curBox-1].style.fontFamily = fontStyle;
}

function changeGridGap(){
    var gridGap = document.getElementById("gridGap").value;
    document.getElementById("boxContainer").style.gap = gridGap + "px";
    //document.getElementById("gridGapValue").innerHTML = gridGap;
}