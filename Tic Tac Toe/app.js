const boxes = document.querySelectorAll('.box');
const statustxt = document.querySelector('#status');
const btn_restart = document.querySelector('#restart');

let x = "<i class='fa-solid fa-x'>";
let o = "<i class='fa-solid fa-o'>";

const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let options = ["","","","","","","","",""];

let current_player = x;

let player = "X";

let running = false;



init();




function init()
{
    boxes.forEach(box=>box.addEventListener('click',box_click));
    btn_restart.addEventListener('click',reset_game);
    statustxt.textContent = `${player} Your turn`;
    running = true;
    
}

function box_click()
{
    let index = (this.dataset.index)
    if((options[index] != "") || (!running))
    {
        return;
    }
    update_box(this,index);
    check_winner();
}

function update_box(box,index)
{
    options[index] = player;
    box.innerHTML = current_player;
console.log(options);

}

function change_player()
{
    player = (player=="X")?"O":"X";
    statustxt.textContent = `${player} Your turn`;
    current_player = (current_player==x)?o:x;

}


function check_winner()
{
    let is_won = false;
    for(let i=0;i<win.length;i++)
    {
        const condition = win[i];
        const box1 = options[condition[0]]
        const box2 = options[condition[1]]
        const box3 = options[condition[2]]

        if(box1=="" || box2=="" || box3=="")
        {
            continue;
        }


        if(box1==box2 && box2==box3)
        {
            is_won = true;
            boxes[condition[0]].classList.add('win')
            boxes[condition[1]].classList.add('win')
            boxes[condition[2]].classList.add('win')

        }
    }

    if(is_won)
    {
        statustxt.textContent = `${player}  Won..`
        running = false;
    }
    else if (!options.includes("")) {
        statustxt.textContent = `Game Drawn..`
        running = false;
    }
    else
    {
        change_player();
    }
}


function reset_game()
{
     options = ["","","","","","","","",""];

     current_player = x;

     player = "x";

     running = true;

    statustxt.textContent = `${player} Your turn`;

    boxes.forEach(box=>{
        box.innerHTML = " "
        box.classList.remove('win')
    })
}