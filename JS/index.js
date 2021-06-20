$(document).ready(function () {
  // let secondDiv = $('#secondDiv');
  // secondDiv.toggleClass("invisible");
  // secondDiv.waypoint(function () {
  //   secondDiv.toggleClass("invisible visible");
  //   secondDiv.children("div").toggleClass("animate__animated animate__fadeInUp");
  //   $(`#navbarSecondContents a[href="#projects"]`).addClass("active")
  // }, {
  //   offset: "0"
  // })
  let nav = $("#nav")
  $("#projects").waypoint(function () {
    nav.toggleClass("animate__animated animate__fadeInUp position-fixed bg-dark");
    
    $(`.navbar a[href="#home"]`).toggleClass("active");
    $(`.navbar a[href="#projects"]`).toggleClass("active");
  },{
    offset: "100"
  })
  $("").
  $('#about').waypoint(function () {
        $(`#navbarSecondContents a[href="#projects"]`).toggleClass('active')
        $(`#navbarSecondContents a[href="#about"]`).toggleClass('active')
        console.log($("#about").offset());
      }, {
        offset: '10'
      }
  )
})

