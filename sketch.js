var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background
display();
this.button1.mousePressed() 
  if(system.authenticate(accessCode1,thus.access1.value())){
    this.button1.side();
    this.access1.side();
    score++;
  }
  this.button2.mousePressed() 
    if(system.authenticate(accessCode2,thus.access2.value())){
      this.button2.side();
      this.access2.side();
      score++;

}
  }
  


function clues() {
  fill("white")
  textsize(15)
  text("R E V B A I L A",100,50)
  Fill("lightblue")
  text("Hint: Always changing,not constant !!",100,70)
  // add code for displaying rest of the names and the hints
}

  

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }
  if(actualCode===enteredCode.toUpperCase())

  
  drawSprites()
