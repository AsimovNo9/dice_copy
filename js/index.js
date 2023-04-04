var path = "../imgs/";

var dice_throw1 = Math.floor(Math.random()*6) +1;
var dice_throw2 = Math.floor(Math.random()*6) +1;

var dice_1 = path +"dice"+dice_throw1+".png";
var dice_2 = path +"dice"+dice_throw2+".png";

document.firstElementChild.lastElementChild.querySelector("img.img1").setAttribute("src", dice_1);
document.firstElementChild.lastElementChild.querySelector("img.img2").setAttribute("src", dice_2);

var winner = 0;

function playerwin(){
    if (dice_1>dice_2){
        document.firstElementChild.lastElementChild.querySelector("h1").innerHTML = "Player 1 Wins";
    }else if(dice_1<dice_2){
        document.firstElementChild.lastElementChild.querySelector("h1").innerHTML = "Player 2 Wins";
    }
    else{
        document.firstElementChild.lastElementChild.querySelector("h1").innerHTML = "It's a draw";
    }
}

function change_name(){
    document.firstElementChild.lastElementChild.querySelector("h1").innerHTML = "Refresh Me";
}

playerwin();

setTimeout(change_name, 5000)

