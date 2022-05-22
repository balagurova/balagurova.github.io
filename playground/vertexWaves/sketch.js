var phase, amplitude, frequency;
function setup(){
    createCanvas(350,350);
    frequency = 2; //frequency defines how often the wave repeats
    phase = 0;
    amplitude = 200; //amplitude defines the range
}
function draw(){
    background(0);
    stroke(255);
    translate(0, height/2);
    beginShape();
        for(var x = 0; x < width; x++){
            //calculate the angle based on x position
            var angle = map(x, 0, width, 0, TWO_PI);
            //calculate y position
            var y = sin(angle*frequency+phase)*amplitude;
            vertex(x,y);
        }
    endShape();
    //move the wave along by changing phase
    phase+=0.02;
}
