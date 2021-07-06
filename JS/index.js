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

    // To hide navbar while in header section
    if (this.innerHeight >= current) {
      $('#header').addClass("toFixedHide").removeClass("toFixedShow b-shadow")
      console.log(1);
    } else {
      // To hide navbar while scrolling down
      if (previousSection <= current) {
        $('#header').addClass("toFixedHide").removeClass("toFixedShow b-shadow")
        console.log(2);
      } else if (previousSection > current) {
        /**
         * The reason why I didn't use else is that the classes can be messed up like below
        *So by default, make the 2 and 3 to trigger simutaneously
        *Because we haven't assigned previousSection yet
         */
        // To show navbar while scrolling up
        $('#header').addClass("toFixedShow b-shadow").removeClass("toFixedHide")
        console.log(3);
      }
      previousSection = current;
    }
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

