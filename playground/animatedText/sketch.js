var cellH, cellW;
var rows = 20;
var columns = 20;
var r = 0;
function setup(){
    createCanvas(500,500);
    noFill();
    stroke(255);
    cellW = width/columns;
    cellH = height/rows;
    angleMode(DEGREES);
}
function draw(){
    background(0);
    
    for(var i=0; i<columns; i++){
        for(var j=0; j<rows; j++){
        push();
        var x = i * cellW + cellW/2;
        var y = j * cellH + cellH/2;
        translate(x,y);
        rotate(r + x + y);
        //line(-cellW/2,0,cellW/2,0);
        //line(0,-cellH/2,0,cellH/2);
            //ellipse(cellW/2,0,10);
             textFont('Arial');
            noStroke();
            fill(255);
            textSize(cellW);
            text('A!',cellW/2,0);
        pop();
         }   
    }
    r+=2;
}
