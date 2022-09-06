function loadingOpen() {
    myVar = setTimeout(showBody, 800)
}
function showBody() {
    let mBody = document.querySelector("body")
    mBody.style.display = "block"
    mBody.className = "animate-in"
}