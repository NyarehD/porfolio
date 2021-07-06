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
          dots: true
        }
      }, {
        breakpoint: "768",
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  });


  // $("#projects").waypoint(function (direction) {
  //   $("#header").toggleClass("toFixed b-shadow")
  // }, {
  //   offset: "10%"
  // })

  // Global variable
  let previousSection;
  $(window).scroll(function (event) {
    let current = $(this).scrollTop();
    if ((this.innerHeight * 0.9) >= current) {
      $('#header').addClass("toFixedHide").removeClass("toFixedShow b-shadow")
      console.log(1);
    }else {
      if (previousSection<current) {
        $('#header').addClass("toFixedHide").removeClass("toFixedShow b-shadow")
      } else {
        //up
        $('#header').addClass("toFixedShow b-shadow").removeClass("toFixedHide")
      }
      previousSection = current;
    }

    // //down
    // if (previousSection < current) {
    //   $('#header').addClass("toFixedHide").removeClass("toFixedShow b-shadow");
    // } else {
    //   //up
    //   //
    //   if ((this.innerHeight * 0.9) >= current) {
    //     $('#header').addClass("toFixedShow b-shadow").removeClass("toFixedHide");
    //   } else {
    //     $("#header").addClass("toFixedHide").removeClass("toFixedShow b-shadow");
    //   }
    // }
  })
  function setActiveWhileScrolling() {
    let sections = $("section[id]");// For selecting section elements with id attributes
    sections.waypoint(function (direction) {
      let currentSection = $(this.element).attr("id");
      (direction === "down") && setActiveInNavBar(currentSection)
    }, {
      offset: "10%"
    });
    sections.waypoint(function (direction) {
      let currentSection = $(this.element).attr("id");
      (direction === "up") && setActiveInNavBar(currentSection)
    }, {
      offset: "-100%"
    })
    function setActiveInNavBar(currentSectionId) {
      $(".nav-link").removeClass("f-orangy");
      $(`.nav-link[href='#${currentSectionId}']`).addClass("f-orangy")
    }
  }
  setActiveWhileScrolling();
})

