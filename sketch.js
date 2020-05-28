var car,bg1,bg_img,car_img;

function preload(){
    bg_img=loadImage("track.jpg");
    car_img =loadImage("car.png");
}

function setup(){
canvas = createCanvas(400, 1100);
bg1=createSprite(190,550);
bg1.addImage("bg1", bg_img);
bg1.scale=1.5;

car = createSprite(190,1015,30,30);
car.addImage("car",car_img);
car.scale=0.1;

}

function draw(){
    background("grey");


    if(keyDown(UP_ARROW)){
        car.velocityY =-7
    }

    car.depth = bg1.depth;
    car.depth = car.depth +1;
    
    drawSprites();
}