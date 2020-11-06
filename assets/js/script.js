let selects = document.getElementsByClassName("select");
let options = document.getElementsByTagName("option");
let wrapper = document.getElementById("wrapper");
selects[0].style.display = "none";

for (let i = 0; i < selects.length; i++) {
    let div = document.createElement("div");
    let wrapper = document.getElementById("wrapper");
    div.innerHTML = options[0].innerHTML;
    wrapper.appendChild(div);
}

for (let i = 0; i < options.length; i++) {
    let opt = document.createElement("div");
    opt.classList.add("option")
    opt.style.display = "none";
    opt.innerHTML = options[i].innerHTML;
    wrapper.appendChild(opt);
}

wrapper.addEventListener("click", function () {
    for (let i = 0; i < options.length; i++) {
        let options = document.getElementsByClassName("option")
        if (options[i].style.display == "block") {
            options[i].style.display = "none";
        }
        else {
            options[i].style.display = "block";
        }
    }
});

