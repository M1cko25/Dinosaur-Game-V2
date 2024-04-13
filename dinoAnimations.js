
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