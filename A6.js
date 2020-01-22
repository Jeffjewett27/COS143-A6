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
    duplicationBox.appendChild(newButton);
}
hideButton.addEventListener("click", hideElement);
showButton.addEventListener("click", showElement);
addButton.addEventListener("click", addToList);
duplicateButton.addEventListener("click", duplicateButtonNow);
var numDuplicates = 1;