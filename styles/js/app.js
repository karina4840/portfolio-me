const menu = $("#nav-elements-id");

//=========APPEARING OF THE MENU==========

$(".menu-button").click(() => {
  menu.toggleClass("shown");
});

//=========SMOOTH SCROLLING==========

$(document).ready(function () {
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();

    var target = this.hash;
    $target = $(target);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
        },
        600,
        "swing",
        function () {
          window.location.hash = target;
        }
      );
  });
});

//=========LANGUAGE FEATURE==========
$('[lang="en"]').hide();

$("#switch-lang").click(function (e) {
  e.preventDefault();
  $('[lang="ru"]').toggle();
  $('[lang="en"]').toggle();
});
