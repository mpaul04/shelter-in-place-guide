$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    $(".title").css({
      transform: "translate(0px, " + wScroll / .5 + "%)"
    });
  });
  
  $(window).scroll(function () {
    var wScroll = $(this).scrollTop();
  
    $(".title").css({
      transform: "translate(0px, " + wScroll / 1.5 + "%)"
    });
  
    $(".transparent").css({
      transform: "translate(0px, -" + wScroll / 3 + "%)"
    });
  });
  