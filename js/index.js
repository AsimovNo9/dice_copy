var path = "../imgs/";

var dice_throw1 = Math.floor(Math.random()*6);
var dice_throw2 = Math.floor(Math.random()*6);

var dice_1 = path +"dice"+dice_throw1+".png";
var dice_2 = path +"dice"+dice_throw2+".png";

document.firstElementChild.lastElementChild.querySelector("img.img1").setAttribute("src", dice_1);
document.firstElementChild.lastElementChild.querySelector("img.img2").setAttribute("src", dice_2);
