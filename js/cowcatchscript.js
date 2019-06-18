// set the variables needed for the game
var george = $('#george');
var container = $('#container');
var bruce = $('.bruce');
var cow = $('.cow');
var cow1 = $('#cow1');
var cow2 = $('#cow2');
var cow3 = $('#cow3');
var scoreSpan = $('#score');
var score1 = $('#score1');
var cowsSpan = $('#cows');
var floor = $('#floor');
var georgeHeight = george.height();
var containerHeight = container.height();
var cowInitialPosition = parseInt(cow.css('top'));
var score = 0;
var cows = 20;
var speed = 5;
var counter = 0;
var theGame = 0;
var animId = 0;
var cowCurrentPosition = 0;
var georgeTop = containerHeight - georgeHeight;
var results = $('#results');
cowsSpan.text(cows);// displays the starting number of cows at the top of screen

$(document).on('mousemove', function (e) {
    george.css('left', e.pageX);//when the mouse move this sets george at the mouses left position.
});

function collision($div1, $div2) {// function to determine collision detection between falling cows and catcher and floor...borrowed from the internet
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
}

function cowDown(cow) {// function to move the cows down the screen
    cowCurrentPosition = parseInt(cow.css('top'));// sets the cows top position
    cow.css('top', cowCurrentPosition + speed);// increase the cows position by speed to move it down the screen
}

function checkCowHitsFloor(cow) {// logic to determine if the cows hit the floor
    if (collision(cow, floor)) {// if the cow hits the floor
        showMiss(cow);// then show the miss picture "moo"
        loseCow();// call the loseCow function
        return true;// keep going
    }
    return false;// if the cow did not hit floor then dont show the "moo" or run the loseLife function
}

function setCowToInitialPosition(cow) {// function to set the cows original position via css
    cow.css('top', cowInitialPosition);
}

function showMiss(cow) {// function to display the "moo" picture
    missNum = cow.attr('data-miss');// determines which cow was missed via the "data-miss" attribute per cow
    $('#miss' + missNum).show(); // shows which "moo" pic to display
    hideMiss(missNum);// runs the function to hide the "moo" pic
}

function hideMiss(missNum) {// function to remove the "moo" pic after a set period of time
    setTimeout(function () {
        $('#miss' + missNum).hide();// hides the "moo" after 800 milliseconds
    }, 800);
}

function loseCow() {// function to remove a cow from total when missed
    cows--;
    cowsSpan.text(cows);
}

function checkCowHitsGeorge(cow) {// function to detect if the cow is "caught"
    if (collision(cow, george)) {// logic deciding what happens when cow is caught
        addScore();// run the addScore function
        return true;
    }

    return false;
}

function addScore() {// function to control speed of falling cows
    score++;// speed increase accumulator
    if (score % 10 === 0) {//logic to increse the speed of the cows every 10 caught
        speed++;
    }
    scoreSpan.text(score);// puts the current score at the top of screen
    score1.text(score);// adds the score onto the picture of the catcher
}

function stopTheGame() {// stop the game when no cows remaining
    cancelAnimationFrame(animId);
    results.slideDown();// put the results button on the screen
}

results.click(function () {
    window.location = "results.html";// loads the results page when the button is clicked
});

$(function () {
    theGame = function () {// main function to determine if the cows are caught

        if (checkCowHitsFloor(cow1) || checkCowHitsGeorge(cow1)) {
            setCowToInitialPosition(cow1);//if cow 1 hits the floor..reset cow to original position
        } else {
            cowDown(cow1);
        }
        if (checkCowHitsFloor(cow2) || checkCowHitsGeorge(cow2)) {
            setCowToInitialPosition(cow2);//if cow 2 hits the floor..reset cow to original position
        } else {
            cowDown(cow2);
        }
        if (checkCowHitsFloor(cow3) || checkCowHitsGeorge(cow3)) {
            setCowToInitialPosition(cow3);//if cow 3 hits the floor..reset cow to original position
        } else {
            cowDown(cow3);
        }

        if (cows > 0) {// allows the game to continue if cows remaining is greater than 0
            animId = requestAnimationFrame(theGame);
        } else {
            cows = 0;// if cows remaining is 0 then the game runs the stopTheGame function
            setCowToInitialPosition(cow);
            stopTheGame();
        }
    };

    animId = requestAnimationFrame(theGame);// built in javascript library to update the information on the screen, the animation function theGame will be called before the browser performs the next repaint or refresh....generally this happens 60 times per second. https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
});