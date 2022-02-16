const titles = ["snowboarder 🏂", "traveler ✈️", "optimist 🥛", "forever student ✏️", "milk tea lover 🧋"];
const title = $("#title-changable");
const menu = $("#nav-elements-id");
var loopItem = 0;

//=========CHANGE IN THE HERO==========
setInterval(changeText, 1500);

function changeText() {
    title.fadeOut(function() {
        title.html(titles[loopItem]);
        loopItem++;
        if (loopItem >= titles.length) {
            loopItem = 0;
        } 
        title.fadeIn();
    });
};

//=========APPEARING OF THE MENU==========

$(".menu-button").click(() => {
    menu.toggleClass("shown");
});

//=========SMOOTH SCROLLING==========

$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top
        }, 600, 'swing', function () {
            window.location.hash = target;
        });
    });
});