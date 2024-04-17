
function dinoJumpAnimation() {
    playerState = 'jump';
    staggerFrames = 7;
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
    } else {
        staggerFrames = 1;
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
        dinoCanvas.style.animationDuration = jumpDuration + "ms"
        dinoJumpAnimation();
        jumpSound.play();
        setTimeout(()=> {
        dinoJumping = false;
        dinoRunning = true
        if (collided == false) {
        dinoCanvas.classList.remove('jump');
        dinoRunAnimation();
        }}, jumpDuration)
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
let birdframeX = 0;
let birdStaggerFrames = 3;
function birdAnimation() {
    birdCtx.clearRect(0, 0, BIRD_WIDTH, BIRD_HEIGHT);
    birdCtx2.clearRect(0, 0, BIRD_WIDTH2, BIRD_HEIGHT2);
   birdCtx.drawImage(bird, birdframeX * birdWidth, 0, birdWidth, birdHeight, 0, 0, birdWidth, birdHeight);
   birdCtx2.drawImage(bird, birdframeX * birdWidth, 0, birdWidth, birdHeight, 0, 0, birdWidth, birdHeight);
   if (gameFrame % birdStaggerFrames == 0) {
    if (birdframeX < 8){
        birdframeX++;
    } else {
        birdframeX = 0;
    }
   }
   gameFrame++;
   requestAnimationFrame(birdAnimation);
}