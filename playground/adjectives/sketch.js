//Anastasiia Balagurova
//23.03.2022
//This script creates a phrase with a random adjective and a clicable button to reload the phrase.



let table, box, list, myFont, img;
let textX, textY;
let text1,text2;
let margin = 5;
let fontSize;
let spaceBetweenLines;

function preload() {
    table = loadTable('/playground/data/adjectives.csv', 'csv', 'header');
    myFont = loadFont('/playground/font/PIXY.otf')
    img = loadImage('/playground/img/button.svg');
}

function setup() {
    createCanvas(1030,500)
    background('#FDE033');
    list = table.getColumn('adjective');

    //get random items from the array
    text1 = "YOU ARE " + random(list).toUpperCase();
    text2 = "Have a good day!"
}


function draw() {
    background('#FDE033');
    fill('#242424')
    textAlign(LEFT);
    fontSize = width / 17; 
    
    if(width < 700){
        fontSize = width / 13; 
    }

    spaceBetweenLines =  width/72;
    textSize(fontSize);
    textFont(myFont);    
    

    //get sizes of textboxes
    box1 = myFont.textBounds(text1, 0, 0, fontSize);
    box2 = myFont.textBounds(text2, 0, 0, fontSize);

    buttonH = box1.h + 5;


    textX = (width - box1.w) / 2 - 50; 
    textY = 200;

    if(width < 700){
        textX = (width - box1.w) / 4; 
        textY = 140;  
    }
   
    //rectangles
    rect(textX - margin*2, textY - margin, box1.w + buttonH*2 + margin, box1.h + 10)
    rect(textX - margin*2, textY + box1.h + spaceBetweenLines - margin, box2.w + 16, box2.h + 10)

    //text    
    fill('#FDE033')
    text(text1, textX, textY + box1.h);
    text(text2, textX, textY + (box1.h*2) + spaceBetweenLines);

    //button
    fill(255);
    buttonX = textX + box1.w + buttonH;
    buttonY = textY + box1.h / 2;
    
    imageMode(CENTER);
    image(img, buttonX, buttonY, buttonH, buttonH)
}


function mousePressed() {
    if (dist(mouseX, mouseY, buttonX, buttonY) < buttonH) {
        text1 = "YOU ARE " + random(list).toUpperCase();
    }
}

