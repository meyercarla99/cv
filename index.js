tabChanged = (tabIndex) => {
    if (tabIndex > 0 && tabIndex <= 3) {
        this.updateTabButtons(tabIndex);
        let tab = document.getElementById("tab" + tabIndex);
        let tabs = document.getElementsByClassName("tab");
        setTimeout( () => {
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].style.display = "none";
            }
            tab.style.display = 'block';
        });
    }
};

updateTabButtons = (tabIndex) => {
    let selected = document.getElementById("tabHeading" + tabIndex);
    setTimeout(() => {
     if (selected != null) {
        selected.classList.add("selected-accent");
     }   
    });
    const BUTTONS = [1, 2, 3];
    for(let i = 0; i < BUTTONS.length; i++) {
        if (BUTTONS[i] != tabIndex) {
            let other = document.getElementById("tabHeading" + BUTTONS[i]);
            setTimeout(() => {
             if (other != null) {
                other.classList.remove("selected-accent");
             }   
            });
        }
    }
}


mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));