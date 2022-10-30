/*News JS*/


//hide the clear filter button from the start
var elem = document.getElementById('clearFilterButton');
elem.style.display = 'none';

/*click maintenance filter*/

document.getElementById("maintenanceFilterButton").addEventListener("click", maintenanceFunction);
function maintenanceFunction() {
    maintenanceFilterButton.style.color = "#eba10c";  //change colour of icon wording
    communityFilterButton.style.color = "#000000";
    laundryFilterButton.style.color = "#000000";
    outdoorFilterButton.style.color = "#000000";
    holidaysFilterButton.style.color = "#000000";
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
    holidaysFilterButton.style.color = "#000000";}


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

