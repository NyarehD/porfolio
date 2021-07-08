$(document).ready(function () {
  // For animation to be activated when user reaches the content
  new WOW().init();
  /**
   * Global variable for scrolling up or down
   */
  let previousSection;
  
  // For Navbar to be revealed when scrolling up and hide when scrolling down
  $(window).scroll(function () {
    let current = $(this).scrollTop();
    
    // To hide navbar while in header section whether scrolling up or down
    if ((this.innerHeight * 0.9) >= current) {
      $('#header').addClass("toFixedHide").removeClass("toFixedShow b-shadow")
    } else {
      // To hide navbar while scrolling down
      if (previousSection < current) {
        $('#header').addClass("toFixedHide").removeClass("toFixedShow b-shadow")
      } else if (previousSection >= current) {
        /**
         * The reason why I didn't use else is that the classes can be messed up like below
         * So by default, make the 2 and 3 to trigger simutaneously
         * Because we haven't assigned previousSection yet
         */
        // To show navbar while scrolling up
        $('#header').addClass("toFixedShow b-shadow").removeClass("toFixedHide")
      }
    }
    previousSection = $(this).scrollTop();
  })
  
  // For changing active link color in Navbar
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
  
  // For slick js which is used for project cards carousel
  $('.project-cards').slick({
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  });
})

// For loader at the beginning to be removed when the page is ready
$(window).on("load",function () {
  $(".loader-container").fadeOut(1000, function () {
    $(this).remove();
  })
})



