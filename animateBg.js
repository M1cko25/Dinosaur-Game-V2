
let cact2show = false;
let cactShowTimer = 200;
if (window.matchMedia("(min-width: 320px) and (max-width: 900px").matches) {
    cactShowTimer = 100
}

let cactV1 = (ctx, cactus1, cactX, CANVAS_HEIGHT) => {
    if (window.matchMedia("(min-width: 320px) and (max-width: 900px").matches) {
    ctx.drawImage(cactus1, 0, 0, 146, 173, cactX , CANVAS_HEIGHT - 60, 90, 100);
    } else {
    ctx.drawImage(cactus1, 0, 0, 146, 173, cactX , CANVAS_HEIGHT - 160, 90, 100)
    }
}
let cactV2 = (ctx, cactus2, cactX, CANVAS_HEIGHT) => {
    if (window.matchMedia("(min-width: 320px) and (max-width: 900px").matches) {
    ctx.drawImage(cactus2, 0, 0, 203, 158, cactX, CANVAS_HEIGHT - 60, 115, 90);
    } else {
    ctx.drawImage(cactus2, 0, 0, 203, 158, cactX, CANVAS_HEIGHT - 160, 115, 90);
    }
}
let cactV3 = (ctx, cactus3, cactX, CANVAS_HEIGHT) => {
    if (window.matchMedia("(min-width: 320px) and (max-width: 900px").matches) {
    ctx.drawImage(cactus3, 0, 0, 176, 170, cactX, CANVAS_HEIGHT - 70, 110, 110);
    } else {
    ctx.drawImage(cactus3, 0, 0, 176, 170, cactX, CANVAS_HEIGHT - 160, 110, 110);
    }
}
let cactiArr = [cactus1, cactus2, cactus3, cactus3]
let cactiDrawArr = [cactV1, cactV2, cactV3, cactV3]
function animateBg() {
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    if (window.matchMedia("(min-width: 320px) and (max-width: 900px").matches) {
        ctx.drawImage(pyramid, x2, 10);
        if (x2 < -2500) {
            x2 = CANVAS_WIDTH;
        } else {
            x2 -= gameSpeed - 3;
        }
        ctx.drawImage(bgLayer1, x1, CANVAS_HEIGHT - 20)
        if (x1 < -(1300 - CANVAS_WIDTH)) {
            x1 = 0;
        } else {
            x1-= gameSpeed;
        }
        if (isNight == true) {
            ctx.drawImage(moon, x7, CANVAS_HEIGHT - CANVAS_HEIGHT, 50, 50);
        if (x7 < -2000) {
            x7 = CANVAS_WIDTH + (moonDist * 90);
            moonDist = Math.floor(Math.random() * 5);
        } else {
            x7 -= gameSpeed - 6;
        }
        }
        ctx.drawImage(cloud1, x3, cloudHeight1 * 5);
        if (x3 < -2000) {
            x3 = CANVAS_WIDTH;
            cloudHeight1 = Math.floor(Math.random() * 10);
        } else {
            x3 -= gameSpeed - 4;
        }
        ctx.drawImage(cloud2, x4, cloudHeight2 * 5);
        if (x4 < -2000) {
            x4 = CANVAS_WIDTH + (cloudHeight2 * 50);
            cloudHeight2 = Math.floor(Math.random() * 10);
        } else {
            x4 -= gameSpeed - 4;
        }
        ctx.drawImage(cloud3, x5, cloudHeight3 * 5);
        if (x5 < -2000) {
            x5 = CANVAS_WIDTH + (cloudHeight3 * 70);
            cloudHeight3 = Math.floor(Math.random() * 10);
        } else {
            x5 -= gameSpeed - 4;
        }
        ctx.drawImage(cloud4, x6, cloudHeight4 * 5);
        if (x6 < -2000) {
            x6 = CANVAS_WIDTH + (cloudHeight4 * 90);
            cloudHeight4 = Math.floor(Math.random() * 10);
        } else {
            x6 -= gameSpeed - 4;
        }
        if (cactShowTimer > 0) {
            cactShowTimer--;
        } else {
            cactiDrawArr[cactRandIndex](ctx, cactiArr[cactRandIndex], cactusX, CANVAS_HEIGHT)
            if (cactusX < -(CANVAS_WIDTH + 300)) {
                cactusX = -(CANVAS_WIDTH + 300);
            } else {
                cactusX -= gameSpeed;
            }
            if (cactusX < cactusRandInt * 10) {
                if (cactRandIndex2 >= 4 && isBirdActive == true) {
                    birdCanvas2.style.left = cactusX2 + "px";
                } else {
                if (cactRandIndex2 == 4) {
                    cactRandIndex2 -=1
                } else if (cactRandIndex2 == 5) {
                    cactRandIndex2 -= 2;
                } else if (cactRandIndex2 == 6) {
                    cactRandIndex2 -= 3
                }
                cactiDrawArr[cactRandIndex2](ctx, cactiArr[cactRandIndex2], cactusX2, CANVAS_HEIGHT)
            }
                if (cactusX2 < -(CANVAS_WIDTH + 300)) {
                    cactusX2 = CANVAS_WIDTH;
                    cactusX = CANVAS_WIDTH;
                    cactRandIndex = Math.floor(Math.random() * 3);
                    cactRandIndex2 = Math.floor(Math.random() * 6);
                } else {
                    cactusX2 -= gameSpeed;
                }
                if (cactusX2 < cactusRandInt * 10) {
                    cact2show = true;
                }
            }
            if (cact2show == true) {
                cactiDrawArr[cactRandIndex3](ctx, cactiArr[cactRandIndex3], cactusX3, CANVAS_HEIGHT)
            if (cactusX3 < -(CANVAS_WIDTH + 300)) {
                cactusX3 = -(CANVAS_WIDTH + 300);
                
            } else {
                cactusX3 -= gameSpeed;
            }
            if (cactusX3 < cactusRandInt * 10) {
                if (cactRandIndex4 >= 4 && isBirdActive == true) {
                    birdCanvas.style.left = cactusX4 + "px";
                } else {
                if (cactRandIndex4 == 4) {
                    cactRandIndex4 -=1
                } else if (cactRandIndex4 == 5) {
                    cactRandIndex4 -= 2;
                } else if (cactRandIndex4 == 6) {
                    cactRandIndex4 -= 3
                }
                cactiDrawArr[cactRandIndex4](ctx, cactiArr[cactRandIndex4], cactusX4, CANVAS_HEIGHT)
            }
                if (cactusX4 < -(CANVAS_WIDTH + 300)){
                    cactusX3 = CANVAS_WIDTH;
                    cactusX4 = CANVAS_WIDTH;
                    cact2show = false;
                    cactusRandInt = Math.floor(Math.random() * 5) + 6;
                    cactRandIndex3 = Math.floor(Math.random() * 3);
                    cactRandIndex4 = Math.floor(Math.random() * 6);
                    
                }
                else {
                    cactusX4 -= gameSpeed;
                }
            }
            }
        }
    
    } else {
        ctx.drawImage(pyramid, x2, CANVAS_HEIGHT - 330);
        if (x2 < -3500) {
            x2 = CANVAS_WIDTH;
        } else {
            x2 -= gameSpeed - 10;
        }
        ctx.drawImage(bgLayer1, x1, CANVAS_HEIGHT - 360);
        if (x1 < -(2000 - CANVAS_WIDTH)) {
            x1 = 0;
        } else {
            x1-= gameSpeed;
        }
        if (isNight == true) {
            ctx.drawImage(moon, x7, CANVAS_HEIGHT - CANVAS_HEIGHT, 150, 150);
        if (x7 < -2000) {
            x7 = CANVAS_WIDTH + (moonDist * 90);
            moonDist = Math.floor(Math.random() * 10);
        } else {
            x7 -= gameSpeed - 17;
        }
        }
        ctx.drawImage(cloud1, x3, cloudHeight1 * 10);
        if (x3 < -1500) {
            x3 = CANVAS_WIDTH;
            cloudHeight1 = Math.floor(Math.random() * 10);
        } else {
            x3 -= gameSpeed - 12;
        }
        ctx.drawImage(cloud2, x4, cloudHeight2 * 10);
        if (x4 < -1500) {
            x4 = CANVAS_WIDTH + (cloudHeight2 * 50);
            cloudHeight2 = Math.floor(Math.random() * 10);
        } else {
            x4 -= gameSpeed - 12;
        }
        ctx.drawImage(cloud3, x5, cloudHeight3 * 10);
        if (x5 < -1500) {
            x5 = CANVAS_WIDTH + (cloudHeight3 * 70);
            cloudHeight3 = Math.floor(Math.random() * 10);
        } else {
            x5 -= gameSpeed - 12;
        }
        ctx.drawImage(cloud4, x6, cloudHeight4 * 10);
        if (x6 < -1500) {
            x6 = CANVAS_WIDTH + (cloudHeight4 * 90);
            cloudHeight4 = Math.floor(Math.random() * 10);
        } else {
            x6 -= gameSpeed - 12;
        }
        if (cactShowTimer > 0) {
            cactShowTimer--;
        } else {
            cactiDrawArr[cactRandIndex](ctx, cactiArr[cactRandIndex], cactusX, CANVAS_HEIGHT)
            if (cactusX < -(CANVAS_WIDTH + 300)) {
                cactusX = -(CANVAS_WIDTH + 300);
            } else {
                cactusX -= gameSpeed;
            }
            if (cactusX < cactusRandInt * 100) {
                if (cactRandIndex2 >= 4 && isBirdActive == true) {
                    console.log(cactRandIndex2)
                    birdCanvas2.style.left = cactusX2 + "px";
                } else {
                if (cactRandIndex2 == 4) {
                    cactRandIndex2 -=1
                } else if (cactRandIndex2 == 5) {
                    cactRandIndex2 -= 2;
                } else if (cactRandIndex2 == 6) {
                    cactRandIndex2 -= 3
                }
                cactiDrawArr[cactRandIndex2](ctx, cactiArr[cactRandIndex2], cactusX2, CANVAS_HEIGHT)
                }
                if (cactusX2 < -(CANVAS_WIDTH + 300)) {
                    cactusX2 = CANVAS_WIDTH;
                    cactusX = CANVAS_WIDTH;
                    cactRandIndex = Math.floor(Math.random() * 3);
                    cactRandIndex2 = Math.floor(Math.random() * 6);
                } else {
                    cactusX2 -= gameSpeed;
                }
                if (cactusX2 < cactusRandInt * 100) {
                    cact2show = true;
                }
            }
            if (cact2show == true) {
                cactiDrawArr[cactRandIndex3](ctx, cactiArr[cactRandIndex3], cactusX3, CANVAS_HEIGHT)
            if (cactusX3 < -(CANVAS_WIDTH + 300)) {
                cactusX3 = -(CANVAS_WIDTH + 300);
                
            } else {
                cactusX3 -= gameSpeed;
            }
            if (cactusX3 < cactusRandInt * 100) {
                if (cactRandIndex4 >= 4 && isBirdActive == true) {
                    birdCanvas.style.left = cactusX4 + "px";
                } else {
                if (cactRandIndex4 == 4) {
                    cactRandIndex4 -=1
                } else if (cactRandIndex4 == 5) {
                    cactRandIndex4 -= 2;
                } else if (cactRandIndex4 == 6) {
                    cactRandIndex4 -= 3
                }
                cactiDrawArr[cactRandIndex4](ctx, cactiArr[cactRandIndex4], cactusX4, CANVAS_HEIGHT)
                }
                if (cactusX4 < -(CANVAS_WIDTH + 300)){
                    cactusX3 = CANVAS_WIDTH;
                    cactusX4 = CANVAS_WIDTH;
                    cact2show = false;
                    cactusRandInt = Math.floor(Math.random() * 4) + 2;
                    cactRandIndex3 = Math.floor(Math.random() * 3);
                    cactRandIndex4 = Math.floor(Math.random() * 6);
                    
                }
                else {
                    cactusX4 -= gameSpeed;
                }
            }
            }
        }
        
    }
    if (gameStart == false) {
        gameFrame = 0;
        return;
    }
    console.log(cactusRandInt)
    
    if (gameStart == true && collided == false) {
        collisionDetection();
    }
    requestAnimationFrame(animateBg);
}
