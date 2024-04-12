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
const cactus3 = new Image();
cactus3.src = './images/Cactus3.png';
let cactus1Width = cactus1.getBoundingClientRect().width;
let cactus2Width = cactus2.getBoundingClientRect().width;
let cactus3Width = cactus3.getBoundingClientRect().width;
let cactusX = CANVAS_WIDTH;
let cactusRand = Math.floor(Math.random() * 6) + 10;
let cactusRandInt = Math.floor(Math.random() * 11) + 45;
let cactusRandIndex = Math.floor(Math.random() * 3) ;
let cactusRandShow = Math.floor(Math.random() * 601) + 600;

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

function animateBg() {
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    if (isNight == true) {
        ctx.drawImage(moon, x7, CANVAS_HEIGHT - CANVAS_HEIGHT, 150, 150);
    if (x7 < -2000) {
        x7 = CANVAS_WIDTH + (moonDist * 90);
        moonDist = Math.floor(Math.random() * 10);
    } else {
        x7 -= gameSpeed;
    }
    }
    ctx.drawImage(cloud1, x3, cloudHeight1 * 10);
    if (x3 < -2000) {
        x3 = CANVAS_WIDTH;
        cloudHeight1 = Math.floor(Math.random() * 10);
    } else {
        x3 -= gameSpeed;
    }
    ctx.drawImage(cloud2, x4, cloudHeight2 * 10);
    if (x4 < -2000) {
        x4 = CANVAS_WIDTH + (cloudHeight2 * 50);
        cloudHeight2 = Math.floor(Math.random() * 10);
    } else {
        x4 -= gameSpeed;
    }
    ctx.drawImage(cloud3, x5, cloudHeight3 * 10);
    if (x5 < -2000) {
        x5 = CANVAS_WIDTH + (cloudHeight3 * 70);
        cloudHeight3 = Math.floor(Math.random() * 10);
    } else {
        x5 -= gameSpeed;
    }
    ctx.drawImage(cloud4, x6, cloudHeight4 * 10);
    if (x6 < -2000) {
        x6 = CANVAS_WIDTH + (cloudHeight4 * 90);
        cloudHeight4 = Math.floor(Math.random() * 10);
    } else {
        x6 -= gameSpeed;
    }
    ctx.drawImage(pyramid, x2, CANVAS_HEIGHT - 330);
    if (x2 < -3500) {
        x2 = CANVAS_WIDTH;
    } else {
        x2 -= gameSpeed;
    }
    ctx.drawImage(bgLayer1, x1, CANVAS_HEIGHT - 360);
    if (x1 < -(2000 - CANVAS_WIDTH)) {
        x1 = 0;
    } else {
        x1-= gameSpeed;
    }

    function cactusShow1() {
        ctx.drawImage(cactus1, 0, 0, 146, 173, cactusX + (cactusRand * 100), CANVAS_HEIGHT - 160, 90, 100);
    if (cactusX < -((cactusRandInt * 100) - CANVAS_WIDTH)) {
        cactusX = CANVAS_WIDTH;
        cactusRandIndex = Math.floor(Math.random() * 3)
        cactusRandInt = Math.floor(Math.random() * 11) + 45;
    }
    else {
        cactusX -= gameSpeed;
    }
}
    function cactusShow2() {
        ctx.drawImage(cactus2, 0, 0, 203, 158, cactusX + (cactusRand * 100), CANVAS_HEIGHT - 160, 115, 90);
    if (cactusX < -((cactusRandInt * 100) - CANVAS_WIDTH)) {
        cactusX = CANVAS_WIDTH;
        cactusRandIndex = Math.floor(Math.random() * 3)
        cactusRandInt = Math.floor(Math.random() * 11) + 45;
    } 
     else {
        cactusX -= gameSpeed;
    }
    
    }
    function cactusShow3() {
        ctx.drawImage(cactus3, 0, 0, 176, 170, cactusX + (cactusRand * 100), CANVAS_HEIGHT - 160, 110, 110);
    if (cactusX < -((cactusRandInt * 100) - CANVAS_WIDTH)) {
        cactusX = CANVAS_WIDTH;
        cactusRandIndex = Math.floor(Math.random() * 3)
        cactusRandInt = Math.floor(Math.random() * 11) + 45;
    } 
    else {
        cactusX -= gameSpeed;
    }
    }
    var cactusFunc = [cactusShow1, cactusShow2, cactusShow3];
    if (isShow == false) {
        cactusFunc[cactusRandIndex]();
    }
    if (gameStart == false) {
        gameFrame = 0;
        return;
    }
    if (gameStart == true && collided == false) {
        collisionDetection();
    }
    requestAnimationFrame(animateBg);
}

