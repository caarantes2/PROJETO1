function setup() {
  createCanvas(1000,800);
  background("rgb(252,181,193)");
}

function draw() {
  
  fill("rgb(255,255,255)");
  stroke ("#7DA9BD");
  if(mouseIsPressed)
  rect(mouseX,mouseY,50,70);
}
