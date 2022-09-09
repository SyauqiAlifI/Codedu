// Navbar handler
window.onscroll = function () {fixnav(); showFooter();}
function fixnav() {
    let home_nav = document.getElementById('main-nav')
    if (document.documentElement.scrollTop > 1) {
        home_nav.className = "fixed-nav"
    } else {
        home_nav.className = ""
    }
}
function showFooter() {
    let footer = document.getElementById('our-footer')
    if (document.documentElement.scrollTop > 1300) {
        footer.className = " active-foot"
    } else {
        footer.className = ""
    }
}
