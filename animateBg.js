let cactDeadEnd;
if (dblCactRand < 3) {
    cactDeadEnd = cactusRandInt * 100
} else {
    cactDeadEnd = cactusRandInt2 * 100
}

function animateBg() {
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    if (window.matchMedia("(min-width: 320px) and (max-width: 900px").matches) {
        ctx.drawImage(pyramid, x2, 10);
        if (x2 < -2500) {
            x2 = CANVAS_WIDTH;
        } else {
            x2 -= gameSpeed;
        }
        ctx.drawImage(bgLayer1, x1, CANVAS_HEIGHT - 20)
        if (x1 < -(1300 - CANVAS_WIDTH)) {
            x1 = 0;
        } else {
            x1-= gameSpeed;
        }
        if (isNight == true) {
            ctx.drawImage(moon, x7, CANVAS_HEIGHT - CANVAS_HEIGHT, 150, 150);
        if (x7 < -2000) {
            x7 = CANVAS_WIDTH + (moonDist * 90);
            moonDist = Math.floor(Math.random() * 5);
        } else {
            x7 -= gameSpeed;
        }
        }
        ctx.drawImage(cloud1, x3, cloudHeight1 * 5);
        if (x3 < -2000) {
            x3 = CANVAS_WIDTH;
            cloudHeight1 = Math.floor(Math.random() * 10);
        } else {
            x3 -= gameSpeed;
        }
        ctx.drawImage(cloud2, x4, cloudHeight2 * 5);
        if (x4 < -2000) {
            x4 = CANVAS_WIDTH + (cloudHeight2 * 50);
            cloudHeight2 = Math.floor(Math.random() * 10);
        } else {
            x4 -= gameSpeed;
        }
        ctx.drawImage(cloud3, x5, cloudHeight3 * 5);
        if (x5 < -2000) {
            x5 = CANVAS_WIDTH + (cloudHeight3 * 70);
            cloudHeight3 = Math.floor(Math.random() * 10);
        } else {
            x5 -= gameSpeed;
        }
        ctx.drawImage(cloud4, x6, cloudHeight4 * 5);
        if (x6 < -2000) {
            x6 = CANVAS_WIDTH + (cloudHeight4 * 90);
            cloudHeight4 = Math.floor(Math.random() * 10);
        } else {
            x6 -= gameSpeed;
        }
    } else {
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
    }

    function cactusShow1() {
        if (window.matchMedia("(min-width: 320px) and (max-width: 900px").matches) {
            ctx.drawImage(cactus1, 0, 0, 146, 173, cactusX , CANVAS_HEIGHT - 60, 90, 100);
            if (cactusX < -(cactDeadEnd + CANVAS_WIDTH)) {
                cactusX = CANVAS_WIDTH;
            }
            else {
                cactusX -= gameSpeed;
            }
            if (dblCactRand == 1) {
                ctx.drawImage(cactus2, 0, 0, 203, 158, cactusX2 + (cactusRandInt * 100), CANVAS_HEIGHT - 60, 115, 90);
                if (cactusX2 < -(cactDeadEnd + CANVAS_WIDTH)) {
                    cactusX2 = CANVAS_WIDTH;
                    dblCactRand = Math.round(Math.random() * 3) + 1;
                    cactusRandIndex = Math.floor(Math.random() * 3)
                } else {
                    cactusX2 -= gameSpeed;
                }
            } else if (dblCactRand == 2) {
                ctx.drawImage(cactus3, 0, 0, 176, 170, cactusX2 + (cactusRandInt * 100), CANVAS_HEIGHT - 70, 110, 110);
                if (cactusX2 < -(cactDeadEnd + CANVAS_WIDTH)) {
                    cactusX2 = CANVAS_WIDTH;
                    dblCactRand = Math.round(Math.random() * 3) + 1;
                    cactusRandIndex = Math.floor(Math.random() * 3)
                } else {
                    cactusX2 -= gameSpeed;
                }
            } else {
                ctx.drawImage(cactus3, 0, 0, 176, 170, cactusX2 + (cactusRandInt * 100), CANVAS_HEIGHT - 70, 110, 110);
                if (cactusX2 < -(cactDeadEnd + CANVAS_WIDTH)) {
                    cactusX2 = CANVAS_WIDTH;
                } else {
                    cactusX2 -= gameSpeed;
                }
                ctx.drawImage(cactus2, 0, 0, 203, 158, cactusX3 + (cactusRandInt2 * 100), CANVAS_HEIGHT - 60, 115, 90);
                if (cactusX3 < -(cactDeadEnd + CANVAS_WIDTH)) {
                    cactusX3 = CANVAS_WIDTH;
                    dblCactRand = Math.round(Math.random() * 3) + 1;
                    cactusRandIndex = Math.floor(Math.random() * 3)
                } else {
                    cactusX3 -= gameSpeed;
                }
            }
        } else {
        ctx.drawImage(cactus1, 0, 0, 146, 173, cactusX , CANVAS_HEIGHT - 160, 90, 100);
        if (cactusX < -(cactDeadEnd + CANVAS_WIDTH)) {
            cactusX = CANVAS_WIDTH;
        }
        else {
            cactusX -= gameSpeed;
        }
        if (dblCactRand == 1) {
            ctx.drawImage(cactus2, 0, 0, 203, 158, cactusX2 + (cactusRandInt * 100), CANVAS_HEIGHT - 160, 115, 90);
            if (cactusX2 < -(cactDeadEnd + CANVAS_WIDTH)) {
                cactusX2 = CANVAS_WIDTH;
                dblCactRand = Math.round(Math.random() * 3) + 1;
                cactusRandIndex = Math.floor(Math.random() * 3)
            } else {
                cactusX2 -= gameSpeed;
            }
        } else if (dblCactRand == 2) {
            ctx.drawImage(cactus3, 0, 0, 176, 170, cactusX2 + (cactusRandInt * 100), CANVAS_HEIGHT - 160, 110, 110);
            if (cactusX2 < -(cactDeadEnd + CANVAS_WIDTH)) {
                cactusX2 = CANVAS_WIDTH;
                dblCactRand = Math.round(Math.random() * 3) + 1;
                cactusRandIndex = Math.floor(Math.random() * 3)
            } else {
                cactusX2 -= gameSpeed;
            }
        } else {
            ctx.drawImage(cactus3, 0, 0, 176, 170, cactusX2 + (cactusRandInt * 100), CANVAS_HEIGHT - 160, 110, 110);
            if (cactusX2 < -(cactDeadEnd + CANVAS_WIDTH)) {
                cactusX2 = CANVAS_WIDTH;
            } else {
                cactusX2 -= gameSpeed;
            }
            ctx.drawImage(cactus2, 0, 0, 203, 158, cactusX3 + (cactusRandInt2 * 100), CANVAS_HEIGHT - 160, 115, 90);
            if (cactusX3 < -(cactDeadEnd + CANVAS_WIDTH)) {
                cactusX3 = CANVAS_WIDTH;
                dblCactRand = Math.round(Math.random() * 3) + 1;
                cactusRandIndex = Math.floor(Math.random() * 3)
            } else {
                cactusX3 -= gameSpeed;
            }
        }
    }
}
    function cactusShow2() {
        if (window.matchMedia("(min-width: 320px) and (max-width: 900px").matches) {
        ctx.drawImage(cactus2, 0, 0, 203, 158, cactusX, CANVAS_HEIGHT - 60, 115, 90);
        if (cactusX < -(cactDeadEnd + CANVAS_WIDTH)) {
            cactusX = CANVAS_WIDTH;
        } 
        else {
            cactusX -= gameSpeed;
        }
        if (dblCactRand == 1) {
            ctx.drawImage(cactus1, 0, 0, 146, 173, cactusX2 + (cactusRandInt * 100), CANVAS_HEIGHT - 70, 90, 100);
            if (cactusX2 < -(cactDeadEnd + CANVAS_WIDTH)) {
                cactusX2 = CANVAS_WIDTH;
                dblCactRand = Math.round(Math.random() * 3) + 1;
                cactusRandIndex = Math.floor(Math.random() * 3)
            } else {
                cactusX2 -= gameSpeed;
            }
        } else if (dblCactRand == 2) {
            ctx.drawImage(cactus3, 0, 0, 176, 170, cactusX2 + (cactusRandInt * 100), CANVAS_HEIGHT - 60, 110, 110);
            if (cactusX2 < -(cactDeadEnd + CANVAS_WIDTH)) {
                cactusX2 = CANVAS_WIDTH;
                dblCactRand = Math.round(Math.random() * 3) + 1;
                cactusRandIndex = Math.floor(Math.random() * 3)
            } else {
                cactusX2 -= gameSpeed;
            }
        } else {
            dblCactRand = Math.round(Math.random() * 3) + 1;
            cactusRandIndex = Math.floor(Math.random() * 3)
        }
    } else {
        ctx.drawImage(cactus2, 0, 0, 203, 158, cactusX, CANVAS_HEIGHT - 160, 115, 90);
        if (cactusX < -(cactDeadEnd + CANVAS_WIDTH)) {
            cactusX = CANVAS_WIDTH;
        } 
        else {
            cactusX -= gameSpeed;
        }
        if (dblCactRand == 1) {
            ctx.drawImage(cactus1, 0, 0, 146, 173, cactusX2 + (cactusRandInt * 100), CANVAS_HEIGHT - 160, 90, 100);
            if (cactusX2 < -(cactDeadEnd + CANVAS_WIDTH)) {
                cactusX2 = CANVAS_WIDTH;
                dblCactRand = Math.round(Math.random() * 3) + 1;
                cactusRandIndex = Math.floor(Math.random() * 3)
            } else {
                cactusX2 -= gameSpeed;
            }
        } else if (dblCactRand == 2) {
            ctx.drawImage(cactus3, 0, 0, 176, 170, cactusX2 + (cactusRandInt * 100), CANVAS_HEIGHT - 160, 110, 110);
            if (cactusX2 < -(cactDeadEnd + CANVAS_WIDTH)) {
                cactusX2 = CANVAS_WIDTH;
                dblCactRand = Math.round(Math.random() * 3) + 1;
                cactusRandIndex = Math.floor(Math.random() * 3)
            } else {
                cactusX2 -= gameSpeed;
            }
        } else {
            dblCactRand = Math.round(Math.random() * 3) + 1;
            cactusRandIndex = Math.floor(Math.random() * 3)
        }
    }
    }
    function cactusShow3() {
        if (window.matchMedia("(min-width: 320px) and (max-width: 900px").matches) {
            ctx.drawImage(cactus3, 0, 0, 176, 170, cactusX, CANVAS_HEIGHT - 70, 110, 110);
            if (cactusX < -(cactDeadEnd + CANVAS_WIDTH)) {
                cactusX = CANVAS_WIDTH;
            } 
            else {
                cactusX -= gameSpeed;
            }
            if (dblCactRand == 1) {
            ctx.drawImage(cactus1, 0, 0, 146, 173, cactusX2 + (cactusRandInt * 100), CANVAS_HEIGHT - 70, 90, 100);
            if (cactusX2 < -(cactDeadEnd + CANVAS_WIDTH)) {
                cactusX2 = CANVAS_WIDTH;
                dblCactRand = Math.round(Math.random() * 3) + 1;
                cactusRandIndex = Math.floor(Math.random() * 3)
            } else {
                cactusX2 -= gameSpeed;
            }
        } else if (dblCactRand == 2) {
            ctx.drawImage(cactus2, 0, 0, 203, 158, cactusX2 + (cactusRandInt * 100), CANVAS_HEIGHT - 60, 115, 90);
            if (cactusX2 < -(cactDeadEnd + CANVAS_WIDTH)) {
                cactusX2 = CANVAS_WIDTH;
                dblCactRand = Math.round(Math.random() * 3) + 1;
                cactusRandIndex = Math.floor(Math.random() * 3)
            } else {
                cactusX2 -= gameSpeed;
            }
        } else {
            ctx.drawImage(cactus1, 0, 0, 146, 173, cactusX2 + (cactusRandInt * 100), CANVAS_HEIGHT - 70, 90, 100);
            if (cactusX2 < -(cactDeadEnd + CANVAS_WIDTH)) {
                cactusX2 = CANVAS_WIDTH;
            } else {
                cactusX2 -= gameSpeed;
            }
            ctx.drawImage(cactus2, 0, 0, 203, 158, cactusX3 + (cactusRandInt2 * 100), CANVAS_HEIGHT - 60, 115, 90);
            if (cactusX3 < -(cactDeadEnd + CANVAS_WIDTH)) {
                cactusX3 = CANVAS_WIDTH;
                dblCactRand = Math.round(Math.random() * 3) + 1;
                cactusRandIndex = Math.floor(Math.random() * 3)
            } else {
                cactusX3 -= gameSpeed;
            }
        }
    } else {
         ctx.drawImage(cactus3, 0, 0, 176, 170, cactusX, CANVAS_HEIGHT - 160, 110, 110);
            if (cactusX < -(cactDeadEnd + CANVAS_WIDTH)) {
                cactusX = CANVAS_WIDTH;
            } 
            else {
                cactusX -= gameSpeed;
            }
            if (dblCactRand == 1) {
            ctx.drawImage(cactus1, 0, 0, 146, 173, cactusX2 + (cactusRandInt * 100), CANVAS_HEIGHT - 160, 90, 100);
            if (cactusX2 < -(cactDeadEnd + CANVAS_WIDTH)) {
                cactusX2 = CANVAS_WIDTH;
                dblCactRand = Math.round(Math.random() * 3) + 1;
                cactusRandIndex = Math.floor(Math.random() * 3)
            } else {
                cactusX2 -= gameSpeed;
            }
        } else if (dblCactRand == 2) {
            ctx.drawImage(cactus2, 0, 0, 203, 158, cactusX2 + (cactusRandInt * 100), CANVAS_HEIGHT - 160, 115, 90);
            if (cactusX2 < -(cactDeadEnd + CANVAS_WIDTH)) {
                cactusX2 = CANVAS_WIDTH;
                dblCactRand = Math.round(Math.random() * 3) + 1;
                cactusRandIndex = Math.floor(Math.random() * 3)
            } else {
                cactusX2 -= gameSpeed;
            }
        } else {
            ctx.drawImage(cactus1, 0, 0, 146, 173, cactusX2 + (cactusRandInt * 100), CANVAS_HEIGHT - 160, 90, 100);
            if (cactusX2 < -(cactDeadEnd + CANVAS_WIDTH)) {
                cactusX2 = CANVAS_WIDTH;
            } else {
                cactusX2 -= gameSpeed;
            }
            ctx.drawImage(cactus2, 0, 0, 203, 158, cactusX3 + (cactusRandInt2 * 100), CANVAS_HEIGHT - 160, 115, 90);
            if (cactusX3 < -(cactDeadEnd + CANVAS_WIDTH)) {
                cactusX3 = CANVAS_WIDTH;
                dblCactRand = Math.round(Math.random() * 3) + 1;
                cactusRandIndex = Math.floor(Math.random() * 3)
            } else {
                cactusX3 -= gameSpeed;
            }
        }
    }
    }

    let cactusFunc = [cactusShow1, cactusShow2, cactusShow3];
        cactusFunc[cactusRandIndex]();
    if (gameStart == false) {
        gameFrame = 0;
        return;
    }
    if (gameStart == true && collided == false) {
        collisionDetection();
    }
    requestAnimationFrame(animateBg);
}