//Anastasiia Balagurova
//This program draws a face in love
function setup(){
    createCanvas(500,500);
}
function draw(){
    background('#EB979526');
    noFill();
    stroke(0);
    strokeWeight(2);
    //drawing eyes
    arc(191, 220, 30, 30, radians(0), radians(180), OPEN);
    arc(294, 220, 30, 30, radians(0), radians(180), OPEN);
    //drawing nose
    strokeCap(ROUND);
    line(248,207, 219,270);
    line(219,270, 248,270);
    //drawing mouth
    arc(240, 297, 70, 70, radians(0), radians(180), OPEN);
    //drawing glasses
    noFill();
    stroke(255);
    strokeWeight(6);
    strokeCap(SQUARE);
    ellipse(190,223,70);
    ellipse(292,223,70);
    line(226,225,257,225);
    line(116,209,155,220);
    line(326,227,367,217);
    //drawing heart
    noStroke();
    fill(255,81,0);
    arc(mouseX+20, mouseY+20, 16, 16, radians(180), radians(0), OPEN);
    arc(mouseX+36, mouseY+20, 16, 16, radians(180), radians(0), OPEN);
    triangle(mouseX+12,mouseY+20,mouseX+44,mouseY+20,mouseX+28,mouseY+45);
}
