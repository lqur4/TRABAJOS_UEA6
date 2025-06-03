let imgQ, imgW, imgE, imgR, imgT, imgY, imgU, imgI, imgO, imgP;
let imagenActual = null;


function preload(){
  imgQ = loadImage('assets/dancingqueen.jpg');
  imgW = loadImage('assets/killerqueen.jpg');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(50);
  text("Canciones");
}

function draw() {
 if (imagenActual){
  image (imagenActual, 0, 0, width, height);
 }

}


function keyPressed(){
  if ( key === 'q'){ imagenActual-imgQ; }
  
  if ( key === 'w'){ imagenActual-imgW; }

}