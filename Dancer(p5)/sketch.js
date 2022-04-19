let dancer;
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  dancer = new BearDancer(width / 2, height / 2);
}

function draw() {
  background(0);
  dancer.update();
  dancer.display();
}

class BearDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;

    this.xSpd = random(-5, 5);
    this.ySpd = random(-5, 5);
    this.r = 138;
    this.g = 86;
    this.b = 34;

    this.angleLlimb = 50;
    this.angleRlimb = 45;
  }
  update() {
    if (mouseIsPressed) {
      this.angleLimb = map(sin(frameCount * 0.05), -5, 5, -60, 0);
      this.angleRlimb = map(sin(frameCount * 0.3), -5, 5, -60, 40);
      this.angleGun = map(sin(frameCount * 0.3), -5, 5, -60, 40);
    }
    this.moving();
  }
  display() {
    push();
    translate(this.x, this.y);
    this.drawFace(-10, -10, 10);

    this.drawLEar(-40, 50, 20);
    this.drawREar(-10, 30, -30);

    this.drawBody(-10, 70, 10);

    this.drawRlimb(40, 60, 15, this.angleRlimb);
    this.drawLlimb(-80, 70, 15, this.angleLlimb);

    // use this function below
    // drawLimb(x, y, length, angle);
    this.rotFreq = random(0.05, 0.08);
    this.rotaAmp = random(0.15, 0.3);
    pop();
  }
  moving() {
    this.y = this.y + sin(frameCount * 0.4);
  }

  drawBody(x, y, angle) {
    push();
    translate(x, y);
    fill(this.r, this.g, this.b);
    noStroke();
    rectMode(CENTER);
    rect(0, 5, 100, 90, 60, 60);
    pop();
    //left feet
    push();
    translate(-40, 0);
    fill(this.r, this.g, this.b);
    ellipse(10, 120, 35, 20);
    pop();
    //right feet
    push();
    translate(5, 0);
    fill(this.r, this.g, this.b);
    ellipse(10, 120, 35, 20);
    pop();

    //decoration
    push();
    translate(x, y);
    fill("pink");
    circle(0, 30, 10);
    circle(0, 10, 10);
    circle(0, -10, 10);
    circle(0, -30, 10);
    pop();
  }
  drawRlimb(x, y, height, angle) {
    push();
    translate(x, y);
    rotate(radians(angle));
    fill(this.r, this.g, this.b);
    noStroke();
    rect(-20, -1, 70, 15, 50);

    pop();
  }
  drawLlimb(x, y, height, angle) {
    push();
    translate(x, y);
    rotate(radians(angle));
    fill(this.r, this.g, this.b);
    noStroke();
    rect(4, -50, height, 70, 50);
  }

  drawFace(x, y, angle) {
    push();
    translate(x, y);
    rotate(radians(angle));
    fill(this.r, this.g, this.b);
    noStroke();
    ellipseMode(CENTER);
    ellipse(0, 0, 85, 85);
    pop();
    //nose
    push();
    translate(-10, 0);
    fill(55, 13, 13);
    ellipse(0, 0, 15, 10);
    pop();
    //mouse
    push();
    translate(-23, 20);
    fill(255);
    rotate(radians(-85));
    curve(100, 5, 5, 26, 3, 0, 50, 20);
    pop();

    //left eye
    push();
    translate(-30, -10);
    fill(55, 13, 13);
    ellipse(0, 0, 9);
    pop();
    //right eye
    push();
    translate(10, -10);
    fill(55, 13, 13);
    ellipse(0, 0, 9);
    pop();
  }

  drawLEar(x, y, angle) {
    push();
    translate(x, y);
    rotate(radians(angle));
    fill(this.r, this.g, this.b);
    noStroke();
    circle(-40, -80, 30, 30);
    pop();

    push();
    translate(x, y);
    fill(55, 13, 13);
    noStroke();
    ellipse(-10, -90, 20, 10);
    pop();
  }
  drawREar(x, y, angle) {
    push();
    translate(x, y);
    rotate(radians(angle));
    fill(this.r, this.g, this.b);
    noStroke();
    circle(70, -40, 30, 30);
    pop();

    push();
    translate(x, y);
    fill(55, 13, 13);
    noStroke();
    ellipse(40, -70, 20, 10);
    pop();
  }
}
