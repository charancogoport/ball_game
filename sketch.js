
var ball_x,ball_y,ball_dx,ball_dy;
var ball_diameter;
ball_diameter=30;
var paddle_x,paddle_y,paddle_width,paddle_height;
var padddle_dx,paddle_dy;
paddle_dx=2;
paddle_width=90;
paddle_height=20;
paddle_x=(400-paddle_width)/2;
paddle_y=400-paddle_height;

function setup() {
  createCanvas(400, 400);
  fill("white");
  background("black");
  ball_x=width/2;
  ball_y=height/2;
  ball_dx=3;
  ball_dy=4;
  // rect(50,50,100,100);
}

function draw(){
  background("black");
  circle(ball_x,ball_y,ball_diameter);
  rect(paddle_x,paddle_y,paddle_width,paddle_height);
  // rect(0,20,90,20);
//   creating blocks
  for(var x=40;x<360;x+=50){ 
    for(var y=20;y<200;y+=50){
      rect(x,y,30,20);
    }
  }
  // // if ball hits the paddle it should bounce back
  // if(ball_x=width-paddle_height && (paddle_x+paddle_width)<ball_x<paddle_x){
  //   if ((paddle_y-paddle_height)<ball_y<paddle_y){
  //     ball_dx=-ball_dx;
  //     ball_dy=-ball_dy;
  //   // }
  // // }
  ball_x +=ball_dx;
  ball_y +=ball_dy;
  if(ball_x + (ball_diameter/2)>=width || ball_x - (ball_diameter/2)<=0){
    ball_dx= -ball_dx;
    
  }
  if(ball_y + (ball_diameter/2)>height || ball_y -(ball_diameter/2)<=0){
    ball_dy= -ball_dy;
  }
  if(ball_y +(ball_diameter/2)>400){
    ball_x=height/2;
    ball_y=width/2;
  }
  if (keyIsDown(LEFT_ARROW)){
    if(paddle_x<0){
      paddle_x=0;
      console.log("can't move left more");
    }
    else{
    paddle_x = paddle_x - 5;
  }
  }
  if (keyIsDown(RIGHT_ARROW)){
    if((paddle_x+paddle_width)>width){
      paddle_x=400-paddle_width;
      console.log("can't move right more");
    }
    else{
    paddle_x = paddle_x + 5;
  }
  }
}