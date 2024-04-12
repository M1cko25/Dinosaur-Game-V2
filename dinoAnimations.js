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
const jumpSound = new Audio('./sounds/jumpSound.mp3');
function dinoJump() {
    if (dinoJumping == false) {
        dinoJumping = true;
        dinoRunning = false
        dinoJumpAnimation();
        dinoCanvas.classList.add('jump');
        jumpSound.play();
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