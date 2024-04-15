console.log(`hit indexFunctionality.js file`);

//______________________Function Definitions_______________

const toggleAcronymSection = () => {
    // Dom elements into variables
    const isAcronymYes = document.getElementById('acronymYes').checked;
    const acronymDiv = document.getElementById('reveal-if-active');
    const acronymInput = document.getElementById('acronym');
    const acronymDateInput = document.getElementById('acronymDate');
    console.log(`The stuff: ${isAcronymYes}, ${acronymDiv}, ${acronymInput}, ${acronymDateInput}`);
   
    // if 'yes' radio selected, Acronym and acronym date inputs are required
    if (isAcronymYes) {
        acronymDiv.style.display = 'block';
        acronymInput.required = true;
        acronymDateInput.required = true;
     } else {
        acronymDiv.style.display = 'none';
        acronymInput.required = false;
        acronymDateInput.required = false;
       }
};

//______________________Acronym display based on radio selection functionality_______________

document.addEventListener('DOMContentLoaded', () => {
    //When radio button selection changes, show or hide Acronym section
    document.getElementById('acronymYes').addEventListener('change', toggleAcronymSection);
    document.getElementById('acronymNo').addEventListener('change', toggleAcronymSection);

    // Initial state setup
    toggleAcronymSection();
});