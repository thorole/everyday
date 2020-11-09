/* Get the selects and the wrappers */
let selects = document.getElementsByClassName("select");
let wrappers = document.getElementsByClassName("wrapper");


/* Loop through selects */
for (let i = 0, j = 0; i < selects.length; i++, j++) {
    selects[i].style.display = "none";                   // Hide original select
    let options = selects[i].children;                   // Get the options  
    let defaultOption = document.createElement("div");   // Create replacement for select
    defaultOption.innerHTML = options[0].innerHTML;      // Set default 
    defaultOption.classList.add("all-options");             
    wrappers[j].appendChild(defaultOption);              // Append select to wrapper

    for (let i = 0; i < options.length; i++) {           // Loop through options
        let opt = document.createElement("div");         // Create replacement for option
        opt.classList.add("option")                         
        opt.style.display = "none";                      // Hide options
        opt.innerHTML = options[i].innerHTML;            // Set option text according to original option
        wrappers[j].appendChild(opt);                    // Append option to wrapper
        opt.addEventListener("click", function () {      // Wait for click on any option
            defaultOption.innerHTML = this.innerHTML;    // Set default option text equal to option clicked  
        });
        wrappers[j].addEventListener("click", function () {
            if (opt.style.display == "block") {          // If visible, hide
                opt.style.display = "none";                 
            }
            else {                                       // else display
                opt.style.display = "block";
            }
        });
    }
}



