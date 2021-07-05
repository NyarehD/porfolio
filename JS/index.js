$(document).ready(function () {

  $('.project-cards').slick({
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      }, {
        breakpoint: "768",
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $("#projects").waypoint(function (direction) {
    $("#header").toggleClass("toFixed animate__animated animate__fadeInDown")
    console.log(direction)
  })

})

