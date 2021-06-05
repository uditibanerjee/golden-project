var c11=0;
var c12=0;
var c13=0;
var c21=0;
var c22=0;
var c23=0;
var c31=0;
var c32=0;
var c33=0;
var bg;
var circle;
var cross;
var s11,s12,s13;
var s21,s22,s23;
var s31,s32,s33;
var turn=1;

function preload(){
  bgImage=loadImage("tic tac toe bg.png");
  circle=loadImage("Circle.png");
  cross=loadImage("cross.png");
}

function setup(){
 createCanvas(400,400);
 var s11=createSprite(67,67,50,50);
 var s12=createSprite(200,67,50,50);
 var s13=createSprite(333,67,50,50);

 var s21=createSprite(67,185,50,50);
 var s22=createSprite(200,185,50,50);
 var s23=createSprite(333,185,50,50);

 var s31=createSprite(67,310,50,50);
 var s32=createSprite(200,310,50,50);
 var s33=createSprite(333,310,50,50);
}

function draw(){
  background(bgImage);
  
  if(turn===1){
    text("X turn",180,10)
  }

  if(turn===2){
    text("O turn",180,10)
  }
  
  if(turn===1 && mousePressedOver(s11) && c11===0){
    s11.addAnimation(cross);
    turn=2;
    c11=1;
  }

  if(turn===1 && mousePressedOver(s12) && c12===0){
    s12.addAnimation(cross);
    turn=2;
    c12=1;
  }

  if(turn===1 && mousePressedOver(s13) && c13===0){
    s13.addAnimation(cross);
    turn=2;
    c13=1;
  }

  if(turn===1 && mousePressedOver(s21) && c21===0){
    s21.addAnimation(cross);
    turn=2;
    c21=1;
  }

  if(turn===1 && mousePressedOver(s22) && c22===0){
    s22.addAnimation(cross);
    turn=2;
    c22=1;
  }

  if(turn===1 && mousePressedOver(s23) && c23===0){
    s23.addAnimation(cross);
    turn=2;
    c23=1;
  }

  if(turn===1 && mousePressedOver(s31) && c31===0){
    s31.addAnimation(cross);
    turn=2;
    c31=1;
  }

  if(turn===1 && mousePressedOver(s32) && c32===0){
    s32.addAnimation(cross);
    turn=2;
    c32=1;
  }

  if(turn===1 && mousePressedOver(s33) && c33===0){
    s33.addAnimation(cross);
    turn=2;
    c33=1;
  }

  if(turn===2 && mousePressedOver(s11) && c11===0){
    s11.addAnimation(circle);
    turn=1;
    c11=2;
  }

  if(turn===2 && mousePressedOver(s12) && c12===0){
    s12.addAnimation(circle);
    turn=1;
    c12=2;
  }

  if(turn===2 && mousePressedOver(s13) && c13===0){
    s13.addAnimation(circle);
    turn=1;
    c13=2;
  }

  if(turn===2 && mousePressedOver(s21) && c21===0){
    s21.addAnimation(circle);
    turn=1;
    c21=2;
  }

  if(turn===2 && mousePressedOver(s22) && c22===0){
    s22.addAnimation(circle);
    turn=1;
    c22=2;
  }

  if(turn===2 && mousePressedOver(s23) && c23===0){
    s23.addAnimation(circle);
    turn=1;
    c23=2;
  }

  if(turn===2 && mousePressedOver(s31) && c31===0){
    s31.addAnimation(circle);
    turn=1;
    c31=2;
  }

  if(turn===2 && mousePressedOver(s32) && c32===0){
    s32.addAnimation(circle);
    turn=1;
    c32=2;
  }

  if(turn===2 && mousePressedOver(s33) && c33===0){
    s33.addAnimation(circle);
    turn=1;
    c33=2;
  }


  
  drawSprites();

}
