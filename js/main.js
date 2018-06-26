
// ======Configure Slider ====== //

$(".carousel").carousel({
  interval: 5000,
  pause: "hover"
});


// ======= ScrollReveal ========

window.sr = ScrollReveal();

sr.reveal(".green-icon,  .leftCard, .christina-staff", {
    duration: 3000,
    origin: "left",
    distance: "200px",
    mobile: false
});

sr.reveal(".service-icon, .middleCard, .charlotte-staff", {
  duration: 3000,
  origin: "top",
  distance: "100px",
  mobile: false
});

sr.reveal(".pet-icon, .rightCard, .björn-staff", {
  duration: 3000,
  origin: "right",
  distance: "200px",
  mobile: false
});



// ======== Slider with reference  ========= //

$(".slider").slick({
  infinite: true,
  slideToShow: 1,
  slideToScroll: 1
});


// ===== Video play =======

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

  /******* Google Map *******/

  function initMap(){
    //map options
    var options = {
        zoom: 15,
        center: {
            lat:63.802301,
            lng:20.322301
        }
    }
    //new map
    map = new google.maps.Map(document.getElementById('map'), options);

    //add marker
    var marker = new google.maps.Marker({
        position:{
            lat:63.802301,
            lng: 20.322301
        },
        map: map
    })
}

  // ====== Anmations accomplishments ======//

  new WOW().init();

  
    

// === Update current year for the copyright ===

$("#year").text(new Date().getFullYear());