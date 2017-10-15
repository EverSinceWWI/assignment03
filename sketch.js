var a = 0;
var b = -180;
var a_stopper = false;
var toggle = false;
var x_inc = 300;
var y_inc = 150;
var r_inc = 1;
var colorGTAT = ['#603B8F', '#E9D156', '#DD4429', '#901A4D'] //[bordeaux,orange,yellow,purple]
var dist_count = 0;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  noFill();
  strokeCap(SQUARE);
  strokeWeight(20);
  frameRate(30);
}

function draw() {
  background(245);
  textAlign(CENTER);
  push();
  noStroke();
  fill(15);
  scale(1.1);
  text("the more you click, the more distorted it gets", 227, 440);
  pop();
  if (a_stopper === false) {
    a += 1.5;
    b += 1.5;
  }

  if (a == 180) {
    a_stopper = true;
  }
  push();

  scale(0.37); //master scale
  translate(165, 715); //master translate
  for (var y = 0; y <= y_inc * 7; y += y_inc) {

    translate(0, y);

    push();
    for (var d = 0; d <= 2; d++) {

      translate(-64, 0);
      scale(1, -1);

      for (var r = 0; r < r_inc * 4; r += r_inc) {

        stroke(colorGTAT[r]);
        translate(16, 0);

        for (var x = 0; x < x_inc * 4; x += x_inc) {

          if (dist_count===1) {
            if (x === 0) {
              stroke(random() * 100 + 120, random() * 100 + 120, random() * 100 + 120,45);
              translate(random(),random());
            }
          }
          if (dist_count===2) {
            if (x === 0) {
              stroke(random() * 100 + 150, random() * 100 + 150, random() * 100 + 150,30);
              translate(random(),random()*10);
            }
          }
          if (dist_count===3) {
            if (x === 0) {
              stroke(random() * 100 + 150, random() * 100 + 170, random() * 100 + 170,15);
              translate(random()*2,random()*20);
            }
          }

          arc(x, 0, 150, 150, 0, a);
          arc(150 + x, 0, 150, 150, 180, b);

        }
      }
    }
  }

  pop();
  //DEBUGGING
  //console.log("a: " + a);
  //console.log("b: " + b);
  //console.log("d: " + d);
  //console.log("r: " + r);
  //console.log("x: " + x);
  //console.log("y: " + y);
  //console.log("dist_count: "+dist_count)
}
function mousePressed() {
  dist_count++
  if(dist_count==4) {dist_count=0}
}