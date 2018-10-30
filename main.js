$('.part-one .btn-next').click(function() {
  $('.part-one .circle-container').replaceWith('<div class ="circle-container"><i class="circle far fa-check-circle fa-3x"></i></div>');
  $(this).closest('.hidden-off').addClass('hidden-on');
  animation($('.part-one .fa-check-circle'));
  $('.part-two > .hidden-on').removeClass('hidden-on');
});

$('.part-two .btn-next').click(function() {
  $('.part-two .circle-container').replaceWith('<div class ="circle-container"><i class="circle far fa-check-circle fa-3x"></i></div>');
  $(this).closest('.hidden-off').addClass('hidden-on');
  animation($('.part-two .fa-check-circle'));
  $('.part-three > .hidden-on').removeClass('hidden-on');
  $('.part-one .circle-container').replaceWith('<div class ="circle-container"><img src="https://i.imgur.com/lDNJXgW.png"></img></div>');
  $('.part-one .circle-container').css('background-color', '#a0a0a0');
});

$('.part-three .btn-next').click(function() {
  $('.part-three .circle-container').replaceWith('<div class ="circle-container"><i class="circle far fa-check-circle fa-3x"></i></div>');
  $(this).closest('.hidden-off').addClass('hidden-on');
  animation($('.part-three .fa-check-circle'));
  $('.part-two .circle-container').replaceWith('<div class ="circle-container"><img src="https://i.imgur.com/lDNJXgW.png"></img></div>');
  $('.part-two .circle-container').css('background-color', '#a0a0a0');
});


function animation(element) {
  TweenMax.from(element, 1, {
    scale: 0,
    opacity: 0,
    ease: SlowMo.easeIn,
  });

  TweenMax.to(element, 0.5, {
    delay: 1,
    x: "+=3",
    y: "+=3",
    rotation: 360,
    yoyo: true,
    repeat: 1,
  });
}

/*********** scroll *************/
$(document).ready(
  function() {
    $(".fixed-container").niceScroll(".parts-container", {
      cursorcolor: "#00F"
    });
  }
);