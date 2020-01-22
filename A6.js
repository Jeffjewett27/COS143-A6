function hideElement(elem) {
    hideShow.style.visibility = "hidden";
}
function showElement(elem) {
    hideShow.style.visibility = "visible";
}
hideButton.addEventListener("click", hideElement);
showButton.addEventListener("click", showElement);