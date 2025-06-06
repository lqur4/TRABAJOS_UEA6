let imgQ, imgW, imgE, imgR, imgT, imgY, imgU, imgI, imgO, imgP;
let imagenActual = null;


function preload(){
  imgQ = loadImage('assets/dancingqueen.jpg');
  imgW = loadImage('assets/killerqueen.jpg');
  imgE = loadImage('assets/easier.png')

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(50); 
  text("Canciones");
}

//function draw() { 
 //if (imagenActual){
  //image (imagenActual, 0, 0, width, height);
// }

function draw (){
  background(45, 7, 5);
  if (imagenActual !==null){
    let imgRatio = imagenActual.width / imagenActual.height;
    let canvasRatio = width / height;

    let newWidth, newHeight;

    if (imgRatio > canvasRatio) {
      newWidth = width * 0.8;
      newHeight = newWidth / imgRatio;
    } else {
      newHeight = height *0.8;
      newWidth = newHeight * imgRatio;
    }

    let x = (width - newWidth) / 2;
    let y = (height - newHeight) / 2;

    image (imagenActual, x, y, newWidth, newHeight);
  }
}


function keyPressed(){
  if ( key === 'q'){ imagenActual=imgQ; }
  
  if ( key === 'w'){ imagenActual=imgW; }

  if ( key === 'e'){ imagenActual=imgE; }

}