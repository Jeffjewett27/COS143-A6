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
    var errorMessage = "";
    var blurSubmit = true;
    for (let c in val) {
        let code = val.charCodeAt(c);
        let alphanum = (code > 47 && code < 58) || //numeric
            (code > 64 && code < 91) || //capital
            (code > 96 && code < 123); //lowercase
        if (!alphanum) {
            valid = false;
            errorMessage = "Username can only contain a-z, A-Z, and 0-9 characters";
        }
        count++;
    }
    if (blurSubmit && val.length < 3 || val.length > 5) {
        valid = false;
        errorMessage = "Username must be 3-5 characters long";
    }
    if (valid) {
        if (blurSubmit) {
            username.classList.add("valid");
        }
        username.classList.remove("invalid");
    } else {
        username.classList.add("invalid");
        username.classList.remove("valid");
    }
    userError.innerHTML = errorMessage;
    return valid;
}
function validatePassword(event) {
    var val = password.value;
    var valid = true;
    var count = 0;
    var containsUpper = false;
    var containsLower = false;
    var errorMessage="";
    var blurSubmit = true;
    for (let c in val) {
        let code = val.charCodeAt(c);
        if (code > 64 && code < 91) {
            containsUpper = true;
        } //capital
        if (code > 96 && code < 123) {
            containsLower = true;
        } //lowercase
        count++;
        console.log(code + ", " + containsLower + ", " + containsUpper);
    }
    if (!containsUpper || ! containsLower) {
        valid = false;
        errorMessage = "Password must contain an uppercase and a lowercase letter";
    }
    if (val.length < 3 || val.length > 5) {
        valid = false;
        errorMessage = "Password must be 3-5 characters long";
    }
    console.log(event)
    if (valid) {
        password.classList.add("valid");
        passError.innerHTML = errorMessage;
        password.classList.remove("invalid");
    } else if (blurSubmit){
        password.classList.add("invalid");
        password.classList.remove("valid");
        passError.innerHTML = errorMessage;
    }
    return valid;
}
function validateSubmission(event) {
    console.dir(event);
    let userValid = validateUsername(event);
    let passValid = validatePassword(event);
    console.log(passValid);
    if (userValid && passValid) {
        alert("submitted");
    } else {
        event.preventDefault();
    }
}
hideButton.addEventListener("click", hideElement);
showButton.addEventListener("click", showElement);
addButton.addEventListener("click", addToList);
duplicateButton.addEventListener("click", duplicateButtonNow);
var numDuplicates = 1;
changeButton.addEventListener("click", changeStyle);
showoff.addEventListener("mousemove", changeShowoff);
username.addEventListener("input", validateUsername);
password.addEventListener("input", validatePassword);
username.addEventListener("blur", validateUsername);
password.addEventListener("blur", validatePassword);
login.addEventListener("submit", validateSubmission);