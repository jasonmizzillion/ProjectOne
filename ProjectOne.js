

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  noLoop();
}

function draw() {
  moon(width*0.1, height/5, 1, 10, 5);
  moon(width*0.25, height/5, 1, 10, 5);
  moon(width*0.40, height/5, 1, 10, 5);
  moon(width*0.55, height/5, 1, 10, 5);
  moon(width*0.69, height/5, 1, 10, 5);
  moon(width*0.84, height/5, 1, 10, 5);
  moon(width*0.10, height/2.5, 1, 10, 5);
  moon(width*0.26, height/2.5, 1, 10, 5);
  moon(width*0.44, height/2.5, 1, 10, 5);
  moon(width*0.62, height/2.5, 1, 10, 5);
  moon(width*0.81, height/2.5, 1, 10, 5);
  moon(width*0.19, height/1.75, 1, 10, 5);
  moon(width*0.37, height/1.75, 1, 10, 5);
  moon(width*0.54, height/1.75, 1, 10, 5);
  moon(width*0.70, height/1.75, 1, 10, 5);
  moon(width*0.85, height/1.75, 1, 10, 5);
  moon(width*0.14, height/1.3, 1, 10, 5);
  moon(width*0.27, height/1.3, 1, 10, 5);
  moon(width*0.39, height/1.3, 1, 10, 5);
  moon(width*0.50, height/1.3, 1, 10, 5);

  moon2(width*0.11, height/5, 1, 10, 5);
  moon2(width*0.27, height/5, 1, 10, 5);
  moon2(width*0.43, height/5, 1, 10, 5);
  moon2(width*0.59, height/5, 1, 10, 5);
  moon2(width*0.74, height/5, 1, 10, 5);
  moon2(width*0.89, height/5, 1, 10, 5);
  moon2(width*0.16, height/2.5, 1, 10, 5);
  moon2(width*0.33, height/2.5, 1, 10, 5);
  moon2(width*0.52, height/2.5, 1, 10, 5);
  moon2(width*0.71, height/2.5, 1, 10, 5);
  moon2(width*0.1, height/1.75, 1, 10, 5);
  moon2(width*0.29, height/1.75, 1, 10, 5);
  moon2(width*0.47, height/1.75, 1, 10, 5);
  moon2(width*0.64, height/1.75, 1, 10, 5);
  moon2(width*0.80, height/1.75, 1, 10, 5);
  moon2(width*0.1, height/1.3, 1, 10, 5);
  moon2(width*0.24, height/1.3, 1, 10, 5);
  moon2(width*0.37, height/1.3, 1, 10, 5);
  moon2(width*0.49, height/1.3, 1, 10, 5);
}



function moon(x, y, radiusMult, rings, moonPhase) {


  let size = (width / 10)*radiusMult

  let steps = size / rings;

  let grayvalues = 255;
  
  for (i = 0; i < 8; i++) {
    fill(i*grayvalues);
    ellipse(x, y, size - i*steps, size - i*steps);
    fill(i*grayvalues);
    ellipse(x, y, size - i*steps, size - i*steps);
  }
}

function moon2(x, y, radiusMult, rings) {

  let size = (width / 10)*radiusMult

  let steps = size / rings;

  let grayvalues = 0;
  
  for (i = 0; i < 8; i++) {
    fill(i*grayvalues);
    ellipse(x, y, size - i*steps, size - i*steps);
  }
}