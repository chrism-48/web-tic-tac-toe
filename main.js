

//-functions to place letters on gameboard in beginning animation

function useX()
{
    document.getElementById('div1').innerText = 'X';
} 
function useO()
{
    document.getElementById('div2').innerText = 'O';
} 
function useX2()
{
    document.getElementById('div3').innerText = 'O';
} 
function useO2()
{
    document.getElementById('div4').innerText = 'O';
}
function useX3()
{
    document.getElementById('div5').innerText = 'X';
} 
function useO3()
{
    document.getElementById('div6').innerText = 'X';
} 
function useX4()
{
    document.getElementById('div7').innerText = 'X';
} 
function useO4()
{
    document.getElementById('div8').innerText = 'O';
}
function useX5()
{
    document.getElementById('div9').innerText = 'O';
} 


function colorDiff() {
    document.getElementById('reset').style.backgroundColor = "red"
}

function colorDiff2() {
    document.getElementById('reset').style.backgroundColor = "lightblue"
}

function colorDiff3() {
    document.getElementById('reset').style.backgroundColor = "yellow"
}


function colorDiff4() {
    document.getElementById('reset').style.backgroundColor = "white"
}

function colorFg() {
    document.getElementById('name').style.color = "yellow"
}

function colorFg2() {
    document.getElementById('name').style.color = "black"
}



// initialize variables

t = document.getElementById('reset')
var winner = false
var player
numCheck = 0

// a little animation before the game begins
setTimeout(colorFg,100); 
setTimeout(useX,100);  
setTimeout(useO,300);
setTimeout(useX2,600);
setTimeout(colorFg2,600);
setTimeout(useO2,900);
setTimeout(useX3,1200);
setTimeout(useO3,1500);
setTimeout(colorFg,1500);
setTimeout(useX4,1800);
setTimeout(useO4,2100);
setTimeout(useX5,2400);
setTimeout(colorDiff4,2400);
setTimeout(colorFg2,2400);
setTimeout(colorDiff,3100);
setTimeout(colorDiff4,3600);
setTimeout(colorDiff,4100);
setTimeout(colorDiff4,4600);
setTimeout(colorDiff,5100);
setTimeout(colorDiff4,5600);




// initialize more variables
var x 
var y = document.getElementById("container")
var z = document.getElementById("name")

var a = document.getElementById("div1")
var b = document.getElementById("div2") 
var c = document.getElementById("div3") 
var d = document.getElementById("div4") 
var e = document.getElementById("div5") 
var f = document.getElementById("div6") 
var g = document.getElementById("div7") 
var h = document.getElementById("div8") 
var i = document.getElementById("div9") 

var j = document.getElementById("div1")
var k = document.getElementById("div2") 
var l = document.getElementById("div3") 
var m = document.getElementById("div4") 
var n = document.getElementById("div5") 
var o = document.getElementById("div6") 
var p = document.getElementById("div7") 
var q = document.getElementById("div8") 
var r = document.getElementById("div9") 

// --------------- X Functions to place X on gameboard
function placeX1() 
    {    
        
        document.getElementById("div1").innerText = "X";
        console.log("X1")
        setTimeout(checkWinner,200)
        console.log('playerXNow = '+ playerXNow)
        console.log('playerONow = '+ playerONow)
        playerXNow = 0
        playerONow = 0
        placeO()
    }  

function placeX2() 
    {    
        document.getElementById("div2").innerText = "X";
        console.log("X2")
        setTimeout(checkWinner,200)
        console.log('playerXNow = '+ playerXNow)
        console.log('playerONow = '+ playerONow)
        playerXNow = 0
        playerONow = 0
        placeO()
    }   

function placeX3() 
    {    
        
        document.getElementById("div3").innerText = "X";
        console.log("X3")
        setTimeout(checkWinner,200)
        console.log('playerXNow = '+ playerXNow)
        console.log('playerONow = '+ playerONow)
        playerXNow = 0
        playerONow = 0
        placeO()
    }  

function placeX4() 
    {    
        document.getElementById("div4").innerText = "X";
        console.log("X4")
        setTimeout(checkWinner,200)
        console.log('playerXNow = '+ playerXNow)
        console.log('playerONow = '+ playerONow)
        playerXNow = 0
        playerONow = 0
        placeO()
    }   

function placeX5() 
    {    
        
        document.getElementById("div5").innerText = "X";
        console.log("X5")
        setTimeout(checkWinner,200)
        console.log('playerXNow = '+ playerXNow)
        console.log('playerONow = '+ playerONow)
        playerXNow = 0
        playerONow = 0
        placeO()
    }  

