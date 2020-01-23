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
function validateUsername(event) {
    var val = username.value;
    var valid = true;
    var count = 0;
    for (let c in val) {
        let alphanum = (c > 47 && c < 58) && //numeric
            (c > 64 && c < 91) && //capital
            (c > 96 && c < 123); //lowercase
        if (!alphanum) {
            valid = false;
        }
        count++;
        console.log(c + ", " + alphanum);
    }
    if (val.length < 3 || val.length > 5) {
        valid = false;
    }
    if (valid) {
        username.classList.add("valid");
        username.classList.remove("invalid");
    } else {
        username.classList.add("invalid");
        username.classList.remove("valid");
    }
    console.dir(username);
}
console.log("test");
hideButton.addEventListener("click", hideElement);
showButton.addEventListener("click", showElement);
addButton.addEventListener("click", addToList);
duplicateButton.addEventListener("click", duplicateButtonNow);
var numDuplicates = 1;
changeButton.addEventListener("click", changeStyle);
showoff.addEventListener("mousemove", changeShowoff);
username.addEventListener("input", validateUsername);