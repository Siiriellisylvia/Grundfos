//Show/Hide search bar

function showSearchbar() {
    var SearchIconElement = document.getElementById("search-button");
    var SearchBarElement = document.getElementById("search-bar");
    var KeyboardElement=document.getElementById("keyboard");
    var BackgroundContent=document.getElementById("main-all-content")

    if (SearchBarElement.style.visibility != "visible") 
        {
            KeyboardElement.style.visibility ="visible";
            SearchBarElement.style.visibility="visible";
            BackgroundContent.style.filter= "blur(3px)";
            SearchIconElement.style.visibility="hidden";
        }
        
    else 
        {
            SearchBarElement.style.visibility = "hidden";
            KeyboardElement.style.visibility = "hidden";
            SearchIconElement.style.visibility= "visible";
            BackgroundContent.style.filter= "blur(0px)";
        }
}
