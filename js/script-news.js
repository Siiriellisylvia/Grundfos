/*News JS*/


//hide the clear filter button from the start
const elem = document.getElementById('clearFilterButton');
elem.style.display = 'none';


//function to filter news articles

function filterArticles(showClass) {
    
    for (const elm of document.getElementsByClassName("newsArticle")) {
        elm.classList.add("hidden");
    }

    for (const elm of document.getElementsByClassName(showClass)) {
        elm.classList.remove("hidden");
    }
}

/*click maintenance filter*/

document.getElementById("maintenanceFilterButton").addEventListener("click", maintenanceFunction);
function maintenanceFunction() {
    maintenanceFilterButton.style.color = "#eba10c";  //change colour of icon wording
    communityFilterButton.style.color = "#000000";
    laundryFilterButton.style.color = "#000000";
    outdoorFilterButton.style.color = "#000000";
    holidaysFilterButton.style.color = "#000000";
    filterArticles("maintenanceArticle"); //filter maintenance articles using filterArticles function above
}

document.getElementById("maintenanceFilterButton").addEventListener("click", showFunction);
function showFunction() {
    elem.style.display = "block"; //show clear filter option
}

//***display only maintenance items

/*click community filter*/

document.getElementById("communityFilterButton").addEventListener("click", communityFunction);
function communityFunction() {
    communityFilterButton.style.color = "#eba10c"; //change colour of icon wording
    maintenanceFilterButton.style.color = "#000000"; 
    laundryFilterButton.style.color = "#000000";
    outdoorFilterButton.style.color = "#000000";
    holidaysFilterButton.style.color = "#000000";

    filterArticles("communityArticle");
}


document.getElementById("communityFilterButton").addEventListener("click", showFunction);
function showFunction() {
    elem.style.display = "block"; //show clear filter option
}


/*click laundry filter*/
document.getElementById("laundryFilterButton").addEventListener("click", laundryFunction);
function laundryFunction() {
    laundryFilterButton.style.color = "#eba10c"; //change colour of icon wording
    maintenanceFilterButton.style.color = "#000000"; 
    communityFilterButton.style.color = "#000000";
    outdoorFilterButton.style.color = "#000000";
    holidaysFilterButton.style.color = "#000000";
}


document.getElementById("laundryFilterButton").addEventListener("click", showFunction);
function showFunction() {
    elem.style.display = "block"; //show clear filter option
}

/*click outdoor filter*/
document.getElementById("outdoorFilterButton").addEventListener("click", outdoorFunction);
function outdoorFunction() {
    outdoorFilterButton.style.color = "#eba10c"; //change colour of icon wording
    maintenanceFilterButton.style.color = "#000000"; 
    communityFilterButton.style.color = "#000000";
    laundryFilterButton.style.color = "#000000";
    holidaysFilterButton.style.color = "#000000";
}


document.getElementById("outdoorFilterButton").addEventListener("click", showFunction);
function showFunction() {
    elem.style.display = "block"; //show clear filter option
}

/*click holidays filter*/
document.getElementById("holidaysFilterButton").addEventListener("click", holidaysFunction);
function holidaysFunction() {
    holidaysFilterButton.style.color = "#eba10c"; //change colour of icon wording
    maintenanceFilterButton.style.color = "#000000"; 
    communityFilterButton.style.color = "#000000";
    laundryFilterButton.style.color = "#000000";
    outdoorFilterButton.style.color = "#000000";
}


document.getElementById("holidaysFilterButton").addEventListener("click", showFunction);
function showFunction() {
    elem.style.display = "block"; //show clear filter option
}

/*click clear filter*/
document.getElementById("clearFilterButton").addEventListener("click", clearFilterFunction);
function clearFilterFunction() {
    maintenanceFilterButton.style.color = "#000000"; //change colour of icon wording
    communityFilterButton.style.color = "#000000";
    laundryFilterButton.style.color = "#000000";
    outdoorFilterButton.style.color = "#000000";
    holidaysFilterButton.style.color = "#000000";
}

