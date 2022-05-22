//Anastasiia Balagurova
//23.03.2022
//This is an animated grid with pixelated icons inspired by Space Invaders.

let columns;
let rows;
let cellW = 79;
let cellH;
let scaleSize = 0.79;

function setup() {

    //create canvas in the div
    createCanvas(1046,490)
    columns = (width / cellW) - 1;
    //calculate width and height for each cell
    cellH = cellW;
    rows = (height / cellH);
    angleMode(DEGREES);
    frameRate(1);
}

function draw() {
    background(255);

    //nested loop
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {

            push();
            let ran = random();
            //calculate the coordinates of the center of each cell
            let x = i * cellW + cellW / 2;
            let y = j * cellH + cellH / 2;
            //translate the origin point to the center of the cell
            translate(x, y);
            //random function 

            if (ran < 0.10) draw1();
            else if (ran < 0.20) draw2(); //drawing an asterics
            else if (ran < 0.30) draw3(); //drawing an eye
            else if (ran < 0.40) draw4(); //drawing a triangle
            else if (ran < 0.50) draw5(); //drawing another triangle
            else if (ran < 0.60) draw6(); //drawing another triangle
            else if (ran < 0.70) draw7(); //drawing another triangle
            else if (ran < 0.80) draw8(); //drawing another triangle
            else if (ran < 0.90) draw9(); //drawing another triangle
            else {
                draw10();
            }
            pop();
        }
    }
}


function draw1() {
    scale(scaleSize)
    fill('#242424');
    noStroke();
    translate(-cellW / 2, -cellH / 2)
    rect(10, 10, 10)
    rect(20, 20, 10)
    rect(40, 10, 10, 20)
    rect(70, 10, 10)
    rect(60, 20, 10)
    rect(10, 70, 10)
    rect(20, 60, 10)
    rect(10, 40, 20, 10)
    rect(60, 40, 20, 10)
    rect(40, 60, 10, 20)
    rect(70, 70, 10)
    rect(60, 60, 10)
}

function draw2() {
    scale(scaleSize)
    fill('#242424');
    noStroke();
    translate(-cellW / 2, -cellH / 2)
    rect(10, 10, 10)
    rect(70, 10, 10)
    rect(30, 20, 30, 10)
    rect(30, 60, 30, 10)
    rect(10, 40, 70, 10)
    rect(10, 70, 10)
    rect(70, 70, 10)
}

function draw3() {
    scale(scaleSize)
    fill('#242424');
    noStroke();
    translate(-cellW / 2, -cellH / 2)
    rect(40, 10, 10)
    rect(30, 20, 30, 10)
    rect(20, 30, 50, 10)
    rect(10, 40, 20, 10)
    rect(60, 40, 20, 10)
    rect(40, 40, 10)
    rect(10, 50, 70, 10)
    rect(20, 70, 10)
    rect(30, 60, 10)
    rect(40, 70, 10)
    rect(50, 60, 10)
    rect(60, 70, 10)
}

function draw4() {
    scale(scaleSize)
    fill('#242424');
    noStroke();
    translate(-cellW / 2, -cellH / 2)
    rect(20, 10, 10)
    rect(40, 10, 10)
    rect(60, 10, 10)

    rect(20, 70, 10)
    rect(40, 70, 10)
    rect(60, 70, 10)

    rect(30, 20, 30, 10)
    rect(30, 60, 30, 10)

    rect(20, 30, 50, 10)
    rect(20, 50, 50, 10)

    rect(10, 40, 30, 10)
    rect(50, 40, 30, 10)
}


function draw5() {
    scale(scaleSize)
    fill('#242424');
    noStroke();
    translate(-cellW / 2, -cellH / 2)
    rect(30, 10, 10)
    rect(50, 10, 10)

    rect(20, 20, 10, 30)
    rect(60, 20, 10, 30)

    rect(30, 30, 30, 10)

    rect(40, 40, 10)

    rect(10, 50, 70, 10)

    rect(10, 60, 10, 20)
    rect(70, 60, 10, 20)

    rect(30, 60, 30, 10)

    rect(30, 70, 10)
    rect(50, 70, 10)
}

function draw6() {
    scale(scaleSize)
    fill('#242424');
    noStroke();
    translate(-cellW / 2, -cellH / 2)
    rect(10, 10, 70, 10)
    rect(10, 70, 70, 10)

    rect(20, 20, 20, 10)
    rect(50, 20, 20, 10)

    rect(20, 60, 20, 10)
    rect(50, 60, 20, 10)

    rect(30, 30, 10)
    rect(50, 30, 10)

    rect(30, 50, 10)
    rect(50, 50, 10)

    rect(20, 40, 10)
    rect(40, 40, 10)
    rect(60, 40, 10)
}


function draw7() {
    scale(scaleSize)
    fill('#242424');
    noStroke();
    translate(-cellW / 2, -cellH / 2)
    rect(40, 20, 10)
    rect(40, 60, 10)

    rect(30, 30, 10)
    rect(50, 30, 10)
    rect(50, 50, 10)
    rect(30, 50, 10)
    rect(40, 40, 10)

    rect(20, 40, 10)
    rect(60, 40, 10)
}

function draw8() {
    scale(scaleSize)
    fill('#242424');
    noStroke();
    translate(-cellW / 2, -cellH / 2)
    rect(10, 10, 10)
    rect(40, 10, 10)
    rect(70, 10, 10)

    rect(10, 70, 10)
    rect(40, 70, 10)
    rect(70, 70, 10)

    rect(20, 20, 10)
    rect(60, 20, 10)

    rect(20, 60, 10)
    rect(60, 60, 10)

    rect(30, 30, 10)
    rect(50, 30, 10)

    rect(30, 50, 10)
    rect(50, 50, 10)

    rect(10, 40, 10)
    rect(40, 40, 10)
    rect(70, 40, 10)



}

function draw9() {
    scale(scaleSize)
    fill('#242424');
    noStroke();
    translate(-cellW / 2, -cellH / 2)
    rect(30, 10, 10)
    rect(50, 10, 10)

    rect(40, 20, 10)
    rect(50, 10, 10)

    rect(10, 30, 10, 50)
    rect(70, 30, 10, 50)

    rect(30, 30, 30, 10)

    rect(20, 40, 10, 20)
    rect(60, 40, 10, 20)

    rect(40, 40, 10, 40)

    rect(30, 50, 10, 20)
    rect(50, 50, 10, 20)

    rect(20, 70, 10)
    rect(60, 70, 10)
}

function draw10() {
    scale(scaleSize)
    fill('#242424');
    noStroke();
    translate(-cellW / 2, -cellH / 2)
    rect(40, 20, 10)
    rect(40, 60, 10)

    rect(30, 30, 10)
    rect(50, 30, 10)
    rect(50, 50, 10)
    rect(30, 50, 10)
    rect(40, 40, 10)


    rect(20, 40, 10)
    rect(60, 40, 10)

    rect(40, 30, 10)
    rect(30, 40, 10)

    rect(50, 40, 10)
    rect(40, 50, 10)
}




