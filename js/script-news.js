/*News JS*/

//hide the clear filter button from the start
var elem = document.getElementById('clearFilterButton');
elem.style.display = 'none';

/*click maintenance filter*/

document.getElementById("maintenanceFilterButton").addEventListener("click", maintenanceFunction);

function maintenanceFunction() {
    maintenanceFilterButton.style.color = "orange"; //change colour of icon ***only changing text atm ***need to look at toggle / off when others are clicked & when it's clicked twice
}

document.getElementById("maintenanceFilterButton").addEventListener("click", showFunction);

function showFunction() {
    elem.style.display = "block"; //show clear filter options
}

//***display only maintenance items

/*click community filter*/

document.getElementById("communityFilterButton").addEventListener("click", communityFunction);

function communityFunction() {
    communityFilterButton.style.color = "orange"; //change colour of icon - only changing text atm***
}

document.getElementById("communityFilterButton").addEventListener("click", showFunction);

function showFunction() {
    elem.style.display = "block"; //show clear filter options
}