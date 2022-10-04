window.onload = () => { 
    openLinkInNewTab();
  }


//drop down menu 

document.addEventListener('click', (event) => {
    const isDropdown = event.target.matches('[data-dropdown-button]');
    const currentDropdown = event.target.closest('[data-dropdown]');// return null if outside of dropdown


    if (isDropdown) {
        if (currentDropdown) {
            currentDropdown.classList.toggle('active');
        }
    }

    // let the dropdown-menu stay on click 

    if (!isDropdown && currentDropdown != null) {
        return
    }

    document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
        if (dropdown === currentDropdown) {
            return
        }

        dropdown.classList.remove('active');
        
    })
});

// open link in new  tab 

function openLinkInNewTab() {
    
    const anchor = document.querySelectorAll('a:not(.current-tab)');
    
      anchor.forEach((each) => {
        each.setAttribute("target", "_blank");
    });   
    
    
  };