function placeX6() 
    {    
        document.getElementById("div6").innerText = "X";
        console.log("X6")
        setTimeout(checkWinner,200)
        console.log('playerXNow = '+ playerXNow)
        console.log('playerONow = '+ playerONow)
        playerXNow = 0
        playerONow = 0
        placeO()
    }   

function placeX7() 
    {    
        
        document.getElementById("div7").innerText = "X";
        console.log("X7")
        setTimeout(checkWinner,200)
        console.log('playerXNow = '+ playerXNow)
        console.log('playerONow = '+ playerONow)
        playerXNow = 0
        playerONow = 0
        placeO()
    }  

function placeX8() 
    {    
        document.getElementById("div8").innerText = "X";
        console.log("X8")
        setTimeout(checkWinner,200)
        console.log('playerXNow = '+ playerXNow)
        console.log('playerONow = '+ playerONow)
        playerXNow = 0
        playerONow = 0
        placeO()
    }   

function placeX9() 
    {    
        
        document.getElementById("div9").innerText = "X";
        console.log("X9")
        setTimeout(checkWinner,200)
        console.log('playerXNow = '+ playerXNow)
        console.log('playerONow = '+ playerONow)
        playerXNow = 0
        playerONow = 0
        placeO()
    }  




// --------------- O Functions to place O on gameboard


function doNothing() {
    console.log("Nothing Happens")
}







function placeO1() 
    {    
        
        document.getElementById("div1").innerText = "O";
        console.log("O1")
        setTimeout(checkWinner,200)
        console.log('playerXNow = '+ playerXNow)
        console.log('playerONow = '+ playerONow)
        playerXNow = 0
        playerONow = 0
        placeX()
    }  

function placeO2() 
    {    
        document.getElementById("div2").innerText = "O";
        console.log("O2")
        setTimeout(checkWinner,200)
        console.log('playerXNow = '+ playerXNow)
        console.log('playerONow = '+ playerONow)
        playerXNow = 0
        playerONow = 0
        placeX()
    }   

function placeO3() 
    {    
        
        document.getElementById("div3").innerText = "O";
        console.log("O3")
        setTimeout(checkWinner,200)
        console.log('playerXNow = '+ playerXNow)
        console.log('playerONow = '+ playerONow)
        playerXNow = 0
        playerONow = 0
        placeX()
    }  

function placeO4() 
    {    
        document.getElementById("div4").innerText = "O";
        console.log("O4")
        setTimeout(checkWinner,200)
        console.log('playerXNow = '+ playerXNow)
        console.log('playerONow = '+ playerONow)
        playerXNow = 0
        playerONow = 0
        placeX()
    }   

function placeO5() 
    {    
        
        document.getElementById("div5").innerText = "O";
        console.log("O5")
        setTimeout(checkWinner,200)
        console.log('playerXNow = '+ playerXNow)
        console.log('playerONow = '+ playerONow)
        playerXNow = 0
        playerONow = 0
        placeX()
    }  

function placeO6() 
    {    
        document.getElementById("div6").innerText = "O";
        console.log("O6")
        setTimeout(checkWinner,200)
        console.log('playerXNow = '+ playerXNow)
        console.log('playerONow = '+ playerONow)
        playerXNow = 0
        playerONow = 0
        placeX()
    }   

function placeO7() 
    {    
        
        document.getElementById("div7").innerText = "O";
        console.log("O7")
        setTimeout(checkWinner,200)
        console.log('playerXNow = '+ playerXNow)
        console.log('playerONow = '+ playerONow)
        playerXNow = 0
        playerONow = 0
        placeX()
    }  

function placeO8() 
    {    
        document.getElementById("div8").innerText = "O";
        console.log("O8")
        setTimeout(checkWinner,200)
        console.log('playerXNow = '+ playerXNow)
        console.log('playerONow = '+ playerONow)
        playerXNow = 0
        playerONow = 0
        placeX()
    }   

function placeO9() 
    {    
        
        document.getElementById("div9").innerText = "O";
        console.log("O9")
        setTimeout(checkWinner,200)
        console.log('playerXNow = '+ playerXNow)
        console.log('playerONow = '+ playerONow)
        playerXNow = 0
        playerONow = 0
        placeX()
    }  



// initialize more variables
var playerXNow = 0
var playerONow = 0

left = document.getElementById("playerX")
right = document.getElementById("playerO")
// adding and removing EventListeners

