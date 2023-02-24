score = 0;
cross = true;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');

setTimeout(() => {
    audio.play();
}, 1000);

document.onkeydown = function (e) {
    console.log("key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }

    else if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 120 + "px";
        
    }

    else if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX - 122 + "px";
    }

};
setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    console.log(offsetX, offsetY);
    if (offsetX < 93 && offsetY < 52) {
        document.getElementById("gameovr").innerHTML = "Game over- Reload to play again";
        obstacle.classList.remove('obstacleAni');
        dino.classList.add('animateDinoend');
        dino.style.bottom = -100 + "px";
        btn = document.querySelector('#refresh');
        btn.addEventListener("click", function () {
            location.reload();
        });

        btn = document.querySelector('#refresh');
        btn.style.visibility = 'visible';
        audiogo.play();
        audio.pause();
        setTimeout(() => {
            audiogo.pause();
        }, 1000);
        cross = false;
    }
     else if (offsetX < 145 && cross) {

        score = score + 1;
        scorecount(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            animduration = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newdur = animduration - 0.1;
            obstacle.style.animationDuration = newdur + 's';
        }, 300)

    }
    else {
        audiogo.pause();
    }

}, 100);

function scorecount(score) {
    if (offsetX < 93 && offsetY < 52) {

    }
    ScoreCont.innerHTML = "Your Score: " + score;

}