const dinoCanvas = document.getElementById('canvas2');
const dinoCtx = dinoCanvas.getContext('2d');
const DINO_WIDTH = dinoCanvas.width = 100;
const DINO_HEIGHT = dinoCanvas.height = 100;
let dinoWidth = 100;
let dinoHeight = 100;
let gameFrame = 0;
let staggerFrames;
let playerState = 'idle';

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
function dinoJumpAnimation() {
    playerState = 'jump';
    staggerFrames = 4;
    dinoCtx.clearRect(0, 0, DINO_WIDTH, DINO_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    frameX = dinoWidth * position;
    frameY = spriteAnimations[playerState].loc[position].y;
   dinoCtx.drawImage(dino, frameX, frameY, dinoWidth, dinoHeight, 0, 0, dinoWidth, dinoHeight);
   gameFrame++;
   if (dinoJumping == false  && collided == false) {
    gameFrame = 0;
    return;
   } else if (collided == true) {
    return;
   }
    requestAnimationFrame(dinoJumpAnimation);
}

function dinoRunAnimation() {
    playerState = 'run';
    staggerFrames = 2;
    dinoCtx.clearRect(0, 0, DINO_WIDTH, DINO_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    frameX = dinoWidth * position;
    frameY = spriteAnimations[playerState].loc[position].y;
   dinoCtx.drawImage(dino, frameX, frameY, dinoWidth, dinoHeight, 0, 0, dinoWidth, dinoHeight);
   gameFrame++;
   if (dinoRunning == false && collided == false) {
    gameFrame = 0;
    return;
   } else if (collided == true) {
    return;
   }
   requestAnimationFrame(dinoRunAnimation);
}

function dinoJump() {
    if (dinoJumping == false) {
        dinoJumping = true;
        dinoRunning = false
        dinoJumpAnimation();
        dinoCanvas.classList.add('jump');
        setTimeout(()=> {
        dinoJumping = false;
        dinoRunning = true
        if (collided == false) {
        dinoRunAnimation();
        dinoCanvas.classList.remove('jump');
        }}, 1000)
    }
}

function dinoDiedAnimation() {
    if (collided == true)
    {
        playerState = 'died';
    staggerFrames = 10;
    dinoCtx.clearRect(0, 0, DINO_WIDTH, DINO_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    frameX = dinoWidth * position;
    frameY = spriteAnimations[playerState].loc[position].y;
   dinoCtx.drawImage(dino, frameX, frameY, dinoWidth, dinoHeight, 0, 0, dinoWidth, dinoHeight);
   if (frameX == 500) {
       frameX = 500;
       return;
    }
    gameFrame++;
    requestAnimationFrame(dinoDiedAnimation);
}
}
    
function collisionDetection() {
    const dinoRect = {
        left: dinoCanvas.getBoundingClientRect().left - canvas.getBoundingClientRect().left ,
        top: dinoCanvas.getBoundingClientRect().top - canvas.getBoundingClientRect().top ,
        right: dinoCanvas.getBoundingClientRect().right - canvas.getBoundingClientRect().left,
        bottom: dinoCanvas.getBoundingClientRect().bottom - canvas.getBoundingClientRect().top 
    };
    const cactusRect = {
        left: cactusX + (cactusRand * 100) + 30, 
        top: CANVAS_HEIGHT - 160,
        right: cactusX + (cactusRand * 100) + 90, 
        bottom: CANVAS_HEIGHT - 60
    };
    /* // uncomment this to see hitbox
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.strokeRect(dinoRect.left, dinoRect.top, dinoRect.right - dinoRect.left, dinoRect.bottom - dinoRect.top);
    ctx.strokeStyle = "blue";
    ctx.strokeRect(cactusRect.left, cactusRect.top, cactusRect.right - cactusRect.left, cactusRect.bottom - cactusRect.top);
    */
    if (!(dinoRect.right < cactusRect.left ||
        dinoRect.left > cactusRect.right ||
        dinoRect.bottom < cactusRect.top ||
        dinoRect.top > cactusRect.bottom)) {
            
    gameOverActions();
    }
}

const restBtn = document.getElementById('restartBtn');
const score = document.getElementById('score');
const highScore = document.getElementById('HighScore');
const hiScoreTxt = document.getElementById('hiScore');
const gameOverTxt = document.getElementById('gameOver');
function gameOverActions() {
    collided = true;
    gameStart = false;
    dinoRunning = false;
    gameOverTxt.style.visibility = 'visible';
    restBtn.style.visibility = 'visible';
    setHighScore(currScore);
    dinoCanvas.style.animationPlayState = 'paused';
    dinoDiedAnimation();
}
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
restBtn.addEventListener('click', restart);

window.addEventListener('beforeunload', ()=> {
    if (localStorage.getItem('curHighScore') != gameHighScore) {
        localStorage.setItem('curHighScore', 0);
    }
})