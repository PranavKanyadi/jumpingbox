var canvas;
var music;
var surfacearea1;
var surfacearea2;
var surfacearea3;
var surfacearea4;
var ball;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
surfacearea1=createSprite(10,590,200,40);
surfacearea1.shapeColor="purple";
surfacearea2=createSprite(210,590,200,40);
surfacearea2.shapeColor="green";
surfacearea3=createSprite(410,590,200,40);
surfacearea3.shapeColor="red";
surfacearea4=createSprite(610,590,200,40);
surfacearea4.shapeColor="blue";
ball=createSprite(200,200,40,40);
ball.shapeColor="white";
ball.velocityX=-3;
ball.velocityY=5;
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    if(surfacearea1.isTouching(ball)){
        ball.shapeColor="purple"
    }
    if(surfacearea2.isTouching(ball)){
        ball.shapeColor="green"
    }
    if(surfacearea3.isTouching(ball)){
        ball.shapeColor="red"
        ball.velocityX=0;
        ball.velocityY=0;
    } 
    if(surfacearea4.isTouching(ball)){
            ball.shapeColor="blue"  
    }    
    //create edgeSprite
drawSprites();


    //add condition to check if box touching surface and make it box
}
