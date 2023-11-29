const gameboard = document.getElementById('gameboard');
const context = gameboard.getContext('2d');

const WIDTH = gameboard.width;
const HEIGHT = gameboard.height;
const UNIT = 25;

let foodx;
let foody;

let snake = [{x:UNIT*3,y:0},
         {x:UNIT*2,y:0},
         {x:UNIT,y:0},
         {x:0,y:0}]

startgame();
function startgame()
{
    context.fillStyle = "#212121"
    context.fillRect(0,0,WIDTH,HEIGHT);    
    createfood();
    displayfood();
    drawsnake();
}

function createfood()
{
    foodx = Math.floor(Math.random()*WIDTH/UNIT)*UNIT;
    foody = Math.floor(Math.random()*HEIGHT/UNIT)*UNIT;  
}

function displayfood(){
    context.fillStyle = "red"
    context.fillRect(foodx,foody,UNIT,UNIT)
}


function drawsnake()
{
    context.fillStyle = "aqua"
    context.strokeStyle = "#212121"
    snake.forEach((snakepart)=>{
        context.fillRect(snakepart.x,snakepart.y,UNIT,UNIT)
        context.strokeRect(snakepart.x,snakepart.y,UNIT,UNIT)

    })
}