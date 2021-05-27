

// $(document).ready(function () {
//     $("#secondDiv").toggle();
//     let navbarSecond = $('#secondDiv').waypoint(function (direction) {
//         $('#secondDiv').toggle();
//         console.log(direction);
//     }, {
//         offset: "-95%"
//     })
// })

$(document).ready(function () {
    let secondDiv = $('#secondDiv');
    secondDiv.toggle();
    secondDiv.waypoint(function (direction) {
        secondDiv.toggle();
    }, {
        offset: "-95%"
    })
})
