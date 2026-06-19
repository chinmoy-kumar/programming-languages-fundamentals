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
    
// Example-08
// ------------
document.getElementById('feedbackForm').addEventListener('submit', function(event){
    // Prevents the default behaviours of browser
    event.preventDefault();
    
    let feedback = document.getElementById('feedbackInput').value;
    // console.log(feedback);
    let showFeedback = document.getElementById('feedbackDisplay');
    showFeedback.textContent = `Feedback is: ${feedback}`;
    
    // Change style
    showFeedback.style.backgroundColor = '#FFBF00';
    showFeedback.style.fontWeight = 'bold';
    showFeedback.style.padding = '5px';
    showFeedback.style.color = '#1a1a1a';
    showFeedback.style.width = '30%';
    showFeedback.style.margin = 'auto';
    showFeedback.style.marginTop = '5px';
})

// Example-09
// ------------
document.addEventListener('DOMContentLoaded', function()
{
    // message will only change to "DOM fully loaded" after completing the DOM content loading.
    document.getElementById('domStatus').textContent = "DOM fully loaded";
})

// Example-10
// ------------
document.getElementById('toggleHighlight').addEventListener('click', function () {
    let descriptionText = document.getElementById('descriptionText');

    // add class if that is not already applied
    // descriptionText.classList.add('highlight');

    // remove class if that class is applied
    // descriptionText.classList.remove('highlight');

    // add if that class is not applied & remove if that class is already applied
    descriptionText.classList.toggle('highlight');

    // Checks if the element is currently applied a specific class.
    // output shows in inspect -> console in browser
    if(descriptionText.classList.contains('highlight'))
    {
        console.log("Highlighted");
    }
    else{
        console.log("Not Highlighted");
    }
})


