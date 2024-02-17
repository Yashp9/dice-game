function myFunction() {
var dice_1 = Math.floor((Math.random())*6+1);
const random_img_1 = "dice"+dice_1+".png";
var dice_2 = Math.floor((Math.random())*6+1);
const random_img_2 = "dice"+dice_2+".png";
document.querySelector(".img1").setAttribute("src",random_img_1);
document.querySelector(".img2").setAttribute("src",random_img_2);
if(dice_1<dice_2)
{
    document.querySelector("#imgcartoon").setAttribute("src","Congratulations Happy Cartoon Man.gif");
    document.querySelector("h1").innerHTML="player two won!!";
}
if(dice_1>dice_2)
{
    document.querySelector("#imgcartoon").setAttribute("src","Congratulations Happy Cartoon Man.gif");
    document.querySelector("h1").innerHTML="player one won!!";
}
if(dice_1==dice_2)
{
    document.querySelector("#imgcartoon").setAttribute("src","pxfuel.jpg");
    document.querySelector("h1").innerHTML="draw";
}


}