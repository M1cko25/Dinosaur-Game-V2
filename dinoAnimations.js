
function dinoJumpAnimation() {
    playerState = 'jump';
    staggerFrames = 3;
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
    if (currScore < 500) {
        staggerFrames = 2;
    } else if (currScore >= 500 && currScore < 2000) {
        staggerFrames = 1;
    } else {
        staggerFrames = 0.7;
    }
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
        dinoCanvas.classList.add('jump');
        dinoJumpAnimation();
        jumpSound.play();
        setTimeout(()=> {
        dinoJumping = false;
        dinoRunning = true
        if (collided == false) {
        dinoCanvas.classList.remove('jump');
        dinoRunAnimation();
        }}, 800)
    }
}

function dinoDiedAnimation() {
    if (collided == true)
    {
    playerState = 'died';
    staggerFrames = 20;
    dinoCtx.clearRect(0, 0, DINO_WIDTH, DINO_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    frameX = dinoWidth * position;
    frameY = spriteAnimations[playerState].loc[position].y;
   dinoCtx.drawImage(dino, frameX, frameY, dinoWidth, dinoHeight, 0, 0, dinoWidth, dinoHeight);
    gameFrame++;
    requestAnimationFrame(dinoDiedAnimation);
}
}

function dinoCrouchAnimation() {
    playerState = 'crouch';
    staggerFrames = 40;
    dinoCtx.clearRect(0, 0, DINO_WIDTH, DINO_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    frameX = dinoWidth * position;
    frameY = spriteAnimations[playerState].loc[position].y;
   dinoCtx.drawImage(dino, frameX, frameY, dinoWidth, dinoHeight, 0, 0, dinoWidth, dinoHeight);
   gameFrame++;
   if (dinoCrouching == false && collided == false) {
    gameFrame = 0;
    return;
   } else if (collided == true) {
    return;
   }
   requestAnimationFrame(dinoCrouchAnimation);
}

function dinoCrouch() {
    if (dinoCrouching == false) {
        console.log(playerState)
        dinoCrouching = true;
        dinoJumping = false;
        dinoRunning = false;
        dinoCrouchAnimation();
        setTimeout(()=> {
        dinoJumping = false;
        dinoRunning = true;
        dinoCrouching = false;
        if (collided == false) {
        dinoRunAnimation();
        }}, 800)
    }
}

