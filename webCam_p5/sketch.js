let capture; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture (VIDEO);
  capture.size (400, 700);
  capture.hide();
}

function draw() {
  background(220);
    let x = (width - 400) / 2;
    let y = (height - 700) / 2;
  image(capture, x, y, 400, 700)   
  
  
}
