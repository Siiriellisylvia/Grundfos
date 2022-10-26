
// Mads attempt

function openDescription(descriptionId, headingId) {
    var descriptionElement = document.getElementById(descriptionId);
    var headingElement = document.getElementById(headingId);

    if (descriptionElement.style.display === "none") 
    {
        headingElement.style.borderRadius = "10px 10px 0px 0px"
        descriptionElement.style.display = "block";
    } 
    else 
    {
        headingElement.style.borderRadius = "10px 10px 10px 10px"
        descriptionElement.style.display = "none";
    }
}
