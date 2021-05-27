$(document).ready(function () {
    let secondDiv = $('#secondDiv');
    secondDiv.toggle();
    secondDiv.waypoint(function (direction) {
        secondDiv.toggle();
    }, {
        offset: "-100%"
    })

})

