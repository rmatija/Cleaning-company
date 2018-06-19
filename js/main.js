
// Configure Slider

$(".carousel").carousel({
  interval: 5000,
  pause: "hover"
});

// ScrollReveal

window.sr = ScrollReveal();

sr.reveal(".green-icon", {
    duration: 3000,
    origin: "left",
    distance: "200px"
});

sr.reveal(".service-icon", {
  duration: 3000,
  origin: "top",
  distance: "100px"
});

sr.reveal(".pet-icon", {
  duration: 3000,
  origin: "right",
  distance: "200px"
});





// Video play
$(function () {
    // Auto play modal video
    $(".video").click(function () {
      var theModal = $(this).data("target"),
        videoSRC = $(this).attr("data-video"),
        videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
      $(theModal + ' iframe').attr('src', videoSRCauto);
      $(theModal + ' button.close').click(function () {
        $(theModal + ' iframe').attr('src', videoSRC);
      });
    });
  });

  // ===== Scroll to Top ==== 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
  }, 500);
});
    

  // Update current year for the copyright

$("#year").text(new Date().getFullYear());