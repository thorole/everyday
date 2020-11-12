/* Get the selects and the wrappers */
let selects = document.getElementsByClassName("select");
let wrappers = document.getElementsByClassName("wrapper");


/* Loop through selects */
for (let i = 0, j = 0; i < selects.length; i++, j++) {
    selects[i].style.display = "none";                          // Hide original select
    let options = selects[i].children;                          // Get the options  
    let defaultOption = document.createElement("div");          // Create default option element
    let optionsWrapper = document.createElement("div");         // Create options wrapper
    defaultOption.innerHTML = options[0].innerHTML;             // Set default 
    defaultOption.classList.add("all-options");
    wrappers[j].appendChild(defaultOption);                     // Append the default option element
    wrappers[j].appendChild(optionsWrapper);                    // Append options wrapper 
    defaultOption.addEventListener("click", function () {       // Eventlistener for open/close options wrapper
        openClose(optionsWrapper);
    });                                                          
    for (let i = 0; i < options.length; i++) {                  // Loop through options and create the custom select
        let opt = document.createElement("div");                // Create replacement for option
        opt.classList.add("option");
        optionsWrapper.style.display = "none";                  // Hide options
        opt.innerHTML = options[i].innerHTML;                   // Set option text according to original option
        optionsWrapper.appendChild(opt);                        // Append option to wrapper
        opt.addEventListener("click", function () {             // Wait for click on any option
            defaultOption.innerHTML = this.innerHTML;           // Set default option text equal to option clicked
            for (let k = 0; k < options.length; k++) {          // Loop through original options
                if (options[i].innerHTML === this.innerHTML) {  // If same option
                    options[i].selected = true;                 // Select the same option in original select
                }
            }
        });
        opt.addEventListener("click", function () {
            openClose(optionsWrapper);
        });
    }
}

function openClose(elem) {
    if (elem.style.display == "block") {                 // If visible, hide
        elem.style.display = "none";
    }
    else {                                              // else display
        elem.style.display = "block";
    }
}





