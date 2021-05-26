function showMenu() {
    console.log("showed menu");
    document.getElementById("open-menu").style.display = "none";
    document.getElementById("close-menu").style.display = "initial";
    document.getElementById("sideNav").style.width = "100%";
}
function closeMenu() {
    document.getElementById("open-menu").style.display = "initial";
    document.getElementById("close-menu").style.display = "none";
    document.getElementById("sideNav").style.width = "0";
}
function checkLink() {
    var link = document.querySelectorAll('a');
    var href = {};
    for (var i = 0; i < link.length; i++) {
        href[i].push(link[i]);
    }

    console.log(href);
}