function placeX()
{
    
    console.log('X is pushed');
    playerXNow = 1
    document.getElementById('playerO').innerText = '';
    document.getElementById('playerX').innerText = '';
    document.getElementById('reset').innerText = 'Player X';

    left.addEventListener('click',doNothing);
    right.addEventListener('click',doNothing);

    j.removeEventListener('click',placeO1);
    k.removeEventListener('click',placeO2);
    l.removeEventListener('click',placeO3);
    m.removeEventListener('click',placeO4);
    n.removeEventListener('click',placeO5);
    o.removeEventListener('click',placeO6);
    p.removeEventListener('click',placeO7);
    q.removeEventListener('click',placeO8);
    r.removeEventListener('click',placeO9);
    
    a.addEventListener('click',placeX1);
    b.addEventListener('click',placeX2);
    c.addEventListener('click',placeX3);
    d.addEventListener('click',placeX4);
    e.addEventListener('click',placeX5);
    f.addEventListener('click',placeX6);
    g.addEventListener('click',placeX7);
    h.addEventListener('click',placeX8);
    i.addEventListener('click',placeX9);
                       
}

function placeO()
{
    console.log('O is pushed');
    playerONow = 1
    document.getElementById('playerO').innerText = '';
    document.getElementById('playerX').innerText = '';
    document.getElementById('reset').innerText = 'Player O';

    left.addEventListener('click',doNothing);
    right.addEventListener('click',doNothing);

    a.removeEventListener('click',placeX1);
    b.removeEventListener('click',placeX2);
    c.removeEventListener('click',placeX3);
    d.removeEventListener('click',placeX4);
    e.removeEventListener('click',placeX5);
    f.removeEventListener('click',placeX6);
    g.removeEventListener('click',placeX7);
    h.removeEventListener('click',placeX8);
    i.removeEventListener('click',placeX9);
    
    j.addEventListener('click',placeO1);
    k.addEventListener('click',placeO2);
    l.addEventListener('click',placeO3);
    m.addEventListener('click',placeO4);
    n.addEventListener('click',placeO5);
    o.addEventListener('click',placeO6);
    p.addEventListener('click',placeO7);
    q.addEventListener('click',placeO8);
    r.addEventListener('click',placeO9);
       
}

// clear out gameboard to play or play again

function clr() 
{    
    numCheck = 0
    winner = false
    console.log('numCheck = '+numCheck)
    document.getElementById("reset").innerText = "Choose who goes first. ";
    document.getElementById("playerO").innerText = "Player O ";
    document.getElementById("playerX").innerText = "Player X ";
    document.getElementById('name').innerHTML = 'TicTacToe'; 
    document.getElementById("name").style.backgroundColor='rgb(1, 175, 255)';
    document.getElementById("playerO").style.backgroundColor='red';
    document.getElementById("playerX").style.backgroundColor='red';
    document.getElementById("reset").style.backgroundColor='white';
    document.getElementById("div1").innerText = "";
    document.getElementById("div2").innerText = "";
    document.getElementById("div3").innerText = "";
    document.getElementById("div4").innerText = "";
    document.getElementById("div5").innerText = "";
    document.getElementById("div6").innerText = "";
    document.getElementById("div7").innerText = "";
    document.getElementById("div8").innerText = "";
    document.getElementById("div9").innerText = "";
    
} 


// check for game winner or tie

