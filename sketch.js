let x=100;
let=ellipsesize=60;
let speed =-2;
let hand= 200;
let handspeed =+1.5;
let righthand = 400;
let righthandspeed =+1.5;
let nose= 240;
let nosemove= -.5;


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(92, 86, 156);
  
  //City
  fill(193, 198, 247);
  rect(240,300,180,300);
  fill(80, 189, 212);
  rect(150,200,90,400);
  fill(89, 156, 144);
  rect(100,300,80,180);
  rect(400,250,60,200);
  rect(300,300,60,150)

  
  //bush right
  ellipse (50,440,60,60);
  ellipse (20,450,60,60);
  ellipse (80,450,60,60);
  
  //bush left
  ellipse (530,440,60,60);
  ellipse (500,450,60,60);
  ellipse (560,450,60,60);
  ellipse (480,460,60,60);
  ellipse (580,460,60,60);
  
  //ground
  fill(27, 135, 56);
  strokeWeight(0);
  rect(0,450,600,200);
  
  //front bushes left
  fill(44, 148, 72)
  ellipse(50,480,100,100);
  ellipse (90,500,120,120);
  ellipse (130,550,100,100);
  ellipse (40,550,150,150);
  
  //front busges right
  ellipse (500,480,100,100);
  ellipse (550,500,130,130);
  ellipse (460,540,140,140);
  ellipse (580,580,150,150);

  //body
  fill(245, 184, 241);
  strokeWeight(3.5);
  stroke(177,47,144);
  ellipse(300,275,170,200);
  
  //ears left
  fill(240, 177, 96);
  line(260,185,230,140);
  ellipse(220,120,40,40);
  
  //ear right
  fill(240, 177, 96);
  line(340,185,380,130);
  ellipse(385,120,40,40);
  
  //mouth
  line(270,270,330,270);
   
  //nose
  fill(240, 177, 96);
  ellipse(300,nose,40,80);
  
  nose=nose-nosemove
  
  if (nose >= 250) {
    nosemove= -nosemove
  }
  
  if (nose <= 239) {
    nosemove= -nosemove
  }
  
  
  //left eye
  fill(600);
  ellipse(230,240,60,60);
  fill(0);
  stroke(0)
  rect(210,230,30,10);
  
  //righteye
  fill(600);
  stroke(177,47,144);
  ellipse(380,240,60,60);
  fill(0);
  stroke(0);
  rect(365,230,30,10);
  
  //left hand
  stroke(177,47,144);
  fill(245, 184, 241);
  ellipse(hand,360,60,60);
  
  //hand movement
  hand= hand-handspeed
  
  if(hand <= 200)
    { 
    handspeed= -handspeed
    }
  
  if (hand >= 180)
    {
     handspeed= -handspeed; 
    }
  
  //right hand
  ellipse(righthand,360,60,60);
  
  //hand movement
  righthand= righthand-righthandspeed
  
  if (righthand >=400)
    {
      righthandspeed= -righthandspeed;
    }
  if(righthand <= 420)
    {
      righthandspeed = -righthandspeed
    }
  
  //left leg
  line(270,450,270,370);
  rect(220,450,60,20);
  
  //right leg
  line(330,450,330,370);
  rect(320,450,60,20);
  
  //left legwarmers
  fill(600);
  strokeWeight(2);
  ellipse(270,435,50,40);
  ellipse(270,420,50,40);
  
  //right legwarmer
  ellipse(330,435,50,40);
  ellipse(330,420,50,40);
  
  //right earring
  push();
  translate(200,140);
  rotate(radians(45));
  rect(0,0,20,20);
  pop();
  
  //left earing
  push();
  translate(400,140);
  rotate(radians(45));
  rect(0,0,20,20);
  pop();
  
  //sun
  fill(250);
  strokeWeight(0);
  ellipse(100,x,ellipsesize);
  
    x = x + speed;
 
 // console.log(x);
  
  //if statement for reverse
    if(x<=-0)
      {
        speed= -speed;
      }
  if(x >= 150)
    {
      speed= -speed
    }
  
  
}