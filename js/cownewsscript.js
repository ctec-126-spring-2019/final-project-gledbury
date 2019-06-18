// script.js

function displayQuotesPanel() {
    console.log('quotes function fired');
    clear('quotesPanel');
    var quotesPanel = document.getElementById('quotesPanel');
    var quotes = ["When a cow laughs, does milk come out her nose? ", "Condensed milk is wonderful. I don't see how they can get a cow to sit down on those little cans.", "Never kick a cow chip on a hot day.", "Who was the first guy that look at a cow and said, I think that I'll drink whatever comes out of those things when I squeeze them?", "I'd rather kiss a mad cow on the muzzle than a smoker on the mouth.", "To laugh is human but to moo is bovine.", "There's nothing like sitting back and talking to your cows", "There's something about getting up at 5 a.m., feeding the stock and chickens, and milking a couple of cows before breakfast that gives you a lifelong respect for the price of butter and egg", "To my mind, the only possible pet is a cow. Cows love you. They will listen to your problems and never ask a thing in return. They will be your friends forever. And when you get tired of them, you can kill and eat them. Perfect", "I don't want any vegetables, thank you. I paid for the cow to eat them for me.", "Don't have a cow, man."];

    var random = Math.floor(Math.random() * quotes.length);
    quotesPanel.innerHTML = '<p>"' + quotes[random] + '"</p>';
}

function displayNewsPanel() {
    var newsItems = document.getElementById('newsPanel');
    var news = [['June 10, 2019', 'Really Big News', 'Video footage of Clark instructor throwing objects at a very handsome and smart student in class... Oh the humanity!..  When will it end?...  The student bravely caught as many cows as he could!', 'cowcatch.html'], ['June 03, 2019', 'OK News', 'Video footage of Clark instructor throwing objects at a very handsome and smart student in class... Oh the humanity!..  When will it end?...The student bravely caught as many cows as he could!', 'cowcatch.html'], ['May 20, 2019', 'GREAT NEWS!', 'Video footage of Clark instructor throwing objects at a very handsome and smart student in class... Oh the humanity!..  When will it end?...The student bravely caught as many cows as he could!', 'cowcatch.html'], ['May 15, 2019', 'Welcome Back', 'Video footage of Clark instructor throwing objects at a very handsome and smart student in class... Oh the humanity!..  When will it end?...  The student bravely caught as many cows as he could!', 'cowcatch.html']];

    var output = '';

    for (var i = 0; i < news.length; i++) {
        output += '<p><h3>' + news[i][1] + ' - ' + news[i][0] + '</h3>' + '<br>' + news[i][2] + '</p>';
        output += '<p><a href="' + news[i][3] + '">Read more ></a></p>';
    }

    newsItems.innerHTML = output;
}

function displayFeaturedStudentPanel() {
    clear('featuredStudentPanel');
    var featuredStudent = document.getElementById('featuredStudentPanel');
    var featuredStudents = [
        ['Bruce Elgort', 'Bruce Elgort (born a really long time ago) is an instructor at Clark College. He is best known for his work as a coding kitty.  He is self taught and has received several Microsoft Certifications in his field. He has a mancrush on Alice Cooper. In addition, Elgort likes playing the drums and talking to his plethora of Alexa devices at his home. He loves pizza and is fond of saying "please hold".  Please answer any question posed to you in class with care,  Bruce likes to throw cows at unsuspecting students.', 'img/brucefront.png'],
        ['Bruce Elgort', 'Bruce Elgort (born a really long time ago) is an instructor at Clark College. He is best known for his work as a coding kitty.  He is self taught and has received several Microsoft Certifications in his field. He has a mancrush on Alice Cooper. In addition, Elgort likes playing the drums and talking to his plethora of Alexa devices at his home. He loves pizza and is fond of saying "please hold".  Please answer any question posed to you in class with care,  Bruce likes to throw cows at unsuspecting students.', 'img/brucefront.png'],
        ['Bruce Elgort', 'Bruce Elgort (born a really long time ago) is an instructor at Clark College. He is best known for his work as a coding kitty.  He is self taught and has received several Microsoft Certifications in his field. He has a mancrush on Alice Cooper. In addition, Elgort likes playing the drums and talking to his plethora of Alexa devices at his home. He loves pizza and is fond of saying "please hold".  Please answer any question posed to you in class with care,  Bruce likes to throw cows at unsuspecting students.', 'img/brucefront.png'],
        ['Bruce Elgort', 'Bruce Elgort (born a really long time ago) is an instructor at Clark College. He is best known for his work as a coding kitty.  He is self taught and has received several Microsoft Certifications in his field. He has a mancrush on Alice Cooper. In addition, Elgort likes playing the drums and talking to his plethora of Alexa devices at his home. He loves pizza and is fond of saying "please hold".  Please answer any question posed to you in class with care,  Bruce likes to throw cows at unsuspecting students.', 'img/brucefront.png']
    ];

    var output = '';

    var randomStudent = Math.floor(Math.random() * featuredStudents.length);
    output += '<img src="' + featuredStudents[randomStudent][2] + '"/>';
    output += '<div class="studentpic rounded mx-auto d-block">' + featuredStudents[randomStudent][0] + '</div>';
    output += '<p>' + featuredStudents[randomStudent][1] + '</p>';

    featuredStudent.innerHTML = output;
}

function clear(panelID) {
    console.log('clear!');
    var panel = document.getElementById(panelID);
    panel.innerHTML = '';
}

function stopIntervals(timer1, timer2) {
    console.log('Stopping intervals...');
    clearInterval(timer1);
    clearInterval(timer2);
    console.log('All intervals have been stopped');
}

window.onload = function () {
    displayQuotesPanel();
    displayNewsPanel();
    displayFeaturedStudentPanel();

    var quotesTimer = setInterval(displayQuotesPanel, 5000);
    var featuredStudentTimer = setInterval(displayFeaturedStudentPanel, 10000);

    var theLogo = document.getElementById('theLogo');
    theLogo.addEventListener('click', function () {
        stopIntervals(quotesTimer, featuredStudentTimer);
    });
}