function checkWinner() 
{
    //-------Check for X win
    numCheck ++
    if (div1.innerText === 'X' && div2.innerText === 'X' && div3.innerText === 'X') {
        document.getElementById('reset').innerText = 'X  WINS --- press here to play again'
        winner = true
        player = 'X'
        
        setTimeout(killDivs,200)
    }    
    if (div4.innerText === 'X' && div5.innerText === 'X' && div6.innerText === 'X') {        
        winner = true
        player = 'X'
        
        document.getElementById('reset').innerText = 'X  WINS --- press here to play again'
        setTimeout(killDivs,200)
        
    }
    if (div7.innerText === 'X' && div8.innerText === 'X' && div9.innerText === 'X') {        
        winner = true
        player = 'X'
        
        document.getElementById('reset').innerText = 'X  WINS --- press here to play again'
        setTimeout(killDivs,200)
        
    }
    if (div1.innerText === 'X' && div4.innerText === 'X' && div7.innerText === 'X') {
        winner = true
        player = 'X'
        
        document.getElementById('reset').innerText = 'X  WINS --- press here to play again'
        setTimeout(killDivs,200)
        
    }    
    if (div2.innerText === 'X' && div5.innerText === 'X' && div8.innerText === 'X') {
        winner = true
        player = 'X'
        
        document.getElementById('reset').innerText = 'X  WINS --- press here to play again'
        setTimeout(killDivs,200)
        
    }
    if (div3.innerText === 'X' && div6.innerText === 'X' && div9.innerText === 'X') {
        winner = true
        player = 'X'
        
        document.getElementById('reset').innerText = 'X  WINS --- press here to play again'
        setTimeout(killDivs,200)
        
    }
    if (div1.innerText === 'X' && div5.innerText === 'X' && div9.innerText === 'X') {
        winner = true
        player = 'X'
        
        document.getElementById('reset').innerText = 'X  WINS --- press here to play again'
        setTimeout(killDivs,200)
        
    }
    if (div7.innerText === 'X' && div5.innerText === 'X' && div3.innerText === 'X') {
        winner = true
        player = 'X'
        
        document.getElementById('reset').innerText = 'X  WINS --- press here to play again'
        setTimeout(killDivs,200)
        
    }
    //-------Check for O win

    if (div1.innerText === 'O' && div2.innerText === 'O' && div3.innerText === 'O') {
        winner = true
        player = 'O'
        
        document.getElementById('reset').innerText = 'O  WINS --- press here to play again'
        setTimeout(killDivs,200)
        
    }    
    if (div4.innerText === 'O' && div5.innerText === 'O' && div6.innerText === 'O') {
        winner = true
        player = 'O'
        
        document.getElementById('reset').innerText = 'O  WINS --- press here to play again'
        setTimeout(killDivs,200)
        
    }
    if (div7.innerText === 'O' && div8.innerText === 'O' && div9.innerText === 'O') {
        winner = true
        player = 'O'
        
        document.getElementById('reset').innerText = 'O  WINS --- press here to play again'
        setTimeout(killDivs,200)
        
    }
    if (div1.innerText === 'O' && div4.innerText === 'O' && div7.innerText === 'O') {
        winner = true
        player = 'O'
        
        document.getElementById('reset').innerText = 'O  WINS --- press here to play again'
        setTimeout(killDivs,200)
        
    }    
    if (div2.innerText === 'O' && div5.innerText === 'O' && div8.innerText === 'O') {
        winner = true
        player = 'O'
        
        document.getElementById('reset').innerText = 'O  WINS --- press here to play again'
        setTimeout(killDivs,200)
        
    }
    if (div3.innerText === 'O' && div6.innerText === 'O' && div9.innerText === 'O') {
        winner = true
        player = 'O'
        
        document.getElementById('reset').innerText = 'O  WINS --- press here to play again'
        setTimeout(killDivs,200)
        
    }
    if (div1.innerText === 'O' && div5.innerText === 'O' && div9.innerText === 'O') {
        winner = true
        player = 'O'
        
        document.getElementById('reset').innerText = 'O  WINS --- press here to play again'
        setTimeout(killDivs,200)
        
    }
    if (div7.innerText === 'O' && div5.innerText === 'O' && div3.innerText === 'O') {
        winner = true
        player = 'O'
        
        document.getElementById('reset').innerText = 'O  WINS --- press here to play again'
        setTimeout(killDivs,200)
        
    }
    if (numCheck > 8 && winner === false) {
        console.log("It is a Tie")
        document.getElementById('reset').innerHTML = 'Press here to play again';
        document.getElementById('name').innerHTML = 'Its a Tie';
        document.getElementById('playerO').innerHTML = 'TIE'; 
        document.getElementById('playerX').innerHTML = "TIE";
        document.getElementById("playerO").style.backgroundColor='yellow';
        document.getElementById("playerX").style.backgroundColor='yellow'; 
        document.getElementById("reset").style.backgroundColor='yellow';
        document.getElementById("name").style.backgroundColor='yellow';
    }
    console.log('numCheck = '+numCheck)
}

// functions to change colors and innerText of Divs upon winning game
function killDivs() 
{
    console.log(winner);
    if (winner === true && player === 'X'){
        document.getElementById('playerX').innerHTML = 'X WINS';
        document.getElementById('playerO').innerHTML = ''; 
        document.getElementById('name').innerHTML = 'Winner X';              
        mOverY();
    }
    if (winner === true && player === 'O'){
        document.getElementById('playerX').innerHTML = '';
        document.getElementById('playerO').innerHTML = 'O WINS'; 
        document.getElementById('name').innerHTML = 'Winner O';       
        mOverY();
    }
    
}


function mOverY(){
    document.getElementById("name").style.backgroundColor='yellow';
    document.getElementById("reset").style.backgroundColor='yellow';
    if (player === 'X')
    document.getElementById("playerX").style.backgroundColor='yellow';
    if (player === 'O')
    document.getElementById("playerO").style.backgroundColor='yellow';
}




