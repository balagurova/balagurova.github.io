var cellH, cellW;
var rows = 9;
var columns = 9;
function setup(){
    createCanvas(500,500);
    noFill();
    noStroke();
    cellW = width/columns;
    cellH = height/rows;
    //angleMode(DEGREES);
    
    
}
function draw(){
    background(255,200,255);
    
    
    for(var i=0; i<columns; i++){
        for(var j=0; j<rows; j++){
           
            push();
             rectMode(CENTER);
                var x = i * cellW + cellW/2;
                var y = j * cellH + cellH/2;
                translate(x,y);
               fill(255);
              beginShape();
            vertex(-16,0);
  bezierVertex(-6,-10, 6,-10, 16,0);
  bezierVertex(6,10, -6,10, -16,0)
  endShape();
           // rect(0,0,30,20,10);
                var h = map(mouseX,0,width,-5,5,true);
                var v = map(mouseY,0,height,-2,2,true);
                fill(0);
            noStroke();
    
                ellipse(h,v,10);
        
            pop();
        }   
    }   
}

/*

    for(var i=0; i<columns; i++){
        for(var j=0; j<rows; j++){
        push();
        var x = i * cellW + cellW/2;
        var y = j * cellH + cellH/2;
        translate(x,y);
        rotate(frameCount);
        line(-cellW/2,0,cellW/2,0);
        line(0,-cellH/2,0,cellH/2);
        pop();
         }   
    }   

*/
