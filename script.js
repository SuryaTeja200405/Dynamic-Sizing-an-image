let imageElement = document.getElementById("image");
let widthInput = document.getElementById("imageWidth");
let warningElement = document.getElementById("warningMessage");
let maximumWidth = 300;
let minimumWidth = 100;
let defaultImageWidth = 200;
let maxWidthWarning = "Too big. Decrease the size of the Image";
let minWidthWarning = "Can't Visible. Increase the size of the Image";
widthInput.textContent = defaultImageWidth + "px";
imageElement.style.width = defaultImageWidth + "px";

function incrementButton() {
    if (defaultImageWidth >= maximumWidth) {
        warningElement.textContent = maxWidthWarning;
    } else {
        defaultImageWidth = defaultImageWidth + 5;
        let updatedImageWidth = defaultImageWidth + "px";
        widthInput.textContent = defaultImageWidth + "px";
        warningElement.textContent = "";
        imageElement.style.width = updatedImageWidth;
    }
}

function decrementButton() {
    if (defaultImageWidth <= minimumWidth) {
        warningElement.textContent = minWidthWarning;
    } else {
        defaultImageWidth = defaultImageWidth - 5;
        let updatedImageWidth = defaultImageWidth + "px";
        widthInput.textContent = defaultImageWidth + "px";
        warningElement.textContent = "";
        imageElement.style.width = updatedImageWidth;
    }
}