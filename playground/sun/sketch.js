function setup(){
    createCanvas(324,324);
    background(0);
   
}
var i = 0;
function draw(){
    resetSketch()
}

function mousePressed() {
    background(0);
    resetSketch()
  }

  function resetSketch(){
    
    var c = color(random(0,255),random(0,255),random(0,255));
    noFill();
    stroke(255);
    translate(width/2,height/2);
    stroke(255);
    strokeWeight(1);
    strokeCap(SQUARE);
    rotate(i);
    line(0,0,50,random(10,200));
    fill(0);
    noStroke();
    ellipse(0,0,250);
    
    i+=36;      

  }