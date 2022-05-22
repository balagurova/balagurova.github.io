//Anastasiia Balagurova
//29.11.2021
//This program generates text-like block with random shapes using radial shapes with sin and cos. 
//The shape function is from an example 'polarExploration'

var columns = 20;
var rows = 14;
var marginW = 150;
var marginH = 100;
var cellW, cellH;


function setup(){
    createCanvas(500,500);
    frameRate(3); //lowering speed of animation
    fill(255);
    cellW = (width - 2 * marginW) / columns;
    cellH = (height - 2 * marginH) / rows;
    rectMode(CENTER);
}

function draw(){
    background(0);
    //creating a grid
    for(var i = 0; i < columns; i++){
        for(var j = 0; j < rows; j++) {
            push();
                var x = i * cellW + cellW/2 + marginW;
                var y = j * cellH + cellH/2 + marginH;
                translate(x,y);
                noFill();
                stroke(255);
                shape(random(1,30), 2, 10, 2, random(1,30));//drawing a shape with a shape function and random parameters 
            pop();
        }
    }
}

function shape(points, rad1, freq1, rad2, freq2){
    beginShape();
    for(var i=0; i <= points; i++ ){
        var angle = TWO_PI/points*i;
        var y = sin(angle*freq1)*rad1 + sin(angle*freq2)*rad2;
        var x = cos(angle*freq1)*rad1 + cos(angle*freq2)*rad2;
        vertex(x,y);
    }
    endShape();
}