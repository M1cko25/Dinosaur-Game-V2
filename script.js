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

const dinoCanvas = document.getElementById('canvas2');
const dinoCtx = dinoCanvas.getContext('2d');
const DINO_WIDTH = dinoCanvas.width = 100;
const DINO_HEIGHT = dinoCanvas.height = 100;
let dinoWidth = 100;
let dinoHeight = 100;
let gameFrame = 0;
let staggerFrames;
let playerState = 'idle';

const bgLayer1 = new Image();
bgLayer1.src = './images/DesertPath.png';
const pyramid = new Image();
pyramid.src = './images/Pyramid.png';
const cloud1 = new Image();
cloud1.src = './images/cloud1.png';
const cloud2 = new Image();
cloud2.src = './images/cloud2.png';
const cloud3 = new Image();
cloud3.src = './images/cloud3.png';
const cloud4 = new Image();
cloud4.src = './images/cloud4.png';
const moon = new Image();
moon.src = './images/Moon.png';
const dino = new Image();
dino.src = './images/DinoSprite1.png';

const cactus1 = new Image();
cactus1.src = './images/Cactus1.png';
const cactus2 = new Image();
cactus2.src = './images/Cactus2.png';
cactus2.width = '203px';
const cactus3 = new Image();
cactus3.src = './images/Cactus3.png';
let cactusX = CANVAS_WIDTH + 3000;
let cactusX2 = CANVAS_WIDTH + 3000;
let cactusRand = Math.floor(Math.random() * 6) + 10;
let cactusRandInt = Math.floor(Math.random() * 2) + 12;
let cactusRandIndex = Math.floor(Math.random() * 3) ;
let dblCactRand = Math.round(Math.random() * 2) + 1;

let cloudHeight1 = Math.floor(Math.random() * 10);
let cloudHeight2 = Math.floor(Math.random() * 10);
let cloudHeight3 = Math.floor(Math.random() * 10);
let cloudHeight4 = Math.floor(Math.random() * 10);
let moonDist = Math.floor(Math.random() * 10) + 1;
let x1 = 0;
let x2 = CANVAS_WIDTH;
let x3 = CANVAS_WIDTH;
let x4 = CANVAS_WIDTH + (cloudHeight2 * 50);
let x5 = CANVAS_WIDTH + (cloudHeight3 * 70);
let x6 = CANVAS_WIDTH + (cloudHeight4 * 90); 
let x7 = CANVAS_WIDTH + (moonDist * 10);

const spriteAnimations = [];
const animationState = [
    {name:'idle',frames: 1},
    {name:'run',frames: 9},
    {name:'jump',frames: 13},
    {name:'died',frames: 6},
    {name:'crouch',frames: 3}
];
animationState.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for(let j = 0;j < state.frames; j++) {
        let positionX = j * dinoWidth;
        let positionY = index * dinoHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
})

let dinoJumping = false;
let dinoRunning = false;

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
        left: cactusX + 30, 
        top: CANVAS_HEIGHT - 160,
        right: cactusX + 90, 
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
    dinoDiedAnimation();
    dinoDiedAnimation();
    gameOverTxt.style.visibility = 'visible';
    restBtn.style.visibility = 'visible';
    setHighScore(currScore);
    dinoCanvas.style.animationPlayState = 'paused';
}

const scoreSound = new Audio('./sounds/score100Sound.mp3');
const score = document.getElementById('score');
const highScore = document.getElementById('HighScore');
const hiScoreTxt = document.getElementById('hiScore');
const gameOverTxt = document.getElementById('gameOver');
const container = document.querySelector('.container');
container.style.backgroundColor = "skyblue";
function scoreUpdate() {
    if (collided == false && gameStart == true) {
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
        // setInterval(()=> {
        //     if (gameStart == true && collided == false) {
        //         collisionDetection();
        //     }
        // }, 100)
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
            // setInterval(()=> {
            //     if (gameStart == true && collided == false) {
            //         collisionDetection();
            //     }
            // }, 100)
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
    if (localStorage.getItem('curHighScore') != gameHighScore) {
        if (localStorage.getItem('curHighScore') != currScore && localStorage.getItem('curHighScore') < currScore) {
            localStorage.setItem('curHighScore', 0);
        }
    }
}) 

document.addEventListener('visibilitychange', ()=> {
    if (document.visibilityState === 'hidden') {
        if (gameStart == true && dinoRunning == true) {
            gameStart = false;
            dinoRunning = false;
            dinoCanvas.style.animationPlayState = 'paused';
        }
    } else if (document.visibilityState === 'visible') {
        if (gameStart == false && dinoRunning == false) {
            gameStart = true;
            dinoRunning = true;
            dinoCanvas.style.animationPlayState = 'running';
        }
    }
})
if (window.matchMedia("(max-width: 1000px)").matches) {
    dinoWidth = 100;
    dinoHeight = 100;
    DINO_WIDTH = 100;
    DINO_HEIGHT = 100;
} else {
    console.log("other screen detected");
}