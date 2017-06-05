// Toggles the Visibility of the menu
function openHeaderMenuMobile() {
    var element = document.getElementById("headerMenuList");

    if (element.style.height == "100px")
        element.style.height = "0px";
    else
        element.style.height = "100px";
}