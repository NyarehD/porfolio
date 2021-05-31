$(document).ready(function () {
    let secondDiv = $('#secondDiv');
    secondDiv.toggleClass("invisible");
    secondDiv.waypoint(function (direction) {
        secondDiv.toggleClass("invisible visible");
        secondDiv.children("div").toggleClass("animate__animated animate__fadeInUp");
    }, {
        offset: "10"
    })
    // $(".project-card").on({
    //     mouseenter: function () {
    //         $('.project-card').css("background-color", "rgba(95, 95, 95, 0.342)");
    //         $(".project-text").removeClass("invisible");
    //     },
    //     mouseleave: function () {
    //         $('.project-text').addClass("invisible");
    //     }
        
    // });

})

