let canvasDiv = document.getElementById('canvasContainer');
let divWidth = canvasDiv.offsetWidth;
let divHeight = canvasDiv.offsetHeight;

var x, y;
var s = 10;
var l = 20;

function setup() {
    createCanvas(divWidth, divHeight).parent("canvasContainer");
    x = width / 2;
    y = height / 2;
    background('#F5F4F4')
    noStroke()
    frameRate(2)

}

function draw() {


    background('#F5F4F44D')
    for (i = 0; i < 50; i++) {
        frameRate(2)
        fill('#ABC9DA');
        rect(x, y, l, s);

        var ran = random();
        if (ran < 0.23) x += l; //move to right
        else if (ran < 0.50) x -= l; //move to left
        else if (ran < 0.75) y -= s; //move up
        else y += s; //move down

        if (x > width) {
            x = width - l
        }

        if (x < 0) {
            x = l
        }

        if (y > height) {
            y = height - s
        }

        if (y < 0) {
            y = s
        }


    }
}

function windowResized() {
    divWidth = canvasDiv.offsetWidth;
    divHeight = canvasDiv.offsetHeight;
    resizeCanvas(divWidth, divHeight);
}