const gameboard =
displayfood(); document.getElementById('gameboard');
const context = gameboard.getContext('2d');

const WIDTH = gameboard.width;
const HEIGHT = gameboard.height;
const UNIT = 25;

let foodx;
let foody;

startgame();
function startgame()
{
    context.fillStyle = "#212121"
    context.fillRect(0,0,WIDTH,HEIGHT)
    createfood();
    displayfood();
}

function createfood()
{
    foodx =Math.floor(Math.random(WIDTH/UNIT)*HEIGHT);
    foody =Math.floor(Math.random(HEIGHT/UNIT)*WIDTH);  
    context.fillStyle = "red"
    context.fillRect(foodx,foody,UNIT,UNIT)
}