let cars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i=0; i<100; i++){
      cars.push(new Car());
  }

}

function draw() {
  background(255, 212, 246);

  for (let i=0; i<cars.length; i++){
    cars[i].display();
    cars[i].move();
  }

}

class Car {
  // The class's constructor and attributes
  constructor() {
    this.pos = createVector(random(width),random(height));
    this.vel = createVector(0, random(-2,-10));
    this.r = random(0,255);
    this.b = random(0,255);
    this.g = random(0,255);
    this.o = random(0,255);
    this.w = random(0,100);
    this.h = random(0,100);
    this.size = random (48, 128);

  }

  // methods - these get called with a dot after the variable

  display() {
    fill (this.r, this.b, this.g, this.o);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.w, this.w);
  }
  
  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x=0;
    if (this.pos.x < 0) this.pos.x=width;
    if (this.pos.y > height) this.pos.y=0;
    if (this.pos.y < 0) this.pos.y=height;
    }
  }