buttons = document.getElementsByClassName("ghx-expander js-expander");
clickall = true;
for (var x=0;x<buttons.length;x++) { 
    if (buttons[x].outerHTML.includes("aria-expanded=\"true\"")) {
        buttons[x].click();
        clickall = false;
    }
}
if (clickall) {
    for (var x=0;x<buttons.length;x++) { 
        buttons[x].click();
    }
}