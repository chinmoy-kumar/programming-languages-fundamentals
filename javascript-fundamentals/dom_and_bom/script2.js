// Example-06
// ------------
document.getElementById('clickMeButton').addEventListener('dblclick', function () {
    alert("Your Message goes here");
})

// Example-07
// ------------
document.getElementById('teaList').addEventListener('click', function (event) {
    // event parameter contains information about what was clicked.

    // shows the target event that has clicked on
    // console.log(event.target);

    // Select only the specific selector as event target
    if(event.target && event.target.matches('.teaItem'))
    {
        alert("You selected: " + event.target.textContent);
    }

})