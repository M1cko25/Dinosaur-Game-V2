const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');
let w = canvas.getBoundingClientRect().width;
let h = canvas.getBoundingClientRect().height;
let CANVAS_WIDTH = canvas.width = w;
let CANVAS_HEIGHT = canvas.height = h;
let gameSpeed = 20;
let gameStart = false;
let collided = false;
let currScore = 0;
let isShow = false;
let isNight = false;

window.addEventListener('resize', ()=> {
    w = canvas.getBoundingClientRect().width;
    h = canvas.getBoundingClientRect().height;
    CANVAS_WIDTH = canvas.width = w;
    CANVAS_HEIGHT = canvas.height = h;
})

function collisionDetection() {
    const dinoRect = {
        left: dinoCanvas.getBoundingClientRect().left - canvas.getBoundingClientRect().left ,
        top: dinoCanvas.getBoundingClientRect().top - canvas.getBoundingClientRect().top ,
        right: dinoCanvas.getBoundingClientRect().right - canvas.getBoundingClientRect().left,
        bottom: dinoCanvas.getBoundingClientRect().bottom - canvas.getBoundingClientRect().top 
    };
    const cactusRect = {
        left: cactusX + 430, 
        top: CANVAS_HEIGHT - 160,
        right: cactusX + 490, 
        bottom: CANVAS_HEIGHT - 60
    };
    const cactusRect2 = {
        left: cactusX2 + 30 + (cactusRandInt * 100), 
        top: CANVAS_HEIGHT - 160,
        right: cactusX2 + 90  + (cactusRandInt * 100), 
        bottom: CANVAS_HEIGHT - 60
    };
    /*
     // uncomment this to see hitbox
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.strokeRect(dinoRect.left, dinoRect.top, dinoRect.right - dinoRect.left, dinoRect.bottom - dinoRect.top);
    ctx.strokeStyle = "blue";
    ctx.strokeRect(cactusRect.left, cactusRect.top, cactusRect.right - cactusRect.left, cactusRect.bottom - cactusRect.top);
    ctx.strokeStyle = "blue";
    ctx.strokeRect(cactusRect2.left, cactusRect2.top, cactusRect2.right - cactusRect2.left, cactusRect2.bottom - cactusRect2.top);
    */
    
    if (!(dinoRect.right < cactusRect.left ||
        dinoRect.left > cactusRect.right ||
        dinoRect.bottom < cactusRect.top ||
        dinoRect.top > cactusRect.bottom)) {
        gameOverActions();
    }
    else if (!(dinoRect.right < cactusRect2.left ||
        dinoRect.left > cactusRect2.right ||
        dinoRect.bottom < cactusRect2.top ||
        dinoRect.top > cactusRect2.bottom)) {
        gameOverActions();
    }
}

const restBtn = document.getElementById('restartBtn');
const diedSound = new Audio('./sounds/deathsound.mp3');
function gameOverActions() {
    collided = true;
    gameStart = false;
    dinoRunning = false;
    diedSound.play();
    gameOverTxt.style.visibility = 'visible';
    restBtn.style.visibility = 'visible';
    setHighScore(currScore);
    dinoCanvas.style.animationPlayState = 'paused';
    dinoDiedAnimation();
}

const scoreSound = new Audio('./sounds/score100Sound.mp3');
const score = document.getElementById('score');
const highScore = document.getElementById('HighScore');
const hiScoreTxt = document.getElementById('hiScore');
const gameOverTxt = document.getElementById('gameOver');
const container = document.querySelector('.container');
container.style.backgroundColor = "skyblue";
function scoreUpdate() {
    if (collided == false) {
        currScore++;
        if (currScore < 10) {
            score.textContent = "000" + currScore;
        }
        else if (currScore >= 10 && currScore < 100) {
            score.textContent = "00" + currScore;
        } else if (currScore >= 100 && currScore < 1000) {
            score.textContent = "0" + currScore;
        } else if (currScore >= 1000) {
            score.textContent = currScore;
        }
        if ((Math.floor(currScore / 500) % 2) != 0) {
            isNight = true;
            container.style.backgroundColor = 'rgb(19, 15, 77)';
            score.style.color = 'white';
            hiScoreTxt.style.color = 'white';
        } else {
            isNight = false;
            container.style.backgroundColor = "skyblue";
            score.style.color = 'black';
            hiScoreTxt.style.color = 'black';
        }
        if ((currScore % 100) == 0) {
            scoreSound.play();
        }
    }
}

let gameHighScore = 0;
let getHighScore = localStorage.getItem('curHighScore');
if (localStorage.getItem('curHighScore') == null) {
    localStorage.setItem('curHighScore', 0)
}
highScore.innerHTML = getHighScore;
function setHighScore(newScore) {
    if (newScore > gameHighScore && getHighScore < newScore) {
        gameHighScore = newScore;
        localStorage.setItem('curHighScore', gameHighScore)
        highScore.innerHTML = gameHighScore;
    } else {
        return gameHighScore;
        highScore.innerHTML = getHighScore;
    }
}

function restart() {
    location.reload();
}

let rand = Math.floor(Math.random() * 3) + 1;

setInterval(()=> {
    if (gameStart == false && collided == false) {
        ctx.drawImage(bgLayer1, x1, CANVAS_HEIGHT - 360);
        dinoCtx.drawImage(dino, 0, 0, dinoWidth, dinoHeight,0, 0, dinoWidth, dinoHeight);
    }
},10);

canvas.addEventListener('click', ()=> {
    if (gameStart == false && collided == false) {
        gameStart = true;
        collided = false;
        dinoJumping = false;
        dinoRunning = true;
        animateBg();
        dinoJump(); 
        setInterval(scoreUpdate, 100);
        setInterval(()=> {
            gameSpeed++;
        },10000);
    }
    else if (collided == false) {dinoJump();}
});
document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        if (gameStart == false && collided == false) {
            gameStart = true;
            collided = false;
            dinoJumping = false;
            dinoRunning = true;
            animateBg();
            dinoJump(); 
            setInterval(scoreUpdate, 100);
            setInterval(()=> {
                gameSpeed++;
            },10000);
        }
        else if (collided == false) {dinoJump();}
    }
});
restBtn.addEventListener('click', restart);
document.addEventListener('keydown', (e)=> {
    if (e.code === 'Space') {
        if (collided == true) {
            restart();
        }
    }
});

window.addEventListener('beforeunload', ()=> {
    if (localStorage.getItem('curHighScore') != gameHighScore && localStorage.getItem('curHighScore') != currScore && localStorage.getItem('curHighScore') > currScore) {
        localStorage.setItem('curHighScore', 0);
    }
})