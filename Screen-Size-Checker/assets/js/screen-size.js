function displayScreenSize() {
    let screenWidth = screen.width;
    let screenHeight = screen.height;
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    document.getElementById("screen-size").innerHTML = screenWidth + " x " + screenHeight + " px";
    document.getElementById("window-size").innerHTML = "Window Size <b>" + windowWidth + " x " + windowHeight + " px</b>";
}

// Run on load
displayScreenSize();

// Update when resized
window.addEventListener("resize", displayScreenSize);