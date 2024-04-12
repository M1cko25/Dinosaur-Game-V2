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
let cactusX = CANVAS_WIDTH;
let cactusX2 = CANVAS_WIDTH;
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
        ctx.drawImage(cactus1, 0, 0, 146, 173, cactusX + 400, CANVAS_HEIGHT - 160, 90, 100);
        if (cactusX < -(400 + CANVAS_WIDTH)) {
            cactusX = CANVAS_WIDTH;
            cactusRandIndex = Math.floor(Math.random() * 3)
        }
        else {
            cactusX -= gameSpeed;
        }
        if (dblCactRand == 1) {
            ctx.drawImage(cactus2, 0, 0, 203, 158, cactusX2 + (cactusRandInt * 100), CANVAS_HEIGHT - 160, 115, 90);
            if (cactusX2 < -(400 + CANVAS_WIDTH)) {
                cactusX2 = CANVAS_WIDTH;
                dblCactRand = Math.round(Math.random() * 3) + 1;
            } else {
                cactusX2 -= gameSpeed;
            }
        } else if (dblCactRand == 2) {
            ctx.drawImage(cactus3, 0, 0, 176, 170, cactusX2 + (cactusRandInt * 100), CANVAS_HEIGHT - 160, 110, 110);
            if (cactusX2 < -(400 + CANVAS_WIDTH)) {
                cactusX2 = CANVAS_WIDTH;
                dblCactRand = Math.round(Math.random() * 3) + 1;
            } else {
                cactusX2 -= gameSpeed;
            }
        } else {
            dblCactRand = Math.round(Math.random() * 3) + 1;
        }
}
    function cactusShow2() {
        ctx.drawImage(cactus2, 0, 0, 203, 158, cactusX + 400, CANVAS_HEIGHT - 160, 115, 90);
        if (cactusX < -(400 + CANVAS_WIDTH)) {
            cactusX = CANVAS_WIDTH;
            cactusRandIndex = Math.floor(Math.random() * 3)
        } 
        else {
            cactusX -= gameSpeed;
        }
        if (dblCactRand == 1) {
            ctx.drawImage(cactus1, 0, 0, 146, 173, cactusX2 + (cactusRandInt * 100), CANVAS_HEIGHT - 160, 90, 100);
            if (cactusX2 < -(400 + CANVAS_WIDTH)) {
                cactusX2 = CANVAS_WIDTH;
                dblCactRand = Math.round(Math.random() * 3) + 1;
            } else {
                cactusX2 -= gameSpeed;
            }
        } else if (dblCactRand == 2) {
            ctx.drawImage(cactus3, 0, 0, 176, 170, cactusX2 + (cactusRandInt * 100), CANVAS_HEIGHT - 160, 110, 110);
            if (cactusX2 < -(400 + CANVAS_WIDTH)) {
                cactusX2 = CANVAS_WIDTH;
                dblCactRand = Math.round(Math.random() * 3) + 1;
            } else {
                cactusX2 -= gameSpeed;
            }
        } else {
            dblCactRand = Math.round(Math.random() * 3) + 1;
        }
    }
    function cactusShow3() {
        ctx.drawImage(cactus3, 0, 0, 176, 170, cactusX + 400, CANVAS_HEIGHT - 160, 110, 110);
        if (cactusX < -(400 + CANVAS_WIDTH)) {
            cactusX = CANVAS_WIDTH;
            cactusRandIndex = Math.floor(Math.random() * 3)
        } 
        else {
            cactusX -= gameSpeed;
        }
        if (dblCactRand == 1) {
            ctx.drawImage(cactus1, 0, 0, 146, 173, cactusX2 + (cactusRandInt * 100), CANVAS_HEIGHT - 160, 90, 100);
            if (cactusX2 < -(400 + CANVAS_WIDTH)) {
                cactusX2 = CANVAS_WIDTH;
                dblCactRand = Math.round(Math.random() * 3) + 1;
            } else {
                cactusX2 -= gameSpeed;
            }
        } else if (dblCactRand == 2) {
            ctx.drawImage(cactus2, 0, 0, 203, 158, cactusX2 + (cactusRandInt * 100), CANVAS_HEIGHT - 160, 115, 90);
            if (cactusX2 < -(400 + CANVAS_WIDTH)) {
                cactusX2 = CANVAS_WIDTH;
                dblCactRand = Math.round(Math.random() * 3) + 1;
            } else {
                cactusX2 -= gameSpeed;
            }
        } else {
            dblCactRand = Math.round(Math.random() * 3) + 1;
        }


    }
    let cactusFunc = [cactusShow1, cactusShow2, cactusShow3];
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
