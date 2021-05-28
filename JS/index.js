$(document).ready(function () {
    let secondDiv = $('#secondDiv');
    secondDiv.toggle();
    secondDiv.waypoint(function (direction) {
        secondDiv.toggle();
        secondDiv.children("div").addClass("animate__animated animate__fadeInUp");
    }, {
        offset: "-98%"
    })

})

