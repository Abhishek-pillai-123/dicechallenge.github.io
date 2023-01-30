var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage= "dice"+randomNumber1+".png";
var randomImageSource="images/"+randomDiceImage;
document.querySelectorAll(".fish")[0].setAttribute("src",randomImageSource);
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice"+randomNumber2+".png";
var randomIMageSource2="images/"+randomDiceImage2;
document.querySelectorAll(".fish")[1].setAttribute("src",randomIMageSource2);
var name1=prompt("What is Player1 name?");
var name2=prompt("What is Player2 name?");
var player1=randomNumber1;
var player2=randomNumber2;
if(player1>player2)
{
    document.querySelector("h1").innerHTML="🚩Player1 Wins!";
}else if(player2>player1)
{
    document.querySelector("h1").innerHTML="Player2 Wins!🚩";
}else{
    document.querySelector("h1").innerHTML="DRAW!";  
}
