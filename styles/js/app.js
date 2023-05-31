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

$(".up-btn").click(function (e) {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", (e) => {
  $(".up-btn").style.display =
    window.scrollY > 800
      ? $(".up-btn").css('opacity', 100)
      : $(".up-btn").css('opacity', 0);

});
