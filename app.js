const titles = ["snowboarder 🏂", "traveler ✈️", "optimist 🥛", "forever student ✏️", "milk tea lover 🧋"];
const title = $("#title-changable");
var loopItem = 0;

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

}
