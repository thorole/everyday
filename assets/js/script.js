document.getElementById("default").addEventListener("click", openOrClose);


// Open or close the dropdown on click
function openOrClose() {
    let dropdown = document.getElementById("dropdown");
    let chosenOption = document.getElementById("default");
    if (dropdown.classList.contains("hide")) {
        dropdown.classList.remove("hide");
        chosenOption.classList.add("focus-border");
    }
    else {
        dropdown.classList.add("hide");
        chosenOption.classList.remove("focus-border");
    }
}


// Eventlisteners for the four different options.
document.getElementById("option1").addEventListener("click", function () {

    document.getElementById("option-text").innerText = " Option 1";
    openOrClose();
});

document.getElementById("option2").addEventListener("click", function () {
    document.getElementById("option-text").innerHTML = " Option 2";
    openOrClose();
});

document.getElementById("option3").addEventListener("click", function () {
    document.getElementById("option-text").innerHTML = " Option 3";
    openOrClose();
});

document.getElementById("option4").addEventListener("click", function () {
    document.getElementById("option-text").innerHTML = " Option 4";
    openOrClose();
});


//As far as I got before deadline.
document.addEventListener("keydown", function () {
    let dropdown = document.getElementById("dropdown");
    let chosenOption = document.getElementById("default");
    if (dropdown.classList.contains("hide")) {
        dropdown.classList.remove("hide");
        chosenOption.classList.add("focus-border");
    }
});

