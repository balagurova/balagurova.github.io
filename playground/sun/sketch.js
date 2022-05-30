var buttonPurple;
var buttonClear;
var penSize = 10;
var col;
var w;


function preload() {
    img = loadImage('img/01.png');

}

function setup() {
    createCanvas(windowWidth, windowHeight).parent("image-1");
    resetSketch();
    stroke(255)

}


function draw() {
    if (mouseIsPressed) {
        line(mouseX, mouseY, pmouseX, pmouseY)
    }
    
    image(img, width / 2, height / 6, w/2.4, w/2.4);
}

function makePurple() {
    stroke('#ACACF8')
}

function makeGreen() {
    stroke('#99D445')
}

function makeYellow() {
    stroke('#FFDF4F')
}

function makeBlue() {
    stroke('#9CC3E6')
}

function makePink() {
    stroke('#FFB3B3')
}

function makeWhite() {
    stroke('#ffffff')
}

function makeClear() {
    resetSketch();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function resetSketch() {
fill(255)
   
   background(255);
        w = width;
        noStroke();
        rect(0,0,w,50)
    buttonPurple = createButton("");
    buttonGreen = createButton("");
    buttonYellow = createButton("");
    buttonBlue = createButton("");
    buttonPink = createButton("");
    buttonWhite = createButton("");
    buttonClear = createButton("Clear");

    buttonPurple.position(w - 300, 20);
    buttonGreen.position(w - 260, 20);
    buttonYellow.position(w - 220, 20);
    buttonBlue.position(w - 180, 20);
    buttonPink.position(w - 140, 20);
    buttonWhite.position(w - 100, 20);
    buttonClear.position(w - 60, 20);
    strokeWeight(penSize);


    buttonPurple.style("border", "none");
    buttonGreen.style("border", "none");
    buttonYellow.style("border", "none");
    buttonBlue.style("border", "none");
    buttonPink.style("border", "none");
    buttonWhite.style("border", "1px solid black");
    buttonClear.style("border", "none");

    buttonPurple.style("border-radius", "100%");
    buttonGreen.style("border-radius", "100%");
    buttonYellow.style("border-radius", "100%");
    buttonBlue.style("border-radius", "100%");
    buttonPink.style("border-radius", "100%");
    buttonWhite.style("border-radius", "100%");
    buttonClear.style("border-radius", "0");

    buttonPurple.style("background-color", "#ACACF8");
    buttonGreen.style("background-color", "#99D445");
    buttonYellow.style("background-color", "#FFDF4F");
    buttonBlue.style("background-color", "#9CC3E6");
    buttonPink.style("background-color", "#FFB3B3");
    buttonWhite.style("background-color", "#ffffff");
    buttonClear.style("background-color", "#ffffff");

    buttonPurple.style("padding", "15px");
    buttonGreen.style("padding", "15px");
    buttonYellow.style("padding", "15px");
    buttonBlue.style("padding", "15px");
    buttonPink.style("padding", "15px");
    buttonWhite.style("padding", "15px");
    buttonClear.style("padding", "10px");
    //attach event listener (mousePressed) and callback function (randomColor) to the button
    //so every time button is pressed, randomColor function is executed 
    buttonPurple.mousePressed(makePurple);
    buttonGreen.mousePressed(makeGreen);
    buttonYellow.mousePressed(makeYellow);
    buttonBlue.mousePressed(makeBlue);
    buttonPink.mousePressed(makePink);
    buttonWhite.mousePressed(makeWhite);
    buttonClear.mousePressed(makeClear);
}


   
