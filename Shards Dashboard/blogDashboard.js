var dropdown = document.getElementsByClassName("dropdown")[0];
function openDropdown() {
    if(dropdown.style.display === "none"){
        dropdown.style.display = "block";
    }
    else {
        dropdown.style.display = "none";
    }
}

var updateProfileMsg = document.getElementsByClassName('profileUpdateMsg')[0];
function closeMsg() {
    updateProfileMsg.style.display = "none";
}

var dashboardMenu = document.getElementsByClassName('dashboardMenu')[0];
    function showMenu(){
            dashboardMenu.style.display = "flex";
            dashboardMenu.style.animationName = "showMenu";
    }

function hideMenu(){
    dashboardMenu.style.animationName = "hideMenu";
}

