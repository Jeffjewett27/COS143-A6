function hideElement(elem) {
    hideShow.style.visibility = "hidden";
}
function showElement(elem) {
    hideShow.style.visibility = "visible";
}
function addToList() {
    var node = document.createElement("li");
    var textnode = document.createTextNode("Water");
    node.appendChild(textnode);
    contentList.appendChild(node);  
}
function duplicateButtonNow() {
    var newButton = duplicateButton.cloneNode(false);
    newButton.id = "duplicateButton" + numDuplicates++;
    newButton.innerHTML = "Duplicate";
    newButton.addEventListener("click", duplicateButtonNow);
    footer.appendChild(newButton);
}
function changeStyle() {
    duplicationBox.classList.toggle("wonky");
}
function changeShowoff(event) {
    var x = event.pageX - event.target.offsetLeft;
    var y = event.pageY - event.target.offsetTop;
    var xp = (x / event.target.offsetWidth - 0.5) * 45;
    var yp = y / event.target.offsetHeight * 2;
    showoff.style.setProperty("background", "repeating-linear-gradient(" + xp + "deg, white " + yp * 10 + "%,var(--goodGray),var(--standardBlue),black,var(--standardBlue),var(--goodGray),white 50%)")
}
hideButton.addEventListener("click", hideElement);
showButton.addEventListener("click", showElement);
addButton.addEventListener("click", addToList);
duplicateButton.addEventListener("click", duplicateButtonNow);
var numDuplicates = 1;
changeButton.addEventListener("click", changeStyle);
showoff.addEventListener("mousemove", changeShowoff);