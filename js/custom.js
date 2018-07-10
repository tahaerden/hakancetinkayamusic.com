/*  globals $:true */
$(document).ready(function () {
  $('a[href*=\\#]').on('click', function (event) {
    event.preventDefault()
    $('html,body').animate({scrollTop: $(this.hash).offset().top - 50}, 500)
  })

  // Smooth scrolling when the document is loaded and ready
  $(document).ready(function () {
    if (location.hash) {
      $('html,body').animate({scrollTop: $(location.hash).offset().top - 50}, 500)
    }
  })
  // if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false)
  // window.onmousewheel = document.onmousewheel = wheel
  //
  // function wheel (event) {
  //   var delta = 0
  //   if (event.wheelDelta) delta = event.wheelDelta / 120
  //   else if (event.detail) delta = -event.detail / 3
  //
  //   handle(delta)
  //   if (event.preventDefault) event.preventDefault()
  //   event.returnValue = false
  // }
  //
  // function handle (delta) {
  //   var time = 1000
  //   var distance = 300
  //
  //   $('html, body').stop().animate({
  //     scrollTop: $(window).scrollTop() - (distance * delta)
  //   }, time)
  // }
  $('.open-popup-link').magnificPopup({
    type: 'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  })
  $('.img-popup').magnificPopup({
    type: 'image'
  })
  $('.video-popup-parent').magnificPopup({
    delegate: 'a',
    type: 'iframe'
  })
  $('.img-popup-zoom').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  })
})
