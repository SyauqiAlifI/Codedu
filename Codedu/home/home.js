// Navbar handler
window.onscroll = function () {fixnav();}
function fixnav() {
    let home_nav = document.getElementById('main-nav')
    if (document.documentElement.scrollTop > 1) {
        home_nav.className = "fixed-nav"
    } else {
        home_nav.className = ""
    }
}
