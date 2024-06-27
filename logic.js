window.addEventListener('load',bindEvents);
var countDownValue = 5;
var interval;
var flag = true;
var counter = 0; //Maintain counter it goes up every time button is clicked
var gameOver = false;
var winning_combinations = 
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function bindEvents(){   
        var buttons = document.getElementsByTagName('button');
        for (var i = 0; i < buttons.length; i++)
            {
                current = buttons[i];
                current.addEventListener('click', printXorZero);
            }
        // document.getElementById('reset').addEventListener('click', reset)
}

function printXorZero(){
    if(!gameOver){
        if(this.innerText.trim().length === 0)
            {var buttonValue = flag?"X":"O";
            this.innerText = buttonValue;
            flag = !flag;
            counter++;
        }
        if (counter > 4){
            isGameOver();
        }
    }
}

function isGameOver() {
    var b = document.getElementsByTagName('button');
    for (var i = 0; i < winning_combinations.length; i++) {
        var combo = winning_combinations[i];
        if (b[combo[0]].innerText && 
            b[combo[0]].innerText === b[combo[1]].innerText && 
            b[combo[1]].innerText === b[combo[2]].innerText) {
            gameOver = true;
            if (gameOver) {
                document.getElementById('winner').innerText = `The winner is ${b[combo[0]].innerText}`;
                resetAfter5();
                break;
            }
        }
    }
}


function reset(){
    clearInterval(interval);
    countDownvalue = 5;
    flag = true;
    counter = 0; //Maintain counter it goes up every time button is clicked
    gameOver = false;
    reset_but = document.getElementById('reset')
    document.getElementById('winner').innerText = "Game Reset."
    buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++)
        {
            current = buttons[i];
            if(current != reset_but){
                current.innerText = "";
            }
        }
}

function resetAfter5(){
    countDown();
    setTimeout(function(){
        reset();  
    }, 5000);
}

function countDown(){
    interval = setInterval(function(){
        countDownValue--;
        document.getElementById('cd').innerText = `Timer: ${countDownValue}`;
    },1000);
}