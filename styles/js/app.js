const titles = ["snowboarder 🏂", "traveler ✈️", "optimist 🥛", "forever student ✏️", "milk tea lover 🧋"];
const title = $("#title-changable");
const menu = $("#nav-elements-id");
var loopItem = 0;

setInterval(changeText, 2000);

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


$(".menu-button").click(function () {
      menu.toggleClass("responsive");
});
