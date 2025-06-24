let imgQ, imgW, imgE, imgR, imgT, imgY, imgU, imgI, imgO, imgP;
let imagenActual = null;
let fondo;


function preload(){

  fondo = loadImage('assets/fondo2.jpeg');

  imgQ = loadImage('assets/dancingqueen.jpg');
  imgW = loadImage('assets/won.jpg');
  imgE = loadImage('assets/easier.png');
  imgR = loadImage('assets/rockthatbody.jpg');
  imgT = loadImage('assets/tearsdryon.jpeg');
  imgY = loadImage('assets/youve.jpeg');
  imgU = loadImage('assets/ucant.jpeg')
  imgI = loadImage('assets/iwishyoulove.jpeg')
  imgO = loadImage('assets/onandon.jpeg')
  imgP = loadImage('assets/ponthereplay.jpeg')

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

  image(fondo, 0, 0, width, height);

  if (imagenActual !==null){
    let imgRatio = imagenActual.width / imagenActual.height;
    let canvasRatio = width / height;

    let newWidth, newHeight;

    if (imgRatio > canvasRatio) {
      newWidth = width * 0.;6
      newHeight = newWidth / imgRatio;
    } else {
      newHeight = height *0.6;
      newWidth = newHeight * imgRatio;
    }

    let x = (width - newWidth) / 2;
    let y = (height - newHeight) / 4;

    image (imagenActual, x, y, newWidth, newHeight);

    fill(190, 190, 190); 
    //text(textoActual, width / 3, y + newHeight + 80); 
    textAlign(CENTER, CENTER); // Centrado horizontal y vertical
    text(textoActual, width / 2, height * 0.85);
    textSize(30);
    
  }
}


function keyPressed(){
  if ( key === 'q'){ imagenActual=imgQ; 
  textoActual = "Dancing Queen - ABBA";}

  else if ( key === 'w'){ imagenActual=imgW; 
  textoActual = "Wonderwall - Oasis";}

  else if ( key === 'e'){ imagenActual=imgE; 
  textoActual = "Easier said than done - Thee Sacred Souls";}

  else if ( key === 'r'){ imagenActual=imgR;
  textoActual = "Rock that body - Black Eyed Peas";}

  else if ( key === 't'){ imagenActual=imgT;
  textoActual = "Tears dry on their own - Amy Winehouse";}

  else if ( key === 'y'){ imagenActual=imgY;
    textoActual = "You’ve Really Got a Hold on Me -  The Miracles";}

  else if ( key === 'u'){ imagenActual=imgU;
  textoActual = "U can't touch this - M.C. Hammer";}

  else if ( key === 'i'){ imagenActual=imgI;
  textoActual = "I wish you love - Laufey";}

  else if ( key === 'o'){ imagenActual=imgO;
  textoActual = "On & On - Erykah Badu";}

  else if ( key === 'p'){ imagenActual=imgP;
  textoActual = "Pon the replay - Rihanna";}

}